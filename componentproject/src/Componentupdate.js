import React from "react";
class Componentupdate extends React.Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
    }
    shouldComponentUpdate(){
        return true;
    }
    changecolor=()=>{
        this.setState({favouritecolor:"blue"});
    }
    render(){
        return(
            <div>
                <h1>my favouritecolor is {this.state.favouritecolor}</h1>
                <button type="button" onClick={this.changecolor}>change color</button>
            </div>
        )
    }
}
export default Componentupdate;