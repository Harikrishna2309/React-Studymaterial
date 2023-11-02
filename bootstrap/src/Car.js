import { useState } from "react";
function Car(){
   /* const[brand,setBrand]=useState("ford");
    const[model,setModel]=useState("mustang");
    const[year,setYear]=useState("1964");
    const[color,setColor]=useState("red");*/

    const[car,setCar]=useState({
        brand:"ford",
        model:"mustang",
        year:"1964",
        color:"red"
    });

    return(
        <div>
             <h1>my {car.brand}</h1>
            <p>
                it is a {car.color} {car.model} from {car.year}
            </p>
        </div>
    )
}
export default Car;