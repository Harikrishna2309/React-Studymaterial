import React from "react";

const divstyle={
    color:'red',
    FontFace:'bold',
    fontSize:50,

};
function Contact(){
    return(
        <div style={divstyle}>
            <h3>Contact Module</h3>
            <h5 style={{fontSize:30,color:'green'}}>learn more</h5>
        </div>
    );
}

export default Contact;