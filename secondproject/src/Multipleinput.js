import React from "react";
class Multipleinput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            personGoing:true,
            numberofpersons:5
        };
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        });
    }
    render(){
        return(
            <form>
                <h1>Multiple input Controlled Form Example</h1>
                <label>
                    is person going:
                    <input name="personGoing"
                    type="checkbox"
                    checked={this.state.personGoing}
                    onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    number of persons:
                    <input
                    name="numberofpersons"
                    type="number"
                    value={this.state.numberofpersons}
                    onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}
export default Multipleinput;