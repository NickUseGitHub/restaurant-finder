import React from 'react';
import './restaurants.css';
import Restaurant from './Restaurant';

function Restaurants({ restaurants }) {
  return (
    <div className="restaurants col-lg-12">
      <ul>
        {restaurants &&
          restaurants.map(function(restaurant, index) {
            return <Restaurant key={index} restaurant={restaurant} />;
          })}
      </ul>
    </div>
  );
}

export default Restaurants;
