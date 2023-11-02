
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/Register'element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
