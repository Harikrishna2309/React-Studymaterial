import React from "react";
class Constructor1 extends React.Component{
    constructor(props){
        
        super(props);
        this.state={
            fname:"hari"
        }
    }
    render(){
        return(
            <div>
                <p>name:{this.state.fname}</p>
            </div>
        )
    }
}
export default Constructor1;