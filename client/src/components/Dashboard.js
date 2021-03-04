import React from 'react'

// The Header creates links that can be used to navigate
// between routes.
const googleId = localStorage.getItem('googleId');

const Header = () => (
    <div>
        <header>Dashboard</header>
        <p> {googleId} </p>
    </div>
)

export default Header;