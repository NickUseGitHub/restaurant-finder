import React from 'react';
import PercentageSkill from './PercentageSkill';
import SkillListWrapper from './SkillListWrapper';
import SkillList from './SkillList';

export default function Skills() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h3>Skills</h3>
      </div>
      <div className="col-lg-12 item-lists">
        <div className="row">
          <div className="col-lg-2">
            <PercentageSkill percentage={70} />
          </div>
          <SkillListWrapper lgGlid="5">
            <SkillList
              title="Programming-languages"
              skills={[
                {
                  skillTitle: 'NodeJS',
                  isStrongSkill: true,
                },
                {
                  skillTitle: 'Shell Script',
                  isStrongSkill: false,
                },
              ]}
            />
            <SkillList
              title="Framework"
              skills={[
                {
                  skillTitle: 'GraphQL',
                  isStrongSkill: true,
                },
                {
                  skillTitle: 'GraphQL-Yoga',
                },
                {
                  skillTitle: 'Express',
                  isStrongSkill: true,
                },
                {
                  skillTitle: 'Nginx',
                },
              ]}
            />
          </SkillListWrapper>
          <SkillListWrapper lgGlid="5">
            <SkillList
              title="Database"
              skills={[
                {
                  skillTitle: 'MongoDB',
                },
                {
                  skillTitle: 'MySQL',
                },
                {
                  skillTitle: 'Redis',
                },
              ]}
            />
            <SkillList
              title="Container Tech"
              skills={[
                {
                  skillTitle: 'Kubernetes',
                },
                {
                  skillTitle: 'Docker',
                  isStrongSkill: true,
                },
              ]}
            />
          </SkillListWrapper>
        </div>
      </div>
    </div>
  );
}
