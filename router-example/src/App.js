import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Location from './Location';

function App() {
  return (
    <div className="App-header">
      <header>
      <nav>
        <ul className='App'>
       <li> <Link to="/">Home</Link></li>
       <li> <Link to="/Contact">Contact</Link></li>
       <li> <Link to="/Location">Place</Link></li>
        </ul>
      </nav>
      </header>
     <Routes>
      <Route path='/'element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/location' element={<Location/>}/>
     </Routes>
    </div>
  );
}

export default App;
