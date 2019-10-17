import React from 'react';

export default function SkillList({ title, skills }) {
  return (
    <ul className="skill-list">
      <li className="title">{title}</li>
      {skills &&
        skills.map(function({ skillTitle, isStrongSkill }) {
          return (
            <li className={`${isStrongSkill === true ? 'strong' : ''}`}>
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
          color: red;
        }

        .skill-list li.strong {
          font-weight: bold;
        }
      `}</style>
    </ul>
  );
}
