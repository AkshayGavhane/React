import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/NavBar/NavBar";
import User from "./components/Users/User";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <NavBar />
      <Routes>
        <Route path='/users' element={<User></User>}></Route>
      </Routes>
    </div>
  );
}

export default App;
