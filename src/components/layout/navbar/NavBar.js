import React from 'react';
import './navbar.css';
import Menus from '../menu/Menus';

export default function NavBar() {
  return (
    <nav className="navbar navbar-default">
      <h1>Restaurants</h1>
      <Menus />
    </nav>
  );
}
