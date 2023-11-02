import { useState,useEffect } from "react";

function Timer(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },1000)
    })
    return(
        <>
        <h1>USEEFFECT example</h1>
        <h2>i have rendered {count} times</h2>
        </>
    )
}
export default Timer;