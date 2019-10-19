import React from 'react';

export default function Educations() {
  return (
    <div className="row education">
      <div className="col-sm-3 year">2008 - 2011</div>
      <div className="col-sm-9 institute">
        King Mongkut's Institute Of Technology Ladkrabang - Computer Engineer
        Bachelor Degree
      </div>
      <div className="col-sm-3 year">2002 - 2007</div>
      <div className="col-sm-9 institute">
        Watsuthi wararam school — High school (Math-Sci)
      </div>

      <style jsx>{`
        .year {
          font-size: 12pt;
          font-weight: bold;
        }

        @media screen and (max-width: 1024px) {
          .institute {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
