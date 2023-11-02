import React from "react";
class Login extends React.Component{
    render(){
        const ans =event=>alert(event.target.id);
        return(
            <div className='App'>
                username:<input type="text" name="text"/><br></br>
                password:<input type="password" name="password"/><br></br>
                <button id="Success" onClick={ans}>
                    click here
                </button>
            </div>
        )
    }
}
export default Login;