import React from 'react';
import F_Doctor from '../../../Assests/F_Doctor.png';
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <img className="Doctor-image" src={F_Doctor} alt="Header" />
      <div className="mission-statement">
        <h2>Mission</h2>
        <p>
          "To provide comprehensive and evidence-based Health Services appropriate to the local context through state-of-the-art approaches to patient care, capacity building, advocacy, community engagement, multi-sector collaboration, and research delivered by competent and reliable staff."
        </p>
      </div>
    </div>
  );
}



