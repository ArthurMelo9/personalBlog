import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutMe">About Me</NavLink>
                <NavLink to="/contactMe">Contact Me</NavLink>
            </nav>
            <div className="social">
                Social Media Links
            </div>
        </header>
    )

}

export default Header;