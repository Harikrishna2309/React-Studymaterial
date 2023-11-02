import React from "react";
const Textinput=React.forwardRef((props,ref)=>(
    <input type="text" placeholder="hello world" ref={ref}/>
));
const inputref=React.createRef();

class Customtextinput extends React.Component{
    handleSubmit=e=>{
        e.preventDefault();
        console.log(inputref.current.value);
    };
    render(){
        return(
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <Textinput ref={inputref}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default Customtextinput;