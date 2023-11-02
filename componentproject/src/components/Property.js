import React,{Component} from "react";
class Property extends Component{
    render(){
        return(
            <div>
                <h1>Default props example</h1>
                <h3>welcome to learning {this.props.name}</h3>
                <p>i am a student</p>
                <h5>Location: {this.props.location}</h5>
                <h5>course:{this.props.training}</h5>
            </div>
        )
    }
}
Property.defaultProps={
    name:"hari",
    location:"coimbatore",
    training:"fsd"
}
export default Property;