
import { filteredRestaurants } from '../restos/restoAction';


function filteredRestoActionCreator(hotels, filterText) {
  return dispatch => {
    const result = hotels.filter((hotel) => {
      const text = (hotel.name + hotel.address + hotel.area).toLowerCase();
      return text.includes(filterText.toLowerCase());
    });
    dispatch(filteredRestaurants(result))
  }
}

export default filteredRestoActionCreator;