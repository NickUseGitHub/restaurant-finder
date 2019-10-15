import React from 'react';
import getStaticUrl from '../../utils/getStaticUrl';

export default function Home() {
  return (
    <div className="restaurants col-lg-12">
      <div className="row">
        <div className="col-lg-4">
          <img src={getStaticUrl('mypic.jpg')} />
        </div>
      </div>
    </div>
  );
}
