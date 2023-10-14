import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, useNavigate, useParams } from 'react-router-dom';
function EditUser() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { id } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState([]);
  const [status, setStatus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8888/data/' + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // setFirstName(resp.firstName);
        // setLastName(resp.lastName);
        // setEmail(resp.email);
        // setPhone(resp.phone);
        // setPassword(resp.password);
        // setPasswordConfirmation(resp.passwordConfirmation);
        // setRole(resp.role);
        // setStatus(resp.status);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const handleForm = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      password,
      passwordConfirmation,
      role,
      status,
    };

    fetch('http://localhost:8888/data/' + id, {
      method: 'PUT',
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
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const roles = ['Admin', 'User'];

  const stat = ['Active', 'Inactive'];
  return (
    <Box className=" mr-16 ml-80 mt-10 h-full w-auto">
      <div className="flex my-2">
        <div>
          <Typography variant="h5">Users</Typography>
        </div>
        <div className="flex ml-auto">
          <HomeOutlinedIcon className="mt-1" />
          <Typography variant="h6">/ Users / Edit User</Typography>
        </div>
      </div>
      <form className="space-y-4" onSubmit={handleForm}>
        <div className="flex space-x-32 justify-start items-center">
          <Typography>First Name</Typography>
          <TextField
            id="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-96"
            required
          />
        </div>
        <div className="flex  space-x-32 justify-start items-center">
          <Typography>Last Name</Typography>
          <TextField
            id="outlined"
            value={lastName}
            className="w-96"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="flex space-x-40 mx-2 justify-start items-center">
          <Typography>Email</Typography>
          <TextField
            id="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96"
          />
        </div>
        <div className="flex space-x-40 items-center">
          <Typography>Phone</Typography>
          <TextField
            id="outlined"
            value={phone}
            className="w-96"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex space-x-44 justify-start items-center">
          <Typography>Role</Typography>
          <TextField
            id="outlined"
            select
            value={role}
            onChange={(e) => handleRoleChange(e)}
            className="w-96"
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex space-x-40 justify-startitems-center">
          <Typography className="my-1">Status</Typography>
          <TextField
            id="outlined"
            select
            value={status}
            onChange={(e) => {
              handleStatusChange(e);
            }}
            className="w-96"
          >
            {stat.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex space-x-32 mx-1 justify-start items-center">
          <Typography>Password</Typography>
          <TextField
            id="outlined"
            value={password}
            className="w-96"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex space-x-16 mx-2 items-center">
          <Typography>Confirm Password</Typography>
          <TextField
            id="outlined"
            value={passwordConfirmation}
            className="w-96"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
          />
        </div>
        <div className="flex space-x-4  ">
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
                User Edited Successfully!
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

export default EditUser;
