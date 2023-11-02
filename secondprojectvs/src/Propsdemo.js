export const Student1=(props)=>{
    console.log(props);
    return(
        <div className="center"> 
        <p>First Name: {props.stud.firstname}</p>
        <p>Last Name:{props.stud.lastname}</p>
        <p>email:{props.stud.email}</p>
        </div>
    )
}