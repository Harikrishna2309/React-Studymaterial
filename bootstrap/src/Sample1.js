import React,{useState} from "react";
function Sample1(){
    const[name,name1]=useState('vinod');
    return(
        <div>
            <h1>{name}</h1>
            <button type="button" onClick={()=>name1('manoj')}>Click 1</button><br></br>
            <button type="button" onClick={()=>name1('priya')}>Click 2</button><br></br>
            <button type="button" onClick={()=>name1('joseph')}>Click 3</button>
        </div>
    )
}
export default Sample1;