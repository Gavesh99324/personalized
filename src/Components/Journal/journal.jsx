import React from 'react';
import './Journal.css';
import Appointment from '../../Assests/Appointment.jpg';
import Doc from '../../Assests/Doc.jpg';

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
      </div>
    </>
  );
}
