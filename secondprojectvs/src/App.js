//import logo from './logo.svg';
import './App.css';
import { Student1 } from './Propsdemo';
import { Skills } from './Skills';
import { Student } from './Student';
//import Login from './Login';
import Employee from './Employee';
import Company from './Company';
import Loginform from './Loginform';
/*import Counter from './Counter';
import Greeting from './Greeting';*/
//import Welcome1 from './Welcome1';
/*import Test from './Test';
import Welcome from './Welcome';
import About from './About';
import Place from './Location';
import Contact from './Contact';
import Addition from './Additional';
import Array from './Array';*/

function App() {
  const skills=['html  ','css  ','js']
  const Student={
    firstname:"harikrishna",
    lastname:"m",
    email:"harikrish.m@gmail.com"

  }

  return (
    
    <div className="App">
      <Skills data={skills}/>
      <Student1 stud={Student}/>
     {/* <Student
      firstname="hari"
      lastname="krishna"
      email="hari@gmail.com"
      />
      <Student
      firstname="krish"
      lastname="m"
      email="krish@gmail.com"
      />*/}
      
     {/* <Welcome/>
      <Test/>
      <About/>
      <Place/>
      <Contact/>
      <Addition/>
      <Array/>
    <Login/> */}
      <Employee/>
     {/*} <Counter/>
      <Greeting/>

      <Welcome1 name="hari"/> */}
      <Company/>
      <Loginform/>
    </div>
  );
}

export default App;
