import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalProvider from '../context/global-provider';
import * as PP from '../pages';

export default function Routes() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={ PP.Login } />
        <Route exact path="/foods" component={ PP.Foods } />
        <Route exact path="/drinks" component={ PP.Drinks } />
        <Route exact path="/foods/:id" component={ PP.FoodsDetails } />
        <Route exact path="/drinks/:id" component={ PP.DrinksDetails } />
        <Route
          exact
          path="/foods/:id/in-progress"
          component={ PP.FoodsInProgress }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ PP.DrinksInProgress }
        />
        <Route exact path="/explore" component={ PP.Explore } />
        <Route exact path="/explore/foods" component={ PP.ExploreFoods } />
        <Route exact path="/explore/drinks" component={ PP.ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ PP.FoodsByIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ PP.DrinksByIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ PP.FoodsByNationalities }
        />
        <Route path="/profile" component={ PP.Profile } />
        <Route path="/done-recipes" component={ PP.DoneRecipes } />
        <Route path="/favorite-recipes" component={ PP.FavoriteRecipes } />
        <Route path="*" component={ PP.NotFound } />
      </Switch>
    </GlobalProvider>
  );
}
