import React, { useEffect, useState } from 'react';
import SocialCard from '../SocialCard/SocialCard';
import './UserCard.css';
import axios from 'axios';
function UserCard() {
  const [usersCard, setUsersCard] = useState([]);
  useEffect(() => {
    axios.get('../data.json').then((res) => {
      setUsersCard(res.data.data.rows);
    });
  }, []);

  return (
    <div className="flex flex-wrap w-auto ml-80 h-auto">
      {usersCard.map((user, index) => (
        <SocialCard userData={user} key={index} />
      ))}
    </div>
  );
}

export default UserCard;
