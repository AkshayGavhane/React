import React from "react";
import { SidebarData } from "../SidebarData/SidebarData";
import "./Sidebar.css";
import logo from "../../logo-color.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="SidebarList">
        <div>
          <img src={logo} alt="" className="img" />
        </div>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "acitve" : " "}
              onClick={() => {
                window.location.pathname = val.link
              }}>
              <div className="flex-container">
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
