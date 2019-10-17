import React from 'react';
import Backend from './skills/Backend';
import FrontEnd from './skills/FrontEnd';

export default function RightPanel() {
  return (
    <div className="righ-panel col-lg-8">
      <Backend />
      <FrontEnd />
    </div>
  );
}
