import React from "react";
import { connect } from "react-redux";
import {
  getRetaurants,
  getRetaurantsPending,
  getRetaurantsError,
  getFilteredRetaurants
} from "../redux/restos/restoReducer";
import filteredRestoActionCreator from "../redux/restos/restoFilterActionCreator";
import RestoDetailsCard from "../components/RestoDetailsCard";
import fetchRestaurants from '../redux/restos/restoActionCreator';

function RestoContainer(props) {
  const { restaurants, filteredRestaurants } = props;
  let city = {};
  let address = {};
  return (
    <div className="container">
      <p><center><h2>Order from your favourite restaurant</h2></center></p>
      <form onSubmit={(e) => { e.preventDefault(); props.fetchRestaurants(city.value) }}>
        <div className="form-group row">
          <label htmlFor="city" className="col-sm-1 col-sm-offset-3 col-form-label">City</label>
          <div className="col-sm-4">
            <input role="searchbox" type="text" placeholder="City" className="form-control"
              ref={val => (city = val)} name="city" id="city"></input>
          </div>
          <div className="col-sm-4">
            <button type="submit" className="btn btn-primary" >
              Search
      </button>

          </div>
        </div>
      </form>
      {restaurants.length > 1 && <div >
        <div className="row form-group">
          <label htmlFor="filter" className="col-sm-1 col-sm-offset-3 col-form-label">FilterBy</label>
          <div className="col-sm-5">
            <input
              role="searchbox" id="filter"
              type="text" name="filter"
              className="form-control"
              placeholder="Name,address,area"
              ref={val => (address = val)}
              onChange={() => props.filteredRestoActionCreator(restaurants, address.value)}
            ></input>
          </div>

        </div>
        <RestoDetailsCard restaurants={filteredRestaurants || restaurants} />
      </div>
      }

    </div>
  );
}

const mapStateToProps = state => ({
  error: getRetaurantsError(state),
  restaurants: getRetaurants(state),
  pending: getRetaurantsPending(state),
  filteredRestaurants: getFilteredRetaurants(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: city => dispatch(fetchRestaurants(city)),
    filteredRestoActionCreator: (restaurants, searchText) => dispatch(filteredRestoActionCreator(restaurants, searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestoContainer);
