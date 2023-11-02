import logo from './logo.svg';
import './App.css';
import Check from './Check';
import List from './List';
import NameList from './NameList';
import Menublock from './Menublock';
import Mycomponent from './Mycomponent';
import Customtextinput from './Customtextinput';

const data=[
  {id:1,title:'first',content:'welcome to imarticus!!'},
  {id:2,title:'second',content:'it is reactjs tutorial!!'},
  {id:3,title:'third',content:'here you can learn all reactjs topics!!'}
];

const myList=['Peter','Sachin','Kevin','Dhoni','Alisa'];
function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h3>add:20+30={10+20} </h3>
        </a>
        <h1>Welcome to react family</h1>
  </header>
  <Check/> */}
  <List/>
  <NameList myList={myList}/>
  <Menublock data={data}/>
  <Mycomponent/>
  <Customtextinput/>
    </div>
  );
}

export default App;
