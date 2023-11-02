import React,{useState} from "react";
function Namestate(){
    const[name,setname]=useState("hari");
    function handleEvent(){
        setname("krish");
    }
    return( 
        <div>
            <h2>first name={name}</h2>
            <button onClick={handleEvent}>Click here</button>
        </div>
        );
}
export default Namestate;