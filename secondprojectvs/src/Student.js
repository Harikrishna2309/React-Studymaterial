export const Student=(props)=>{
    console.log(props);
    return(
        <div className="center">
            <p>first name: {props.firstname}</p>
            <p>last name: {props.lastname}</p>
            <p>email address: {props.email}</p>
        </div>
    )

}