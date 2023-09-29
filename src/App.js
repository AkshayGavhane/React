
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
