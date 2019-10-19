import React from 'react';

import LeftPanel from './LeftPanel';
import RightPanel from './rightPanel/RightPanel';

export default function Home() {
  return (
    <div className="home col-lg-12">
      <div className="row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}
