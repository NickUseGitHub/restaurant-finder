import React from 'react';

export default function Title({ fontSize, hasBorderBottom, title }) {
  if (!title) return;

  const fontCssSize = {
    big: '2em',
    medium: '1.4em',
    small: '1em',
  }[fontSize || 'medium'];

  const cssBorderLineBottom =
    hasBorderBottom === true ? 'border-bottom: 3px solid black;' : '';

  return (
    <h2>
      {title}
      <style jsx>{`
        h2 {
          font-size: ${fontCssSize};
          ${cssBorderLineBottom}
        }
      `}</style>
    </h2>
  );
}
