import {
  FETCH_RESTAURANTS_PENDING,
  FETCH_RESTAURANTS_SUCCESS,
  FILTERED_RESTAURANTS,
  FETCH_RESTAURANTS_ERROR
} from "./restoAction";

const initialState = {
  pending: false,
  restaurants: [],
  error: null
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FILTERED_RESTAURANTS:
      console.log(action);
      return {
        ...state,
        filteredRestaurants: action.filteredRestaurants
      };
    case FETCH_RESTAURANTS_SUCCESS:
      console.log(action.restaurants);
      return {
        ...state,
        pending: false,
        restaurants: action.restaurants,
        filteredRestaurants: action.restaurants
      };
    case FETCH_RESTAURANTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const getRetaurants = state => state.restaurants;
export const getRetaurantsPending = state => state.pending;
export const getRetaurantsError = state => state.error;
export const getFilteredRetaurants = state => state.filteredRestaurants;