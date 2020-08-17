import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="">
                <strong>ACTION ITEMS</strong>
            </div>
            <div className="nav">
                <NavLink className="nav-item"
                    activeClassName='active' to="/to-do">TO DO</NavLink>
                <NavLink className="nav-item"
                    activeClassName='active' to="/to-read">TO READ</NavLink>
            </div>
        </div>
    )
}

export default Header
