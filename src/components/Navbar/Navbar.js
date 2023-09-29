import * as React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div>
      <Box className="navbar">
        <AppBar className='appbar' position="relative">
          <IconButton edge="end" aria-label="menu" sx={{ ml: 35 }}>
            <MenuIcon />
          </IconButton>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
