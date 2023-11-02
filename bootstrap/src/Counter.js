import React, { useState } from "react";
function Counter(){
    const[count,setCount]=useState(0);

    function handleClick(){
        setCount(count+1);
    }
    return(
        <div>
            <p>
                count: {count}
            </p>
            <button onClick={handleClick}>INcreament</button>
        </div>
    );
}
export default Counter;