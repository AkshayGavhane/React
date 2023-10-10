import React from 'react';
import './User.css';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UserCard from '../UserCard/UserCard';
function User() {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
        }}
      >
        <div className=" mt-40 flex ">
          <div className="ml-80">
            <Typography variant="h6">Users</Typography>
          </div>
          <div className="ml-auto mr-16">
            <Button variant="contained" size="medium">
             <AddIcon/>
             Add New User
            </Button>
          </div>
        </div>

        <div className="mt-2">
          <UserCard />
        </div>
      </Box>
    </>
  );
}

export default User;
