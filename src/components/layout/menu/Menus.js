import React from 'react';
import Menu from './Menu';

export default function Menus() {
  return (
    <ul className="menu-list">
      <Menu title="Home" route="home" />
      <Menu title="Restaurants" route="restaurants" />
    </ul>
  );
}
