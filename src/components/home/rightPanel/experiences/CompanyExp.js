import React from 'react';

import getStaticUrl from '../../../../utils/getStaticUrl';
import ExperienceDetail from './ExperienceDetail';
import Title from './Title';

export default function CompanyExp(props) {
  const {
    companyTitle,
    companyLogo,
    companyTitleColor,
    companyDetails,
  } = props;

  return (
    <div className="company">
      <Title color={companyTitleColor}>{companyTitle}</Title>
      <div className="company-body">
        {companyLogo && (
          <img className="logo" src={getStaticUrl(companyLogo)} />
        )}
        <ExperienceDetail companyDetails={companyDetails} />
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
