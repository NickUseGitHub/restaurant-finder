import React from 'react';
import Backend from './skills/Backend';
import FrontEnd from './skills/FrontEnd';
import DevOps from './skills/DevOps';
import Testing from './skills/Testing';
import SoftwareDevelopment from './SoftwareDevelopment';

export default function RightPanel() {
  return (
    <div className="righ-panel col-lg-8">
      <Backend />
      <FrontEnd />
      <DevOps />
      <Testing />
      <SoftwareDevelopment />

      <style jsx>{`
        .righ-panel {
          position: relative;
        }
      `}</style>
    </div>
  );
}
