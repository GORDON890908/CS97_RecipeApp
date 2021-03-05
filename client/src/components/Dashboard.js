import React from 'react';
import Upload from './Upload.js';
import {useHistory} from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
function Dashboard() {
    const history = useHistory();
  
    // Use getItem to get the value stored in localStorage
    const googleId = localStorage.getItem('googleId');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    
    function logout() {
        localStorage.clear();
        history.push("/");
    }

    return (
        <div>
            <p> {googleId} </p>
            <p> {name} </p>
            <p> {email} </p>
            <Upload/>
            <button onClick={logout}>
                Log Out
            </button>
        </div>
    )
}

export default Dashboard;