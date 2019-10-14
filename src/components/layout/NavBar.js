import React from 'react';
import Menu from './Menu';

export default function NavBar() {
  return (
    <nav className="navbar navbar-default">
      <ul>
        <Menu title="Home" route="home" />
        <Menu title="Restaurants" route="restaurants" />
      </ul>
    </nav>
  );
}
