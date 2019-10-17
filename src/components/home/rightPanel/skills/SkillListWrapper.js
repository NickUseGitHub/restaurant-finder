import React from 'react';

export default function SkillListWrapper({ lgGlid, children }) {
  return (
    <div className={`skill-wrapper col-lg-${lgGlid}`}>
      {children}
      <style jsx>{`
        .skill-wrapper {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
}
