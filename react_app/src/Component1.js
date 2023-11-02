import { useState } from "react";
import Component2 from "./Component2";
function Component1(){
    const[user,setUser]=useState("jesse hall");
    return(
        <>
        <h1>{`hello ${user}!`}</h1>
        <Component2 user={user}/>
        </>
    );
}
export default Component1;