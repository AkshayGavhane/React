import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Avatar, Box, Snackbar } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [usersList, setUsersList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:8888/data')
      .then((res) => {
        //setUsersCard(res.data.rows);
        return res.json();
      })
      .then((resp) => {
        console.log(resp);

        setUsersList(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditChange = (id) => {
    navigate('/users/edituser/' + id);
  };

  const handleDeleteChange = (id) => {
    if (window.confirm('Do you want to delete User?')) {
      fetch('http://localhost:8888/data/' + id, {
        method: 'DELETE',
      }).then((res) => {
        alert('Deleted Successfully!');
        window.location.reload();
      });
    }
  };
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
      width: 180,
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
                  handleEditChange(params.row.id);
                }}
              />
            </div>
            <div>
              <DeleteOutlineOutlinedIcon
                className="cursor-pointer"
                onClick={() => {
                  handleDeleteChange(params.row.id);
                }}
              />
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
