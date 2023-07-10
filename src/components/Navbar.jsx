import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="logo">
            <HashLink to="/#home" className='home_logo'>Techy the Catalyst</HashLink>
        </div>
        <div className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><HashLink to="/#about">About</HashLink></li>
            <li><HashLink to="/#brands">Brands</HashLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
        </div>
    </nav>
  )
}

export default Navbar