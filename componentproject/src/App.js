
import './App.css';
import React from 'react';
import Check from './components/Check';
import Greeting from './components/Greeting';
import Property from './components/Property';
import Test from './components/Test';
import Componentupdate from './Componentupdate';
import Header from './Header';
import Snapshot from './Snapshot';
import Table from './Table';

function App() {
  return (
    <div className="App">
      {/* <Header favcol="yellow"/>
     <Check/>
      <Test/>
      <Greeting/>
  <Property/>
  <Componentupdate/>
  <Snapshot/>*/}
  <Container/>
  <Table/>
    </div>
  );
}

class Container extends React.Component{
  constructor(props){
    super(props);
    this.state={show:true};
  }
  delHeader=()=>{
    this.setState({show:false});
  }
  render(){
    let myheader;
    if(this.state.show){
      myheader=<Child/>;
    };
    return(
      <div>
        {myheader}
        <button type='button' onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}
class Child extends React.Component{
  componentWillUnmount(){
    alert("the component named header is about to be unmounted");
  }
  render(){
    return(
      <h1>Hello world</h1>
    );
  }
}

export default App;
