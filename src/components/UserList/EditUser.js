import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
function EditUser() {
  const [role, setRole] = useState([]);
  const [status, setStatus] = useState([]);

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
      <form className="space-y-4">
        <div>
          <TextField id="outlined" label="First Name" fullWidth required />
        </div>
        <div>
          <TextField id="outlined" label="Last Name" fullWidth required />
        </div>

        <div>
          <TextField id="outlined" label="Email" fullWidth />
        </div>
        <div>
          <TextField id="outlined" label="Phone" fullWidth type="number" />
        </div>
        <div>
          <TextField
            id="outlined"
            label="Role"
            fullWidth
            select
            value={role}
            onChange={(e) => handleRoleChange(e)}
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
          <TextField id="outlined" label="Password" fullWidth />
        </div>
        <div>
          <TextField id="outlined" label="Confirm Password" fullWidth />
        </div>
        <div>
          <Button variant="contained">Save</Button>
        </div>
      </form>
    </Box>
  );
}

export default EditUser;
