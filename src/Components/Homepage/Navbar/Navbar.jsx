import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Navbar.css'
import { Button } from './Button'
import Dropdown from './Dropdown'


export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Epic</Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </>
  )
}


