

import React from 'react';
import './Journal.css';
import Appointment from '../../Assests/Appointment.jpg';
import Doc from '../../Assests/Doc.jpg';
import Anxity from '../../Assests/Anxity.jpg';
import EMDR from '../../Assests/EMDR.jpg';
import Therapy from '../../Assests/Therapy.jpg'
import { PiArrowSquareInThin } from "react-icons/pi";


export default function Journal() {
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
    </>
  );
}

