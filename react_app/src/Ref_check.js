import { useEffect,useRef } from "react";
export function Ref_check(){
    const divElement=useRef();
    useEffect(()=>{
        console.log(
            "The height of the div is : ",divElement.current.offsetHeight
        );
    },[]);

    return(
        <div ref={divElement}>
            <br/><br/><br/>
            <h1>Learn about useRef</h1>
        </div>
    )
}