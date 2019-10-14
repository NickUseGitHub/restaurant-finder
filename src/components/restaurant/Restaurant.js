import React from 'react';
import get from 'lodash/get';
import './restaurant.css';

function RateRestaurant({ rating }) {
  if (!rating || rating.length === 0) return '☆☆☆☆☆';

  const emptyRate = [...new Array(5 - rating.length)].map(() => '☆');
  const filedRate = rating.map(() => '★');
  return [...filedRate, ...emptyRate];
}

export default function Restaurant(props) {
  const { restaurant } = props;
  const name = get(restaurant, 'name');
  const isOpenNow = get(restaurant, 'isOpenNow');
  const rating = [...new Array(parseInt(get(restaurant, 'rating')) || 0)].map(
    (_, i) => i,
  );
  const notOpenCss = isOpenNow !== true ? 'not-open' : '';

  return (
    <li className={`restaurant ${notOpenCss}`}>
      <span className="title">{name}</span>
      <span className="rating">
        <RateRestaurant rating={rating} />
      </span>
      <span className="is-open">
        {isOpenNow === true ? '😋 open' : '😱 closed'}
      </span>
    </li>
  );
}
