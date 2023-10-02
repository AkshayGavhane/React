import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import userImage from '../../profile.png';
import './NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <Navbar bg="light" variant="dark" className='navbar'>
      <Container>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          <Nav>
            <Nav.Item className="menu-icon">
              <MenuIcon fontSize="large" />
            </Nav.Item>
          </Nav>
          <Nav className="flex-grow-1">
            <Nav.Item className="ms-auto">
              <img src={userImage} className="user-photo" alt="" />
              <span className="name">Franklin Jr.</span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
