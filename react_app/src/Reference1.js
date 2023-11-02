import { useState,useEffect } from "react";
export default function Reference1(){
    const [counter,setCounter]=useState(0);

    const handleIncreaseCounter=()=>{
        setCounter(counter+1);
    };
    useEffect(()=>{
        console.log("counter changed to: ",counter);
    },[counter])
    return(
        <div>
            <h1>Learn about useRef!</h1>
            <h2>Value:{counter}</h2>
            <button onClick={handleIncreaseCounter}>
                Increase count
            </button>
        </div>
    );
}
