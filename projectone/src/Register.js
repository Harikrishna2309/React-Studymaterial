import React from "react";
class Register extends React.Component{
    render(){
        return(
            <div className="App-header">
                <table style={{textAlign:"left"}}>
                        
                        <tr>
                            <td><label>First Name: </label></td>
                            <td><input type="text" placeholder=""/></td>   
                        </tr>
                        <tr>
                            <td><label>Last Name: </label></td>
                            <td><input type="text" placeholder=""/></td>
                        </tr>
                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="email" placeholder="" required/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="password" placeholder="" required/></td>
                        </tr>
                        <tr>
                            <td><label>Date of Birth: </label></td>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <td><label>Age: </label></td>
                            <td><input type="number"/></td>
                        </tr>
                        <tr>
                            <td><label>Gender: </label></td>
                            <td><input type="radio"/>Male <input type="radio"/>Female</td>
                        </tr>
                        <tr>
                            <td><label>Address: </label></td>
                            <td><textarea rows="5"></textarea></td>
                        </tr>
                        
                    </table>
                    <p ><button onClick="#">login</button></p>
            </div>
        )
    }
}
export default Register;