import React from "react";

class Insert extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            city:""
        }
    }

    userFormValue=(event)=>{
        this.setState({[event.target.name]:event.target.value}, () => this.props.submit(this.state));
    }

    render(){
        return(
            <div className="div bg-primary text-white p-1">
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name" value={this.state.name} onChange={this.userFormValue}/>
                    <label>City</label>
                    <input className="form-control" name="city" value={this.state.city} onChange={this.userFormValue}/>
                </div>
            </div>
        )
    }
}

export default Insert;