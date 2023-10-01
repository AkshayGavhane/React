import React from "react";
import "./User.css";
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../NavBar/NavBar";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
function User() {
  return (
    <>
      <Sidebar />
      <NavBar />
      <div className="user">
        <h3>Users</h3>
        <div className="btn">
          <Button size="small" id="button" startIcon={<AddIcon />}>
            Add User
          </Button>
        </div>
      </div>
    </>
  );
}

export default User;
