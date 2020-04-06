import React from "react";

function RestaurantCard(props) {
  const { restaurants } = props;
  return restaurants ? restaurants.map((restaurantDetails, index) => {

    const PriceStars = (price) => {
      let span = [];
      for (let i = 0; i < price; i++) {
        span.push(<icon className="glyphicon glyphicon-star" />)
      }
      return span;
    }

    return (
      <div className="row restaurants" tabIndex={index + 4} key={restaurantDetails.id}>
        <div className="col-sm-3">
          <img src={restaurantDetails.image_url} className="col-sm-12" alt={restaurantDetails.name}></img>
        </div>
        <div className="col-sm-9">
          <div className="card-header">
            {restaurantDetails.name}
          </div>
          <p>{restaurantDetails.address}, {restaurantDetails.area}, {restaurantDetails.postal_code}</p>
          <a href={"tel:" + restaurantDetails.phone}> <small className="glyphicon glyphicon-phone-alt">{restaurantDetails.phone}</small></a>
          <div className="stars">{PriceStars(restaurantDetails.price)}</div>
        </div>
      </div>
    )
  }) : '';
}

export default RestaurantCard;
