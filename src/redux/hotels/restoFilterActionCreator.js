import {
  filteredRestaurants
} from "./restoAction";

function filteredRestaurants(restaurants, filterText) {
  return dispatch => {
    const result = restaurants.filter((restaurant) => {
      const text = (restaurant.name + restaurant.address + restaurant.area).toLowerCase();
      return text.includes(filterText.toLowerCase());
    });
    dispatch(filteredRestaurants(result))
  }
}

export default filteredRestaurants;