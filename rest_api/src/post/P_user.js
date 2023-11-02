import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function P_user(){
    const{id}=useParams();

    const[error,setError]=useState("");
    const[isLoaded,setIsLoaded]=useState(true);
    const[posts,setPosts]=useState([]);
    const[title,setTitle]=useState([]);
    const[body,setBody]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(res=>res.json())
        .then(
            (data)=>{
                console.log(data);
                setPosts(data);
                setIsLoaded(true);
                setTitle(data.title);
                setBody(data.body);
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
    if(posts){
        return<div>
            <center>
            <div><h1>id:{posts.id}</h1></div>
            <div><h4>Title:{title}</h4></div>
            <div>Body:{body}</div>
            </center>
           
        </div>
    }
    
}
export default P_user;