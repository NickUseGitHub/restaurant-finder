import React from 'react';

export default function ExperienceDetail({ companyDetails }) {
  if (!companyDetails) return;

  return (
    <div className="experience-detail">
      <ul>
        {companyDetails &&
          companyDetails.map(function(companyDetail, keyOuter) {
            const { title, details } = companyDetail;

            return (
              <li key={keyOuter}>
                <span className="title">{title}</span>
                <ul>
                  {details &&
                    details.map(function(detail, key) {
                      return <li key={key}>{detail}</li>;
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
          font-weight: bold;
          font-size: 13pt;
        }
      `}</style>
    </div>
  );
}
