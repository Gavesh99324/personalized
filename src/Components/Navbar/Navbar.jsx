import React from 'react'
import './Navbar.css'
import main_logo2 from '../../Assests/main_logo2.jpg'
//import logo_light from '../../Assests/logo-black.png'
//import logo_dark from '../../Assests/logo-white.png'
import search_icon_light from '../../Assests/search-w.png'
import search_icon_dark from '../../Assests/search-b.png'
import toogle_light from '../../Assests/night.png'
import toogle_dark from '../../Assests/day.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={main_logo2} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Journal</li>
            <li>Chat with Assistant</li>
            <li>Mood Tracker</li>
            <li>Resources</li>
            <li>Profile</li>
            <li>Notifications</li>
            <li>Logout</li>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <img src={search_icon_light} alt=""  className='same_icon'/>
        </div>

        <img src={toogle_light} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar
