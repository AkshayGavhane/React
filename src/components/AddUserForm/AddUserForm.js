import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, useNavigate } from 'react-router-dom';

function AddUserForm() {
  const [role, setRole] = useState([]);
  const [status, setStatus] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  // const handleRoleChange = (e) => {
  //   setRole(e.target.value);
  // };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const roles = ['Admin', 'User'];

  const stat = ['Active', 'Inactive'];

  const navigate = useNavigate();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      password,
      role,
      status,
    };

    fetch('http://localhost:8888/data', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate('/users');
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setOpenSnackbar(true);
      });
  };

  return (
    <Box className=" mr-16 ml-80 mt-10 h-full w-auto">
      <div className="flex my-2">
        <div>
          <Typography variant="h5">Users</Typography>
        </div>
        <div className="flex ml-auto">
          <HomeOutlinedIcon className="mt-1" />
          <Typography variant="h6">/ Users / Add User</Typography>
        </div>
      </div>
      <form className="space-y-4" onSubmit={handleForm}>
        <div>
          <TextField
            id="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            fullWidth
            required
          />
        </div>
        <div>
          <TextField
            id="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            fullWidth
            required
          />
        </div>

        <div>
          <TextField
            id="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Phone"
            fullWidth
            type="number"
          />
        </div>
        <div>
          <TextField
            id="outlined"
            label="Role"
            fullWidth
            select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined"
            label="Status"
            fullWidth
            select
            value={status}
            onChange={(e) => {
              handleStatusChange(e);
            }}
          >
            {stat.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="outlined"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            label="Confirm Password"
            fullWidth
          />
        </div>
        <div className="flex">
          <div className="mb-20  ">
            <Button
              className="space-y-5 "
              variant="contained"
              color="success"
              type="submit"
            >
              Save
            </Button>
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              className="w-2/6 h-28 "
            >
              <Alert onClose={handleSnackbarClose} className="w-72 h-12">
                User added Successfully!
              </Alert>
            </Snackbar>
          </div>
          <div className="ml-2">
            <Link to="/users">
              <Button variant="contained" color="error" className="mx-10">
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </Box>
  );
}

export default AddUserForm;
