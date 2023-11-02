import React from "react";
class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>home page</h1>
                <body>
    <h2>Login</h2>
    <form>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">Login</button>
    </form>
</body>
            </div>
        );
    }
}
export default Home;