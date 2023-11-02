import React,{useState} from "react";
function Functional(){
const[data,setdata]=useState({
    test:"nil",
    question:"0",
    student:"0"})
    function handleEvent(){
        setdata({
            test:"programming quiz",
            question:"10",
            student:"30"
        });
    }


return(
    <div>
         <h1>Test Result</h1>
            <h2>Test:{data.test}</h2>
            <h2>Question:{data.question}</h2>
            <h2>Student:{data.student}</h2>
        <button onClick={handleEvent}>Click here</button>
    </div>
)
}
export default Functional;