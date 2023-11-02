import React from "react";
class Employee extends React.Component{
    state={
        firstname:"hari",
        lastname:"krishna",
        email:"hari@gmail.com"
    }
    updateEmployee(){
        this.setState({
            lastname:"M",
            email:"123@gmail.com"
        })
    }
    render(){
        return(
            <div className="App">
                <h1>Employee details</h1><hr>
                </hr>
                
                <p>{this.state.firstname}</p>
                <p>{this.state.lastname}</p>
                <p>{this.state.email}</p>
                <button onClick={()=>this.updateEmployee()}>
                    Update Employee
                </button>
            </div>
        )
    }
}
export default Employee