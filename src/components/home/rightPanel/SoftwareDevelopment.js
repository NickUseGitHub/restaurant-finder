import React from 'react';
import SkillList from './skills/SkillList';
import Title from './Title';

export default function SoftwareDevelopment() {
  return (
    <div className="software-development">
      <SkillList
        title="Software Development"
        skills={[
          {
            skillTitle: 'Agile',
          },
        ]}
      />
      <SkillList
        title="IDE"
        skills={[
          {
            skillTitle: 'Visual Studio Code',
          },
        ]}
      />
      <SkillList
        title="Expected Skill"
        skills={[
          {
            skillTitle: 'Data Science & AI Machine Learning',
          },
          {
            skillTitle: 'Golang',
          },
        ]}
      />
      <style jsx>{`
        .software-development {
          background-color: #d88a8a6b;
          border-radius: 15px;
          margin-bottom: 15px;
        }

        @media screen and (max-width: 767px) {
          .software-development {
            position: relative;

            width: 100%;
          }
        }

        @media screen and (min-width: 1025px) {
          .software-development {
            position: absolute;
            bottom: 5%;
            right: 0;

            width: 300px;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
