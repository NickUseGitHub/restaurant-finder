import React from 'react';

export default function Title({ children }) {
  if (!children) return;

  return (
    <h3>
      {children}
      <style jsx>{`
        h3 {
          font-weight: bold;
          font-size: 1.2em;
          color: #552cd3;
        }
      `}</style>
    </h3>
  );
}
