import React from 'react';
import PercentageSkill from './PercentageSkill';
import SkillListWrapper from './SkillListWrapper';
import SkillList from './SkillList';
import Panel from './Panel';

export default function Testing() {
  return (
    <Panel>
      <div className="col-lg-12">
        <h3>Testing</h3>
      </div>
      <div className="col-lg-12 item-lists">
        <div className="row">
          <div className="col-lg-2">
            <PercentageSkill percentage={60} />
          </div>
          <SkillListWrapper lgGlid="5">
            <SkillList
              skills={[
                {
                  skillTitle: 'End to End testing with Puppeteer',
                },
                {
                  skillTitle: 'Unit test with Jest',
                },
                {
                  skillTitle: 'Integration test with Jest',
                },
              ]}
            />
          </SkillListWrapper>
        </div>
      </div>
    </Panel>
  );
}
