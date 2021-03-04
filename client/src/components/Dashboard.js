import React from 'react'

// The Header creates links that can be used to navigate
// between routes.
function Dashboard() {
    const googleId = localStorage.getItem('googleId');

    return (
        <div>
            <header>Dashboard</header>
            <p> {googleId} </p>
        </div>
    )
}

export default Dashboard;