import {
  fetchRestaurantsPending,
  fetchRestaurantsSuccess
} from "./restoAction";

function fetchRestaurants(val) {
  return dispatch => {
    dispatch(fetchRestaurantsPending());
    val &&
      fetch("https://opentable.herokuapp.com/api/restaurants?city=" + val)
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            throw response.error;
          }
          console.log(response);
          dispatch(fetchRestaurantsSuccess(response));

          return response;
        })
        .catch(error => {
          dispatch(fetchRestaurantsSuccess(error));
        });
  };
}
export default fetchRestaurants;
