import logo from './logo.svg';
import './App.css';
import Themeswitcher from './Themeswitcher';
import Sample1 from './Sample1';
import Car from './Car';
import Timer from './Timer';
import Button from './Button';
import Counter from './Counter';
import Timerrev from './Timerrev';
import MouseEvent from './MouseEvent';
import CheckBox from './CheckBox';
import { useState } from 'react';
import CheckList from './CheckList';
import TableForm from './TableForm';
import Form from './Form';

function App() {
  /*const checkboxes=['java','react','git','mongodb'];
  const[checkedState,setCheckedState]=useState(
    new Array(checkboxes.length).fill(false)
  );

  const handleCheckboxChange=(index)=>{
    const updateCheckedState=checkedState.map((item,idx)=>
    idx===index?!item:item
    );
    setCheckedState(updateCheckedState);
  };

  const countCheckedCheckboxes=()=>{
    return checkedState.filter(Boolean).length;
  };*/
  return (
    <div className="App">
     {/*  <h1>SElect the course you want to learn</h1>
      <CheckList
      checkboxes={checkboxes}
      checkedState={checkedState}
      handleCheckboxChange={handleCheckboxChange}/>
      <p>Number of checked checkbox:
        <strong>{countCheckedCheckboxes()}</strong>
      </p>
     <Themeswitcher/>
      <Sample1/>
      <Car/>
      <Timer/>
      <Button/>
      <Counter/>
      <Timerrev/>
  <MouseEvent/>
      <h1>Select the course you want to learn</h1>
  <CheckBox CheckBoxes={checkboxes}/>*/}
  <TableForm/>
  <Form/>
    </div>
  );
}

export default App;
