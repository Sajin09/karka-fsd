import React from 'react'
import './Navbar.css'
import Logo from '../../asserts/images/Logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={Logo} alt="image" />
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
        </ul>
        <input type='text'/>
    </div>
  )
}

export default Navbar