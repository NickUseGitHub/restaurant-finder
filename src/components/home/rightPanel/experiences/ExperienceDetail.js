import React from 'react';

export default function ExperienceDetail({ companyDetails }) {
  if (!companyDetails) return;

  return (
    <div className="experience-detail">
      <ul>
        {companyDetails &&
          companyDetails.map(function(companyDetail) {
            const { title, details } = companyDetail;

            return (
              <li>
                <span className="title">{title}</span>
                <ul>
                  {details &&
                    details.map(function(detail) {
                      return <li>{detail}</li>;
                    })}
                </ul>
              </li>
            );
          })}
      </ul>

      <style jsx>{`
        .experience-detail {
          word-break: break-word;
        }

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
