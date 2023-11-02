import logo from './logo.svg';
import './App.css';
import { MyContext } from './component/MyContext';
import MyComponent from './component/MyComponent';
import { useState } from 'react';
import Product from './component/Product';
import Webpages from './webpages/Index';
import Post from './post/P_index';
import EmployeeForm from './component/EmployeeForm';
import "bootstrap/dist/css/bootstrap.min.css";
import OnlineStatus from './component/OnlineStatus';
import NewComp from './component/Redux';

function App() {
 // const[text,setText]=useState("imarticus");
  return (
    <div>
     {/* <div>
        <h1 style={{color:"red"}}>Adding the employee details</h1>
      </div>
      <MyContext.Provider value={{text,setText}}>
        <MyComponent/>
  </MyContext.Provider>
      <Product/>
      <Webpages/>
      <Post/>
      <EmployeeForm/>
      <OnlineStatus/>*/}
      <NewComp/>
    </div>
  );
}

export default App;
