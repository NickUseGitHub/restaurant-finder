import React from 'react';
import './leftPanel.css';
import getStaticUrl from '../../utils/getStaticUrl';

export default function LeftPanel() {
  return (
    <div className="left-panel col-lg-4">
      <img className="me-pic" src={getStaticUrl('mypic.jpg')} />

      <div className="short-description">
        six years experiences in tech companies has brought Nick to become
        expert in Technology skills. He still investigates on his career
        technology. Because digital is growing up as real world is spinning so
        fast. His duty is to keep digital world goes with this world.
      </div>

      <div className="profile">
        <h2>My Profile</h2>
        <ul>
          <li>👉 Age : 29 years old</li>
          <li>👉 Date of birth : 2 april 1990 + Sex : Male</li>
          <li>👉 Nationality : Thai</li>
          <li>👉 Religion : Buddha</li>
          <li>👉 Military training : yes</li>
          <li>👉 Driver licence : yes</li>
        </ul>
      </div>

      <div className="quality">
        <h2>Quality</h2>
        <ul>
          <li>👉 Hard Working</li>
          <li>👉 Reliable</li>
          <li>👉 Compromised communication</li>
          <li>👉 Good command in english</li>
        </ul>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <ul>
          <li>☎ +66851362253</li>
          <li>📧 nickt.tnick@gmail.com</li>
          <li>👉 www.facebook.com/NickJyButt</li>
        </ul>
      </div>
    </div>
  );
}
