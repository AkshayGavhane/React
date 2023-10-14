import React, { useEffect, useState } from 'react';
import SocialCard from '../SocialCard/SocialCard';
import './UserCard.css';

function UserCard() {
  const [usersCard, setUsersCard] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8888/data')
      .then((res) => {
        //setUsersCard(res.data.rows);
        return res.json();
      })
      .then((resp) => {
        console.log(resp);

        setUsersCard(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-wrap w-auto ml-80 h-auto">
      {usersCard &&
        usersCard.map((user, id) => <SocialCard userData={user} key={id} />)}
    </div>
  );
}

export default UserCard;
