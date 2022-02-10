import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import createIngredientList from '../assets/helpers/create-ingredient-list';
import local from '../assets/helpers/local';
import cocktails from '../assets/services/cocktails';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';
import arrangeIngredients from '../assets/helpers/arrange-ingredients';
import FinishRecipeButton from '../components/finish-recipe-button';
import currentDate from '../assets/helpers/current-date';

export default function DrinksInProgress() {
  const [shouldRender, setShouldRender] = useState(false);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const { setFetchedRecipeDetails,
    fetchedRecipeDetails,
    shouldDisplayClipboard } = useContext(GlobalContext);
  const { id } = useParams();

  function getLocal() {
    return local.get('inProgressRecipes');
  }

  function setLocal(arg) {
    local.set('inProgressRecipes', arg);
  }

  function handleInProgressLocal(arg) {
    if (!getLocal()) {
      const newLocal = { cocktails: {}, meals: {} };
      setLocal(newLocal);
    }
    if (!getLocal().cocktails[id]) {
      const ingredientsArranged = arrangeIngredients(arg);
      const newLocal = {
        meals: { ...getLocal().meals },
        cocktails: { ...getLocal().cocktails, [id]: arrangeIngredients(arg) },
      };
      setLocal(newLocal);
      setCurrentIngredients(ingredientsArranged);
    } else {
      setCurrentIngredients(getLocal().cocktails[id]);
    }
  }

  const handleChange = useCallback((arg) => {
    const newLocal = {
      meals: { ...getLocal().meals },
      cocktails: { ...getLocal().cocktails,
        [id]: getLocal().cocktails[id]
          .map((value) => {
            if (value.ingredient === arg) value.isChecked = !value.isChecked;
            return value;
          }) },
    };
    setCurrentIngredients(newLocal.cocktails[id]);
    setLocal(newLocal);
    setShouldRender(!shouldRender);
  }, []);

  useEffect(() => { // componentDidMount
    function handleRecipeDetails() {
      cocktails.details(id).then((data) => {
        const ingredients = createIngredientList(data.drinks[0]);
        setFetchedRecipeDetails({ ...data.drinks[0], ingredients });
        handleInProgressLocal(ingredients);
      });
    }
    handleRecipeDetails();

    return () => setFetchedRecipeDetails(null);
  }, []);

  if (fetchedRecipeDetails && _.isEmpty(fetchedRecipeDetails) !== true) {
    const {
      strDrinkThumb,
      strDrink,
      strCategory,
      strAlcoholic,
      strInstructions,
      strArea,
      strTags } = fetchedRecipeDetails;

    return (
      <div className="w-full h-full flex flex-col items-center relative">
        { shouldDisplayClipboard && <COMP.ClipboardCopyPopUp />}
        <div className="w-full h-auto flex flex-col items-center pb-20">
          <COMP.DetailsImage thumbnail={ strDrinkThumb } label={ strDrink } />
          <COMP.DetailsHeaderInfo label={ strDrink } category={ strCategory } />
          <COMP.InProgressIngredients
            handleChange={ handleChange }
            ingredientList={ currentIngredients }
          />
          <COMP.DetailsInstructions instructions={ strInstructions } />
        </div>
        <FinishRecipeButton
          isDone={ currentIngredients.every((value) => value.isChecked) }
          id={ id }
          type="drink"
          nationality={ strArea }
          alcoholicOrNot={ strAlcoholic }
          category=""
          name={ strDrink }
          image={ strDrinkThumb }
          doneDate={ currentDate() }
          tags={ strTags ? strTags.split(',') : [] }
        />
      </div>
    );
  }
  return <COMP.Loading />;
}
