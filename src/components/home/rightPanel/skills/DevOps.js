import React from 'react';
import PercentageSkill from './PercentageSkill';
import SkillListWrapper from './SkillListWrapper';
import SkillList from './SkillList';
import Panel from './Panel';
import Title from '../Title';

export default function Backend() {
  return (
    <Panel>
      <div className="col-lg-12">
        <Title title="DevOps" fontSize="medium" />
      </div>
      <div className="col-lg-12 item-lists">
        <div className="row">
          <div className="col-lg-2">
            <PercentageSkill percentage={55} />
          </div>
          <SkillListWrapper lgGlid="5">
            <SkillList
              title="Tools"
              skills={[
                {
                  skillTitle: 'Gitlab CI/CD',
                },
                {
                  skillTitle: 'Jenkins',
                },
              ]}
            />
          </SkillListWrapper>
        </div>
      </div>
    </Panel>
  );
}
