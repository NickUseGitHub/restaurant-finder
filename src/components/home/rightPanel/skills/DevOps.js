import React from 'react';
import PercentageSkill from './PercentageSkill';
import SkillListWrapper from './SkillListWrapper';
import SkillList from './SkillList';

export default function Backend() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h3>DevOps</h3>
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
    </div>
  );
}
