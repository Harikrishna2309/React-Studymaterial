import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Home(){
    const [error,setError]=useState(null);
    const [isLoaded,setIsLoaded]=useState(false);
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(
            (data)=>{
                setIsLoaded(true);
                setUsers(data);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error){
        return<div>
            error:{error.message}
        </div>
    }
    else if(!isLoaded){
        return<div>
            loading:...
        </div>
    }
    else{
        return(
            <>
                <ul>
                    {users.map(user=>(
                        <li>
                            <Link to={`user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
    return(
        <div>
            <h1>
                Home page
            </h1>
        </div>
    )
}
export default Home;