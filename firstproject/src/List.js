import React from "react";
const myList=['Peter','Sachin','Kevin','Dhoni','Alisa'];
const listItems=myList.map((myList)=>{
    return <li>{myList}</li>;
});

class List extends React.Component{
    render(){
        return(
            <div>
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default List;