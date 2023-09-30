import './App.css';
import Body from './components/Body/Body';
import Home from './components/Home/Home';
import User from './components/Users/User';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <User/> */}
      <Body/>
    </div>
  );
}

export default App;
