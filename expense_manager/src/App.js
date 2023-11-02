import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Tracker from './Tracker';

function App() {
  return (
    
    <div className="App">
      <div className='Login_container'>
        <nav className='Header'>
          <Link to="/">Home</Link>||
          <Link to="/Register">Register</Link>||
          <Link to="/Tracker">Tracker</Link>
        </nav>
        </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Tracker' element={<Tracker/>}/>
      </Routes>
    </div>
  );
}

export default App;
