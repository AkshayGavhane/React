import "./App.css";

import User from "./components/Users/User";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <div className="app">
     
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path='/users' element={<User></User>}></Route>
        <Route path="/dashboard" element={<Home></Home>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
