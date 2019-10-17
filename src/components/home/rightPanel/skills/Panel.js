import React from 'react';

export default function Panel(props) {
  return (
    <div className={`panel row`}>
      {props.children}
      <style jsx>{`
        .panel {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}
