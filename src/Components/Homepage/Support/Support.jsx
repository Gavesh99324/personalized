

import React from 'react';
import './Support.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdPaperPlane } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import BgofHome from '../../../Assests/BgofHome.jpg';

export default function Support() {
  return (
    <div className="support-section">
      <div className="support-header">
        <h2>Step-by-Step Support for Your</h2>
        <h2>Mental Health Journey</h2>
      </div>
      <div className="support-card-container">
        <div className="support-card card-1">
          <IoDocumentTextOutline className="card-icon" />
          <h3 className="card-number">01</h3>
          <h3 className="card-title">Initial Assessment</h3>
        </div>
        <div className="support-card card-2">
          <IoMdPaperPlane className="card-icon" />
          <h3 className="card-number">02</h3>
          <h3 className="card-title">Custom Plan</h3>
        </div>
        <div className="support-card card-3">
          <IoSettingsOutline className="card-icon" />
          <h3 className="card-number">03</h3>
          <h3 className="card-title">Continual Guidance</h3>
        </div>
        <div className="support-card card-4">
          <VscGraph className="card-icon" />
          <h3 className="card-number">04</h3>
          <h3 className="card-title">Monitoring & Growth</h3>
        </div>
      </div>
      <div className="image">
        <img src={BgofHome} alt="Background" className="bg-image" />
        <div className="black-overlay">
          <div className='overlay-text'>
            <h4>Your Journey to Mental</h4>
            <h4>Wellness Starts with Self-Care</h4>
          </div>
          <div className='overlay-paragraph'>
            <p>
              Prioritizing rest, mindfulness, and healthy habits is essential 
              for emotional resilience and well-being
            </p>
          </div>
          <button className='layer-button'>Learn More</button>
        </div>
      </div>
    </div>
  );
}





