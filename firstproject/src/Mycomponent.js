import React from "react";
class Mycomponent extends React.Component{
    constructor(props){
        super(props);
        this.callref=React.createRef();
        this.addingRefInput=this.addingRefInput.bind(this);
    }
    addingRefInput(){
        this.callref.current.focus();
    }
    render(){
        return(
            <div>
                <h2>
                    adding ref to dom element
                </h2>
                <input type="text" ref={this.callref}/>
                <input type="button" value="add text input"
                onClick={this.addingRefInput}/>
            </div>
        );
    }
}
export default Mycomponent;