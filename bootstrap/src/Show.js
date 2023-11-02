import React from "react";

class Show extends React.Component{
    userInfo=(data)=>Array.isArray(data)?data.join(', '):data.toString();

    /*
    var list1={
        name:"Mouli",
        city:"Salem",
    }
    */

    render(){
        let keys=Object.keys(this.props.data);
        if(keys.length===0){
            return <div className="div bg-primary text-white p-1">No Record</div>
        }
        else{
            return <div className="div bg-primary text-white p-1">
                {
                    keys.map(key=>
                            <div key={key} className="row h-5 text-white">
                                <div className="col">{key}: </div>
                                <div className="col">
                                    {this.userInfo(this.props.data[key])}
                                </div>
                            </div>
                        )
                }
            </div>
        }
    }

}

export default Show;