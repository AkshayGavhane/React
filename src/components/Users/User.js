import React from "react";
import "./User.css";
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../NavBar/NavBar";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UserCard from "../UserCard/UserCard";
function User() {
  return (
    <>
      
      <div className="user">
        <h4>Users</h4>
        <div className="btn">
          <Button size="small" id="button" startIcon={<AddIcon />}>
            Add User
          </Button>
        </div>
      </div>
      <div className="cards">
        <UserCard />
      </div>
    </>
  );
}

export default User;
