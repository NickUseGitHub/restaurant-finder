import React from 'react';
import findString from '../../graph/stringMatcher/resolvers/findString';

export default function StringMatcher() {
  console.log('typeof findString', findString);

  return <div>StringMatcher</div>;
}
