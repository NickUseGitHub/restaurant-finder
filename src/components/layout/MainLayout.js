import React from 'react';
import NavBar from './navbar/NavBar';

export default function MainLayout(props) {
  return (
    <div className="layout-container">
      <NavBar />
      {props.children}
    </div>
  );
}
