import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import userImage from '../../profile.png';
import './NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

function NavBar() {
  return (
    // <Navbar >
    //   <Container>
    //     <Navbar.Toggle  />
    //     <Navbar.Collapse >
    //       <Nav>
    //         <Nav.Item className="menu-icon">
    //           <MenuIcon fontSize="large" />
    //         </Nav.Item>
    //       </Nav>
    //       <Nav className="flex-grow-1">
    //         <Nav.Item className="ms-auto">
    //           <img src={userImage} className="user-photo" alt="" />
    //           <span className="name">Franklin Jr.</span>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Box className="w-auto ml-72">
      <AppBar position="static">
        <Toolbar className="bg-white">
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className="ml-auto flex ">
            <img src={userImage} alt="" className="w-10 h-10 rounded-full" />
            <p className="text-black text-center mx-1">Franklin Jr.</p>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
