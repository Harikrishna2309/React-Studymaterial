import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function P_home(){
    const [error,setError]=useState(null);
    const [isLoaded,setIsLoaded]=useState(false);
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(
            (data)=>{
                setIsLoaded(true);
                setPosts(data);
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
                    {posts.map(posts=>(
                        <li>
                            <Link to={`posts/${posts.id}`}>{posts.id}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }

}
export default P_home;