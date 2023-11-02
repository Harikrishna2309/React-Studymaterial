import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User(){
    const{id}=useParams();

    const[error,setError]=useState("");
    const[isLoaded,setIsLoaded]=useState(true);
    const[user,setUser]=useState([]);
    const[userAddress,setUserAddress]=useState([]);
    const[userCompany,setUserCompany]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/"+id)
        .then(res=>res.json())
        .then(
            (data)=>{
                console.log(data);
                setUser(data);
                setIsLoaded(true);
                setUserAddress(data.address);
                setUserCompany(data.company);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    if(error){
        return<div>
            Error:{error.message}
        </div>
    }
    if(!isLoaded){
        return<div>
            loading...
        </div>
    }
    if(user){
        return<div>
            <center>
            <h1>{user.name}</h1>
            <div>Email:{user.email}</div>
            <div>Phone:{user.phone}</div>
            <div>website:{user.website}</div>
            <div>company:{userCompany.name}</div>
            <div>Address:{userAddress.street},{userAddress.suite},
            {userAddress.city},{userAddress.zipcode}</div>
            </center>
           
        </div>
    }
    
}
export default User;