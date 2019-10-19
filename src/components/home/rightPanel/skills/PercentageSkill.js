import React from 'react';

export default function PercentageSkill({ percentage }) {
  return (
    <div className="percentage-skill">
      <div className="filled-percentage"></div>
      <div className="title">{percentage}%</div>
      <style jsx>{`
        .percentage-skill {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 5px solid black;

          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .percentage-skill .filled-percentage {
          width: 100%;
          height: 100%;

          background: red;
          position: absolute;
          top: ${100 - percentage}%;
          z-index: 0;
        }

        .percentage-skill .title {
          font-size: 22pt;
          z-index: 1;
        }

        @media screen and (max-width: 991px) {
          .percentage-skill {
            width: 150px;
            height: 150px;

            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
