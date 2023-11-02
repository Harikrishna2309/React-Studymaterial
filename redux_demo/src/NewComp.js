import React from "react";
import { connect } from "react-redux";
class NewComp extends React.Component{
   
    styles={
        fontStyle:"italic",
        color:"purple"
    };
    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.props.message}</h3>
                <button onClick={this.props.Buttonchange}>Subscribe</button>
            </div>
        );
    }
}
const mapStatetoProps=state=>{
    return{
        message:state.message
    };
};

const mapDispatchToProps=dispatch=>{
    return{
        Buttonchange:()=>dispatch({type:"message_change"})
    };
};
export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(NewComp);
