import React from "react";
import "./SocialCard.css";
function SocialCard({ userData }) {
  return (
    <div className="card">
      <div className="card_title">
        {userData.name.first}&nbsp;
        {userData.name.last}
      </div>
      <div className="card_body">
        <div className="card_image">
          <img src={userData.picture.thumbnail} alt="" />
        </div>
          <p className="email">{userData.email}</p>
      </div>
    </div>
  );
}

export default SocialCard;
