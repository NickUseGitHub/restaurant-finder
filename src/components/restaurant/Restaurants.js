import React from 'react';
import Restaurant from './Restaurant';

function Restaurants({ restaurants }) {
  return (
    <div className="restaurants row">
      <div className="col-lg-12">
        <ul>
          {restaurants &&
            restaurants.map(function(restaurant, index) {
              return <Restaurant key={index} restaurant={restaurant} />;
            })}
        </ul>
      </div>
    </div>
  );
}

export default Restaurants;
