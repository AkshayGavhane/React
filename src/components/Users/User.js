import React from 'react';
import './User.css';
import AddIcon from '@mui/icons-material/Add';

function User() {
  return (
    <div className="user">
      <p>
        <span className="user-text">User</span>
        <button className="adduser">Add User</button>
      </p>
    </div>
  );
}

export default User;
