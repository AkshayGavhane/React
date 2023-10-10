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
          <div className="ml-72">
            <Typography variant="h6">Users</Typography>
          </div>
          <div className="ml-auto rounded-3xl mr-20 bg-indigo-500">
            <Button variant="contained" size="medium">
              Add New User
            </Button>
          </div>
        </div>
      </Box>
      <div className="cards">
        <UserCard />
      </div>
    </>
  );
}

export default User;
