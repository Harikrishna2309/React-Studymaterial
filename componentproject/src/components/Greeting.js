import React from "react";
import'../App.css';

class Greeting extends React.Component{
    state={
        name:"hello world",
        id:2,
        contact:9080031847
    }
    render(){
        return(
            <div className="App-header">
                <h1>{this.state.name}</h1>
                <h1>id: {this.state.id}</h1>
                <h2>contact: {this.state.contact}</h2>
            </div>
        )
    }
}
export default Greeting;