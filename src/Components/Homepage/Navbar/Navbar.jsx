import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Navbar.css'
import Button from './Button'
import Dropdown from './Dropdown'


export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Epic</Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/journal' className='nav-links' onClick={handleClick}>
              Journal
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/chatbot' className='nav-links' onClick={handleClick}>
              ChatWithUs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='Login' className='nav-links' onClick={handleClick}>
              {<Button />}
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='Home' className='nav-links' onClick={handleClick}>
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='Home' className='nav-links' onClick={handleClick}>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='Home' className='nav-links' onClick={handleClick}>
              Services
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  )
}




