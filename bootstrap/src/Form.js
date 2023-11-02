import React from "react";
import Insert from './Insert';
import Show from './Show';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formData:{}
        };
    }

    submitData=(newData)=>{
        this.setState({formData:newData});
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Insert submit={this.submitData}/>
                    </div>
                    <div className="col-12">
                        <Show data={this.state.formData}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;