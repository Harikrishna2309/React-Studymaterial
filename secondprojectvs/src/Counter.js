import React,{Component}from 'react';
class Counter extends Component{
    state={
        count:0
    };
    handleClick=()=>{
        this.setState({count: this.state.count +1});
    };
    render(){
        return(
            <div>
                <h2>count:{this.state.count}</h2>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}
export default Counter;