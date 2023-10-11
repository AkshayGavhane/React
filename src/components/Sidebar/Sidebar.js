import React from 'react';
import { SidebarData } from '../SidebarData/SidebarData';
import './Sidebar.css';
import logo from '../../logo-color.png';
import { Drawer, MenuItem } from '@mui/material';
export const DRAWER_WIDTH = '300px';
function Sidebar() {
  return (
    // <div className="sidebar">
    //   <ul className="SidebarList">
    //     <div>
    //       <img src={logo} alt="" className="img" />
    //     </div>
    //     {SidebarData.map((val, key) => {
    //       return (
    //         <li
    //           key={key}
    //           className="row"
    //           id={window.location.pathname === val.link ? "acitve" : " "}
    //           onClick={() => {
    //             window.location.pathname = val.link
    //           }}>
    //           <div className="flex-container">
    //             <div id="icon">{val.icon}</div>
    //             <div id="title">{val.title}</div>
    //           </div>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div>
        <div>
          <img src={logo} alt="" className="-mt-24" />
        </div>
        <div>
          {SidebarData.map((val, key) => {
            return (
              <MenuItem
                key={key}
                id={window.location.pathname === val.link ? 'acitve' : ' '}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="flex -mt-2 ml-10 my-2 space-x-4">
                  <div >{val.icon}</div>
                  <div className='text-lg'>{val.title}</div>
                </div>
              </MenuItem>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
}

export default Sidebar;
