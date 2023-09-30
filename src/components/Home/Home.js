import React from 'react';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';
// import User from '../Users/User';

function Home() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <NavBar />
       
      </div>
    </>
  );
}

export default Home;
