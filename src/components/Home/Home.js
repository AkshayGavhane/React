import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import axios from 'axios';

function Home() {
  const [usersList, setUsersList] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [inactiveUsers, setInactiveUsers] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch('http://localhost:8888/data')
      .then((res) => res.json())
      .then((resp) => {
        setUsersList(resp);
        setCount(resp.length);
        const activeCount = resp.filter((user) => user.status === 'Active');
        setActiveUsers(activeCount.length);
        const inactiveCount = resp.filter((user) => user.status === 'Inactive');
        setInactiveUsers(inactiveCount.length);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <Box className="flex ml-32">
      <Card className="w-56 h-32 ml-64 my-20 shadow">
        <CardContent className="flex space-x-4">
          <div>
            <Typography variant="h6">Total Users </Typography>
            <div className="text-3xl my-3 ml-12">{count} </div>
          </div>
          <div>
            <PeopleAltOutlinedIcon
              fontSize="large"
              className="text-orange-500 bg-orange-100 rounded-full "
            />
          </div>
        </CardContent>
      </Card>
      <Card className="w-56 h-32 ml-10 my-20 shadow">
        <CardContent className="flex space-x-4">
          <div>
            <Typography variant="h6">Active Users</Typography>
            <div className="text-3xl my-3 ml-12">{activeUsers}</div>
          </div>
          <div>
            <PeopleAltOutlinedIcon
              fontSize="large"
              className="text-green-500 bg-green-100 rounded-full"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="w-56 h-32 ml-10 my-20 mr-20 shadow">
        <CardContent className="flex space-x-4">
          <div>
            <Typography variant="h6">Inactive Users</Typography>
            <div className="text-3xl my-3 ml-12">{inactiveUsers}</div>
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
