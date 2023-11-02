import React from "react";
class Login extends React.Component{
    render(){
        return(
            <div className="App-header">
                <h1>Login Form</h1>
                <form>
                    <p style={{color:"red"}}>username:<input type="text" placeholder="username"></input></p>
                    <p style={{color:"red"}}>password:<input type="password" placeholder="passwaord"></input></p>
                    <p ><button onClick="#" style={{color:"red"}}>login</button></p>
                </form>
            </div>
        )
    }
}
export default Login;