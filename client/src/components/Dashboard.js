import React from 'react'

// The Header creates links that can be used to navigate
// between routes.
function Dashboard() {
    // Use getItem to get the value stored in localStorage
    const googleId = localStorage.getItem('googleId');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    return (
        <div>
            <p> {googleId} </p>
            <p> {name} </p>
            <p> {email} </p>
        </div>
    )
}

export default Dashboard;