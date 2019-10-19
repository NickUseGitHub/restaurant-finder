import React from 'react';

export default function Title({ children, color }) {
  if (!children) return;

  return (
    <h3>
      {children}
      <style jsx>{`
        h3 {
          font-weight: bold;
          font-size: 1.2em;
          color: ${color};
        }
      `}</style>
    </h3>
  );
}
