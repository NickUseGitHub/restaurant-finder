import React from 'react';
import configCss from '../../../../css/configs';

export default function SkillList({ title, skills }) {
  return (
    <ul className="skill-list">
      {title && <li className="title">{title}</li>}
      {skills &&
        skills.map(function({ skillTitle, isStrongSkill }, key) {
          return (
            <li
              key={key}
              className={`${isStrongSkill === true ? 'strong' : ''}`}
            >
              {skillTitle}
            </li>
          );
        })}
      <style jsx>{`
        .skill-list {
          padding: 10px;
          margin: 0;
          list-style-type: none;
        }

        .skill-list li.title {
          font-size: 15pt;
          color: ${configCss.mainAppColor};
        }

        .skill-list li.strong {
          font-weight: bold;
        }
      `}</style>
    </ul>
  );
}
