import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'



function NavBar() {
    return (
        <header className="header">
            <div class="logo">TeleMedecine</div>
            <nav className="navitem">
                <Link to ="/" className="link">Home</Link>
                <Link to ="/userpage" className="link">User</Link>
            </nav>

        </header>
    )
}

export default NavBar
