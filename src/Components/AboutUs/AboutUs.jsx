import React from 'react';
import Appointment from '../../Assests/Appointment.jpg';

export default function AboutUs() {
  return (
    <div className="about-container">
      <img className="about-image" src={Appointment} alt="Appointment" />
    </div>
  );
}
