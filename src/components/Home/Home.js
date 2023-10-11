import React from 'react';
import User from './../Users/User';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import { Box, Card, CardContent, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

function Home() {
  return (
    <Box className="flex ml-32 ">
      <Card className="w-56 h-32 ml-64 my-20 ">
        <CardContent className="flex space-x-4">
          <div>
            <Typography variant="h6">Total Users</Typography>
          </div>
          <div>
            <PeopleAltOutlinedIcon fontSize='large' className="text-orange-500 bg-orange-100 rounded-full " />
          </div>
        </CardContent>
      </Card>
      <Card className="w-56 h-32 ml-10 my-20">
        <CardContent className="flex space-x-4">
          <div>
            <Typography variant="h6">Active Users</Typography>
          </div>
          <div>
            <PeopleAltOutlinedIcon
              fontSize="large"
              className="text-green-500 bg-green-100 rounded-full"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="w-56 h-32 ml-10 my-20 mr-20">
        <CardContent className="flex space-x-4">
          <div>
            <Typography variant="h6">Inactive Users</Typography>
          </div>
          <div>
            <PeopleAltOutlinedIcon
              fontSize="large"
              className="text-red-500 bg-red-100 rounded-full"
            />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
