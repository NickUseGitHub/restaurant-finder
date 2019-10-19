import React from 'react';

export default function ExperienceDetail() {
  return (
    <div className="experience-detail">
      <ul>
        <li>
          <span className="title">Sanook Website</span>
          <ul>
            <li>
              Collaborate with team to create new sanook website with react
              (Universal Web Application)
            </li>
            <li>Provide GraphQL to deliver data to frontend</li>
          </ul>
        </li>
        <li>
          <span className="title">
            Participate Hackathon with Chatbot called Sanook Agent
          </span>
          <ul>
            <li>start simple app within 2 days</li>
          </ul>
        </li>
        <li>
          <span className="title">Joox</span>
        </li>
        <li>
          <span className="title">Driven Election Campaign</span>
        </li>
      </ul>

      <style jsx>{`
        .experience-detail ul {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }

        .experience-detail ul ul {
          padding-left: 25px;
          list-style-type: disc;
        }

        li {
          padding-left: 10px;
          font-size: 11pt;
        }

        span.title {
          color: #3bc34c;
          font-weight: bold;
          font-size: 13pt;
        }
      `}</style>
    </div>
  );
}
