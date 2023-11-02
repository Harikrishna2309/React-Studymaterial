import { useState,useEffect } from "react";

function Timerrev(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
        count<5 && setTimeout(()=>setCount(count+1),1000);
    },[count]);

    return<h1>i have rendered {count} times</h1>
}
export default Timerrev;