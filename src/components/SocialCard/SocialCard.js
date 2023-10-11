import React from 'react';
import './SocialCard.css';
function SocialCard({ userData }) {
  return (
    <div className="card">
      <div className="text-base font-sans font-light text-center">
        {userData.firstName}&nbsp;
        {userData.lastName}
      </div>
      <div className="card_body">
        <div className="w-40 -mt-5">
          <img
            src={userData.picture}
            alt=""
            className="rounded-full w-auto h-30"
          />
        </div>
        <p className="email">{userData.email}</p>
      </div>
    </div>
  );
}

export default SocialCard;
