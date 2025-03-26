import React from 'react';

function Navbar() {
    return (
        <nav>
            <h1>Tech Internship Matchmaker</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;