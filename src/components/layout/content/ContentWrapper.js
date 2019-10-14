import React from 'react';
import './contentContainer.css';

export default function ContentWrapper(props) {
  return <div className="content-container row">{props.children}</div>;
}
