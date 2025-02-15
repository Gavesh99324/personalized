
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from './Button';
import Dropdown from './Dropdown';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => setDropdown((prev) => !prev);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Epic
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/journal" className="nav-links" onClick={closeMobileMenu}>
              Journal
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chatbot" className="nav-links" onClick={closeMobileMenu}>
              ChatWithUs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              <Button to = '/login' />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onClick={toggleDropdown}
          >
            <Link to="#" className="nav-links">
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
}










