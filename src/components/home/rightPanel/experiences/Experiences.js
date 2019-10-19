import React from 'react';
import Title from './Title';
import CompanyExp from './CompanyExp';

export default function Experiences() {
  return (
    <CompanyExp
      companyTitle="Tencent (Thailand) Company Limited (Aug 2016 - Now)"
      companyTitleColor="#552cd3"
      companyLogo="tencentLogo.png"
      companyDetails={[
        {
          title: 'Sanook Website',
          details: [
            'Collaborate with team to create new sanook website with react (Universal Web Application)',
            'Provide GraphQL to deliver data to frontend',
          ],
        },
        {
          title: 'Participate Hackathon with Chatbot called Sanook Agent',
          details: ['start simple app within 2 days'],
        },
        {
          title: 'Joox',
          details: ['Operate backend to start Joox website'],
        },
        {
          title:
            'Driven Election Campaign on https://www.sanook.com/news/election',
          details: [
            'To support realtime feed on website',
            'Build website in short time',
          ],
        },
      ]}
    />
  );
}
