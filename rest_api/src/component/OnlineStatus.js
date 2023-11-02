import { useState, useEffect } from "react";

function OnlineStatus(){
    //Online State
    const [isOnline,setIsOnline]=useState(navigator.onLine);

    useEffect(()=>{
        //Update network status
        const handleStatusChange=()=>{
            setIsOnline(navigator.onLine);
        };

        //Listen to the online status
        window.addEventListener('online',handleStatusChange);

        //Listen to the offline status
        window.addEventListener('offline',handleStatusChange);

        //Specify how to clean uo after this effect for performaing improvement
        return()=>{
            window.removeEventListener('online',handleStatusChange);
            window.removeEventListener('offline',handleStatusChange);
        };
    },[isOnline]);

    return(
        <div className="container">
            <h2>Welcome to Imarticus.com</h2>
            <p>Turn on/off your Wi-Fi to see what happens</p>
            { isOnline ? (<h1 className="online">You are Online</h1>) : (<h1 className="offline">You are Offline</h1>) }
        </div>
    );
}

export default OnlineStatus;