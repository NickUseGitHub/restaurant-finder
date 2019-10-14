import React from 'react';

export default function Restaurant(props) {
  const { restaurant } = props;
  return <li>{restaurant.name}</li>;
}
