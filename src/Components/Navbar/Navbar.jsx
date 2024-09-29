import React, { useState } from 'react'
import './Navbar.css'
import main_logo2 from '../../Assests/main_logo2.jpg'
//import logo_light from '../../Assests/logo-black.png'
//import logo_dark from '../../Assests/logo-white.png'
import search_icon_light from '../../Assests/search-w.png'
import search_icon_dark from '../../Assests/search-b.png'
import toogle_light from '../../Assests/night.png'
import toogle_dark from '../../Assests/day.png'
import heading_background from '../../Assests/Stethoscope-blue-background.jpg'
import TitlesHover, { Title } from '../Footer/Styles/Footer'


const Navbar = ({ theme, setTheme}) => {

    const [isHovering, setIsHovering] = useState(false)
    const [text, setText] = useState('')

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    function handleMouseEnter() {
        setIsHovering(true)
    }

    function handleMouseLeave() {
        setIsHovering(false)
    }


  return (
    <>
    <div className='navbar'>
        <img src={theme === 'light' ? main_logo2 : main_logo2} alt='' className='logo'/>
        <ul>
            <li><TitlesHover Title="Home" /></li>
            <li><TitlesHover Title="Journal" /></li>
            <li><TitlesHover Title="Chat with Assistant" /></li>
            <li><TitlesHover Title="Mood Tracker" /></li>
            <li><TitlesHover Title="Resources" /></li>
            <li><TitlesHover Title="Profile" /></li>
            <li><TitlesHover Title="Notifications" /></li>
            <li><TitlesHover Title="Logout" /></li>
        </ul>
        <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt=""  className='same_icon'/>
        </div>

        <img onClick={() => {toggle_mode()}} src={theme === 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>
    </div>
    <div>
        <img 
           src={heading_background} 
           alt="" 
           className='head_background_image'
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
        />
    </div>
   </>
  )
}

export default Navbar




