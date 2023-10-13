import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const UserList = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios.get('../data.json').then((res) => {
      setUsersList(res.data.data.rows);
    });
  }, []);
  // const count = usersList.length;
  // console.log('count:', count);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 1,
      renderCell: (params) => {
        return <div>{params.row.id}</div>;
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex space-x-2">
            <div className="my-1">
              <Avatar src={params.row.picture} />
            </div>
            <div className="my-3">
              {params.row.firstName}&nbsp;{params.row.lastName}
            </div>
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 205,
      renderCell: (params) => {
        return <div>{params.row.email}</div>;
      },
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 130,
      renderCell: (params) => {
        return <div>{params.row.phone}</div>;
      },
    },
    {
      field: 'lastactivity',
      headerName: 'Last Activity',
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.lastUpdated}</div>;
      },
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 80,
      renderCell: (params) => {
        return <div>{params.row.role}</div>;
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 80,
      renderCell: (params) => {
        return <div>{params.row.status}</div>;
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 80,
      renderCell: (params) => {
        return (
          <div className="flex space-x-3">
            <div>
              <ModeEditOutlineOutlinedIcon
                className="cursor-pointer"
                onClick={() => {
                  window.location.pathname = 'users/edituser';
                }}
              />
            </div>
            <div>
              <DeleteOutlineOutlinedIcon className="cursor-pointer" />
            </div>
          </div>
        );
      },
    },
  ];
  const rows = usersList;
  return (
    <Box className="ml-80 ">
      <DataGrid
        className="container border-none w-full"
        rows={rows}
        columns={columns}
        checkboxSelection
        autoPageSize={false}
        rowHeight={80}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
export default UserList;
