import './App.css';

import User from './components/Users/User';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import NavBar from './components/NavBar/NavBar';
import { Box } from '@mui/material';
import AddUserForm from './components/AddUserForm/AddUserForm';
import EditUser from './components/UserList/EditUser';

function App() {
  return (
    <Box className="app">
      <Sidebar />
      <NavBar />

      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/users" element={<User></User>}></Route>
        <Route path="/dashboard" element={<Home></Home>}></Route>
        <Route
          path="users/edituser/:id"
          element={<EditUser></EditUser>}
        ></Route>
        <Route
          path="/users/adduser"
          element={<AddUserForm></AddUserForm>}
        ></Route>
      </Routes>
    </Box>
  );
}

export default App;
