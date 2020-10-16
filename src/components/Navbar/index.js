import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searching...');
    }
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/links">Links</NavLink></li>
                <li><NavLink to="gallery">Gallery</NavLink></li>

            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className="searchInput" placeholder="Search..." />
                    <img src={require('../../assets/icons/searchIcon.png')} alt='Search...' />
                </form>
            </div>
        </div>
    );

}

export default Navbar;