import logo from './logo.svg';
import './App.css';
import Constructor from './Constructor';
import Constructor1 from './Constructor1';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import Multipleinput from './Multipleinput';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <Constructor/>
      <Constructor1/>
      <Uncontrolled/>
      <Controlled/>
      <Multipleinput/>
      <Example/>
    </div>
  );
}

export default App;
