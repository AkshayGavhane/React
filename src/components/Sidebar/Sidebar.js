import React from 'react';
import './Sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar">
      <p className='menu'>MAIN MENU</p>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
      </ul>
    </div>
  );
}

export default Sidebar;
