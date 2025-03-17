import React from 'react';
import './Journal.css';

export default function AppointmentForm({ Doc }) {
  return (
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
  );
}
