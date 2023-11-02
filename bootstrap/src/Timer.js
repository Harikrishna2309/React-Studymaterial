import { useState,useEffect } from "react";

function Timer(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
      let timer=  setTimeout(()=>{
            setCount((count)=>count+1);
        },200);

        return()=>clearTimeout(timer)
    },[]);
    return<h1>i have render {count} time!</h1>;
}
export default Timer;