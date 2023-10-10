import React, { useEffect, useState } from "react";
import SocialCard from "../SocialCard/SocialCard";
import './UserCard.css';
function UserCard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api?results=12")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return(
    <div className="">
        {users.map((user,index) => (
            <SocialCard userData={user} key={index}/>
        ))}
    </div>
  )
}

export default UserCard;
