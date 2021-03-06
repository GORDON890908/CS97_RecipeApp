import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Upload from './Upload.js';

// The Header creates links that can be used to navigate
// between routes.
function Dashboard() {
    const history = useHistory();

    // Update user after query
    const [user, setUser] = useState(null);
    // Use getItem to get the value stored in localStorage
    const googleId = localStorage.getItem('googleId');
    
    const fetchUser = async() => {
        await fetch(`/user?googleId=${googleId}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
        });
    }
    
    function logout() {
        localStorage.clear();
        history.push("/");
    }

    return (
        <div>
            <div>
                {user && user.map((user, index) => {
                    return (
                        <div key = {index}>
                            <p>Welcome {user.displayName}</p>
                            <p>googleId: {user.googleId}</p>
                        </div>
                    )
                })}
            </div>
            <Upload/>
            <button onClick={fetchUser}>
                Fetch
            </button>
            <button onClick={logout}>
                Log Out
            </button>
        </div>
    )
}

export default Dashboard;