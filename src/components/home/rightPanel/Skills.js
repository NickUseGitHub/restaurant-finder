import React from 'react';

export default function Skills() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h3>Skills</h3>
      </div>
      <div className="col-lg-12 item-lists">
        <div className="row">
          <div className="col-lg-2">
            <div className="percentage-skill">
              <div className="filled-percentage"></div>
              <div className="title">70%</div>
            </div>
          </div>
          <div className="col-lg-5">
            <ul>
              <li className="title">Programming-languages</li>
              <li className="strong">NodeJS</li>
              <li>Shell Script</li>
            </ul>
            <ul>
              <li className="title">Framework</li>
              <li className="strong">GraphQL</li>
              <li className="strong">GraphQL-Yoga</li>
              <li className="strong">Express</li>
              <li className="strong">Nginx</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <ul>
              <li className="title">Database</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
            <ul>
              <li className="title">Container Tech</li>
              <li className="strong">Kubernetes</li>
              <li className="strong">Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
