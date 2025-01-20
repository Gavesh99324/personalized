

import React from 'react';
import './Journal.css';
import Appointment from '../../Assests/Appointment.jpg';
import Doc from '../../Assests/Doc.jpg';
import Anxity from '../../Assests/Anxity.jpg';
import EMDR from '../../Assests/EMDR.jpg';
import Therapy from '../../Assests/Therapy.jpg'
import { PiArrowSquareInThin } from "react-icons/pi";
import ShakeHand from '../../Assests/ShakeHand.jpg';
import { IoLogoApple } from "react-icons/io";
import LayerPic from '../../Assests/LayerPic.jpg';
import { IoPeopleOutline } from "react-icons/io5";
import Emily from '../../Assests/Emily.jpeg';
import { IoSearch } from "react-icons/io5";

import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";


export default function Journal() {

  const header = [
    { icon: <FaRegHandshake />, title: 'Start Your Healing Journey', information: '' },
    { icon: <HiOutlineQuestionMarkCircle />, title: 'Mental Health FAQs', information: '' },
    { icon: <HiOutlineLightBulb />, title: 'Wellness Knowledge Base', information: '' },
    { icon: <MdSlowMotionVideo />, title: 'Guided Videos', information: '' },
    { icon: <HiOutlineQuestionMarkCircle />, title: 'My Mental Health Questions', information: '' },
    { icon: <TbMessage2 />, title: 'Live Support Chat', information: '' },
  ]


  return (
    <>
      <div className="header-image">
        <img className="journal-image" src={Appointment} alt="Appointment" />
        <h2 className="journal-header">Appointment</h2>
        <h6 className="journal-subheader">Secure Your Spot for Healing and Support</h6>
      </div>
      <div className="doctor-container">
        <img src={Doc} className="doctor" alt="Doctor" />
        <div className="text-container">
          <h2 className="header-title">Arrange Your Therapy Appointment</h2>
          <h2 className="header-title">Now, Begin Healing.</h2>
          <div className="input-container">
            <div className="input-row">
              <div>
                <h5>Name</h5>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <h5>Company</h5>
                <input type="text" placeholder="Company" />
              </div>
            </div>
            <div className="input-row">
              <div>
                <h5>Phone</h5>
                <input type="tel" placeholder="Phone" />
              </div>
              <div>
                <h5>Email</h5>
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="input-row">
              <div>
                <h5>Date</h5>
                <input type="date" name="Date" id="date" />
              </div>
              <div>
                <h5>Time</h5>
                <input type="time" placeholder="Time" />
              </div>
            </div>
            <div className="subject-container">
              <h5>Subject</h5>
              <input type="text" placeholder="Subject" />
            </div>
            <div className="message-container">
              <h5>Message</h5>
              <textarea placeholder="Message"></textarea>
            </div>
            <div>
              <button className='appointment-btn'>Book an Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ap-header">
        <h2 className='topic'>Healing Narratives: See the</h2>
        <h2 className='topic'>Impact of Our Approach</h2>
      </div>
      <div className="med-images">
       <div className="image-cont">
         <button className="overlay-button">
           <span className="line1">Overcoming Anxiety</span>
           <span className="line2">Through Mindfulness</span>
           {<PiArrowSquareInThin className='arrow-icon'/>}
         </button>
         <img className="med1" src={Anxity} alt="anxity" />
       </div>
       <div className="image-cont">
         <button className="overlay-button">
           <span className="line1">Managing Depression</span>
           <span className="line2">With Therapy</span>
           {<PiArrowSquareInThin className='arrow-icon'/>}
         </button>
         <img className="med2" src={Therapy} alt="therapy" />
       </div>
       <div className="image-cont">
         <button className="overlay-button">
           <span className="line1">Healing from Trauma </span> 
           <span className="line2">Through EMDR</span>
           {<PiArrowSquareInThin className='arrow-icon'/>}
         </button>
         <img className="med3" src={EMDR} alt="emdr" />
       </div>
      </div>
      <div className='shake-hand-container'>
        <img className='shake-hand' src={ShakeHand} alt="ShakeHands" />
        <h4 className='shake-hand-header'>Track Your Mental Health <br />and Discover Happiness</h4>
        <button className='app-btn'>{<IoLogoApple className='apple-icon'/>} Download App</button>
        <img className='layerPic' src={LayerPic} alt="AppWall" />

        <div className='bookAppointment'>
          <img className='therapist' src={Emily} alt="therapist" />
          <h2>Sophia Green</h2>
          <h6>Licensed Therapist</h6>
         <div>
          <input type="Date" name="Date" id="date" />
         </div>
         <div>
          <input type="time" placeholder="Time" />
         </div>
         <button className='book-btn'>Book An Appointment</button>
         {<IoPeopleOutline className='people-icon'/>}
        </div>
      </div>
      <div className='search-bar'>
        <h4>How can we help you?</h4>
      </div>
      <div className="search-wrapper"> {/* Centering wrapper */}
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">
          <IoSearch />
        </button>
      </div>
    </div>


    <div className='detail-cards-container'>
      {header.map((item, index) => (
        <div className='detail-card' key={index}>
          <h6>{item.icon} {item.title}</h6>
          <p>{item.information}</p>
        </div>
      ))}
    </div>

    </>
  );
}

















