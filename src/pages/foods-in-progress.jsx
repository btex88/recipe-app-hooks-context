import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import createIngredientList from '../assets/helpers/create-ingredient-list';
import meals from '../assets/services/meals';
import local from '../assets/helpers/local';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';
import arrangeIngredients from '../assets/helpers/arrange-ingredients';
import FinishRecipeButton from '../components/finish-recipe-button';
import currentDate from '../assets/helpers/current-date';

export default function FoodsInProgress() {
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
    if (!getLocal().meals[id]) {
      const ingredientsArranged = arrangeIngredients(arg);
      const newLocal = {
        cocktails: { ...getLocal().cocktails },
        meals: { ...getLocal().meals, [id]: arrangeIngredients(arg) },
      };
      setLocal(newLocal);
      setCurrentIngredients(ingredientsArranged);
    } else {
      setCurrentIngredients(getLocal().meals[id]);
    }
  }

  const handleChange = useCallback((arg) => {
    const newLocal = {
      cocktails: { ...getLocal().cocktails },
      meals: { ...getLocal().meals,
        [id]: getLocal().meals[id]
          .map((value) => {
            if (value.ingredient === arg) value.isChecked = !value.isChecked;
            return value;
          }) },
    };
    setCurrentIngredients(newLocal.meals[id]);
    setLocal(newLocal);
    setShouldRender(!shouldRender);
  }, []);

  useEffect(() => { // componentDidMount
    function handleRecipeDetails() {
      meals.details(id).then((data) => {
        const ingredients = createIngredientList(data.meals[0]);
        setFetchedRecipeDetails({ ...data.meals[0], ingredients });
        handleInProgressLocal(ingredients);
      });
    }
    handleRecipeDetails();

    return () => setFetchedRecipeDetails(null);
  }, []);

  if (fetchedRecipeDetails && _.isEmpty(fetchedRecipeDetails) !== true) {
    const {
      strMealThumb,
      strMeal,
      strCategory,
      strInstructions,
      strArea,
      strTags } = fetchedRecipeDetails;

    return (
      <div className="w-full h-full flex flex-col items-center relative">
        { shouldDisplayClipboard && <COMP.ClipboardCopyPopUp />}
        <div className="w-full h-auto flex flex-col items-center pb-20">
          <COMP.DetailsImage thumbnail={ strMealThumb } label={ strMeal } />
          <COMP.DetailsHeaderInfo label={ strMeal } category={ strCategory } />
          <COMP.InProgressIngredients
            handleChange={ handleChange }
            ingredientList={ currentIngredients }
          />
          <COMP.DetailsInstructions instructions={ strInstructions } />
        </div>
        <FinishRecipeButton
          isDone={ currentIngredients.every((value) => value.isChecked) }
          id={ id }
          type="food"
          nationality={ strArea }
          category={ strCategory }
          alcoholicOrNot=""
          name={ strMeal }
          image={ strMealThumb }
          doneDate={ currentDate() }
          tags={ strTags ? strTags.split(',') : [] }
        />
      </div>
    );
  }
  return <COMP.Loading />;
}
