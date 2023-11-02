import React from "react";
class Company extends React.Component{
    state={
        Name:''
    }
    changeText(event){
        this.setState({
            Name:event.target.value
        })
    }
    render(){
        return(
            <div className="App">
                <h2>Simple event example</h2>
                enter the company name:
                <input type="text" id="companyname"
                onChange={this.changeText.bind(this)}/>
                <h4>you entered:{this.state.Name}</h4>
            </div>
        )
    }
}
export default Company;