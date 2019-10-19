import React from 'react';
import Title from './Title';
import ExperienceDetail from './ExperienceDetail';
import getStaticUrl from '../../../../utils/getStaticUrl';

export default function Experiences() {
  return (
    <div className="company">
      <Title>Tencent (Thailand) Company Limited (Aug 2016 - Now)</Title>
      <div className="company-body">
        <img className="logo" src={getStaticUrl('tencentLogo.png')} />
        <ExperienceDetail />
      </div>
      <style jsx>
        {`
          .company {
            margin-top: 15px;
          }

          .company-body {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            position: relative;
          }

          .logo {
            width: 146px;
            height: 43px;
          }

          @media screen and (max-width: 1024px) {
            .logo {
              width: auto;
              height: 22px;

              position: -webkit-sticky;
              position: sticky;
              top: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
