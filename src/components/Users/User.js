import React, { useState } from 'react';
import './User.css';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UserCard from '../UserCard/UserCard';
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import UserList from '../UserList/UserList';

function User() {
  const [showUserList, setShowUserList] = useState(false);
  const [showUserCard, setShowUserCard] = useState(true);

  const handleUserList = () => {
    setShowUserList(true);
    setShowUserCard(false);
  };

  const handleUserCard = () => {
    setShowUserCard(true);
    setShowUserList(false);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
      }}
    >
      <div className=" mt-16 flex ">
        <div className="ml-80 ">
          <Typography variant="h5" className="mt-1">
            Users
          </Typography>
        </div>
        <div className="flex ml-auto mr-16">
          <div className="cursor-pointer mx-3">
            <FormatListBulletedIcon
              fontSize="large"
              onClick={handleUserList}
              className="hover:text-violet-700  hover:bg-slate-200"
            />

            <AppsIcon
              fontSize="large"
              onClick={handleUserCard}
              className="hover:text-violet-700  hover:bg-slate-200"
            />
          </div>
          <div className="bg-violet-700 rounded-3xl hover:bg-violet-600 shadow">
            <Button
              size="medium"
              onClick={() => {
                window.location.pathname = '/users/adduser';
              }}
            >
              <AddIcon className="text-white" />
              <p className="text-white font-semibold"> Add New User</p>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="mr-16">{showUserList && <UserList />}</div>
        <div className="mr-3">{showUserCard && <UserCard />}</div>
        {/* <div className="ml-32">{user && <AddUserForm />}</div> */}
      </div>
    </Box>
  );
}

export default User;
