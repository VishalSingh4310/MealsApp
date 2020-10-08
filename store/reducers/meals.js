import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVORITE, FILTER_MEAL} from "../actions/meals";
const initiaState = {
  meals: MEALS,
  filteredMeals: MEALS,
  FavoriteMeals: [],
};

const mealsReducer = (state = initiaState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.FavoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateMeal = [...state.FavoriteMeals];
        updateMeal.splice(existingIndex, 1);
        return {...state, FavoriteMeals: updateMeal};
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {...state, FavoriteMeals: state.FavoriteMeals.concat(meal)};
      }

    case FILTER_MEAL:
      const appliedFilters = action.filter;
      const UpdatedfilteredMeals = state.meals.filter((meals) => {
        if (appliedFilters.glutenFree && !meals.isGlutenFree) {
          return false;
        }
        if (appliedFilters.Vegan && !meals.isVegan) {
          return false;
        }
        if (appliedFilters.Veg && !meals.isVegetarian) {
          return false;
        }
        if (appliedFilters.lactosFree && !meals.isLactoseFree) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: UpdatedfilteredMeals};

    default:
      return state;
  }
};

export default mealsReducer;
