import React from 'react';

import './Journal.css'

export default function TherapistBooking({ ShakeHand, IoLogoApple, LayerPic, Emily, IoPeopleOutline }) {
  return (
    <div className='shake-hand-container'>
      <img className='shake-hand' src={ShakeHand} alt="ShakeHands" />
      <h4 className='shake-hand-header'>Track Your Mental Health <br />and Discover Happiness</h4>
      <button className='app-btn'>
        <IoLogoApple className='apple-icon' />
        <a className='play-store' href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          Download App
        </a>
      </button>
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
        <IoPeopleOutline className='people-icon' />
      </div>
    </div>
  );
}
