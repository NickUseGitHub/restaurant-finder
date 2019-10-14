import React from 'react';
import './restaurant.css';

export default function Restaurant(props) {
  const { restaurant } = props;
  return (
    <li className="restaurant">
      <span className="title">{restaurant.name}</span>
    </li>
  );
}
