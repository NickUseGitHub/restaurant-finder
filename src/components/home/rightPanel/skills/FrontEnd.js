import React from 'react';
import PercentageSkill from './PercentageSkill';
import SkillListWrapper from './SkillListWrapper';
import SkillList from './SkillList';
import Panel from './Panel';
import Title from '../Title';

export default function Frontend() {
  return (
    <Panel>
      <div className="col-lg-12">
        <Title title="Frontend" fontSize="medium" />
      </div>
      <div className="col-lg-12 item-lists">
        <div className="row">
          <div className="col-lg-2">
            <PercentageSkill percentage={80} />
          </div>
          <SkillListWrapper lgGlid="5">
            <SkillList
              title="Programming-languages"
              skills={[
                {
                  skillTitle: 'Javascript',
                  isStrongSkill: true,
                },
                {
                  skillTitle: 'CSS',
                  isStrongSkill: false,
                },
                {
                  skillTitle: 'SASS/LESS',
                  isStrongSkill: false,
                },
                {
                  skillTitle: 'FLEX',
                  isStrongSkill: false,
                },
              ]}
            />
            <SkillList
              title="Framework"
              skills={[
                {
                  skillTitle: 'React',
                  isStrongSkill: true,
                },
                {
                  skillTitle: 'Webpack4',
                },
                {
                  skillTitle: 'Babel',
                },
                {
                  skillTitle: 'NextJS',
                },
              ]}
            />
          </SkillListWrapper>
          <SkillListWrapper lgGlid="5">
            <SkillList
              title="Web Analytics"
              skills={[
                {
                  skillTitle: 'Google Analytics',
                  isStrongSkill: true,
                },
                {
                  skillTitle: 'Google Tag Manager',
                },
              ]}
            />
          </SkillListWrapper>
        </div>
      </div>
    </Panel>
  );
}
