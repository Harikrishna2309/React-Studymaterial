import { useContext } from "react";
import { MyContext } from "./MyContext";

function Product(){
    const{text,setText}=useContext(MyContext);

    return(
        <div>
            <h1>{text}</h1>
            <button onClick={()=>setText("product details")}>
                click
            </button>
        </div>
    )
}

export default Product;