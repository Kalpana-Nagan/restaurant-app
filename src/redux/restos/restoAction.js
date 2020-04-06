export const FETCH_RESTAURANTS_PENDING = "FETCH_RESTAURANTS_PENDING";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FILTERED_RESTAURANTS = "FILTERED_RESTAURANTS";
export const FETCH_RESTAURANTS_ERROR = "FETCH_RESTAURANTS_ERROR";

export const fetchRestaurantsPending = () => {
  return {
    type: FETCH_RESTAURANTS_PENDING
  };
};
export const fetchRestaurantsSuccess = restaurants => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  restaurants: restaurants.restaurants
});

export const filteredRestaurants = filteredRestaurants => ({
  type: FILTERED_RESTAURANTS,
  filteredRestaurants: filteredRestaurants
});

export const fetcRestaurantsError = error => {
  return {
    type: FETCH_RESTAURANTS_ERROR,
    error: error
  };
};
