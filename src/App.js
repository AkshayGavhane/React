import { Navbar } from 'react-bootstrap';
import './App.css';
import Body from './components/Body/Body';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import User from './components/Users/User';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Navbar/> 
    </div>
  );
}

export default App;
