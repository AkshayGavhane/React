import React from 'react';
import './Sidebar.css';
import logo from '../../logo-color.png';
const Sidebar = () => {
  return (
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <img id="img" src={logo} alt="" />
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="/admin">
            <i className="fas fa-user font-weight-bold"></i>{' '}
            <span className="ml-3">Dashboard</span>
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link text-secondary" href="/ownerdetails">
            <i className="far fa-chart-bar font-weight-bold"></i>{' '}
            <span className="ml-3">Users</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
