import React from 'react';
import NavBar from './NavBar';

export default function MainLayout(props) {
  return (
    <div className="layout-container">
      <NavBar />
      {props.children}
    </div>
  );
}
