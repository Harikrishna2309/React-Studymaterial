import React from "react";

class ClassExample extends React.Component{
    state={
        name:'hari'
    }
    handleEvent=()=>{
        this.setState({name:'krish'});
    }
    render(){
        return(
            <div>
                <h1>Name : {this.state.name}</h1>
            <button onClick={this.handleEvent}>Click to update</button>
            </div>
        )
    }
}

export default ClassExample;