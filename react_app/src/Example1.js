//Creating a functional component
import React, {useState} from "react";

function Example1(){
    const [count,setCount]=useState(0);
    function handleEvent(){
        setCount(count+1);
    }
    return( 
    <div>
        <h1>Welcome to functional Component</h1>
        <h2>Imarticus Learning</h2>
        <h2>Count={count}</h2>
        <h2>setCount={count+1}</h2>
        <button onClick={handleEvent}>Click here</button>
    </div>
    );
}

export default Example1;