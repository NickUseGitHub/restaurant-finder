import React from 'react';
import Title from './Title';

export default function Panel(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Title title={props.title} fontSize="big" hasBorderBottom />
        {props.children}
      </div>
    </div>
  );
}
