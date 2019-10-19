import React, { useEffect, useState } from 'react';
import findString from '../../graph/stringMatcher/resolvers/findString';

export default function StringMatcher() {
  const [outputStringMatchers, setOutputStringMatchers] = useState(null);
  const [textInput, setTextInput] = useState([]);
  const [inputStrs, setInputStrs] = useState([]);

  function onInputChange(event) {
    event.preventDefault();

    setTextInput(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!textInput) return;
    setInputStrs([...inputStrs, textInput]);
    setTextInput('');
  }

  useEffect(
    function() {
      setOutputStringMatchers(
        findString(undefined, { stringInput: inputStrs }),
      );
    },
    [inputStrs],
  );

  return (
    <div className="col-lg-12 string-matcher-page">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="insert input here then press enter"
          value={textInput}
          onChange={onInputChange}
        />
      </form>
      <ul className="result">
        {outputStringMatchers &&
          outputStringMatchers.map(function(outputStringMatcher) {
            const { input: stringInput, isMatch } = outputStringMatcher;
            const cssMatch = isMatch === true ? 'is-match' : '';
            const icon = isMatch === true ? '✅' : '❎';
            return (
              <li className={cssMatch}>
                {icon} - {stringInput}
              </li>
            );
          })}
      </ul>

      <style jsx>{`
        .string-matcher-page {
          width: 100%;
        }

        input {
          width: 100%;
        }

        ul {
          padding: 0;
          margin: 0;
          margin: 10px 0px;
          list-style-type: none;
        }

        li {
          margin: 15px 0px;
          padding: 10px;
          border: 1px solid black;
          border-radius: 12px;
          background-color: #f386869e;
        }

        li.is-match {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
