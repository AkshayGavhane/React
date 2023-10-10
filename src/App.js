import './App.css';

import User from './components/Users/User';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import UserCard from './components/UserCard/UserCard';
import Sidebar from './components/Sidebar/Sidebar';
import NavBar from './components/NavBar/NavBar';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="app">
      {/* <Sidebar />
      <NavBar /> */}
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/users" element={<User></User>}></Route>
        <Route path="/dashboard" element={<Home></Home>}></Route>
      </Routes>
    </Box>
  );
}

export default App;
