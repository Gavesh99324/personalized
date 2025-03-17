import React from 'react';
import { PiArrowSquareInThin } from "react-icons/pi";


import './Journal.css';

export default function MediaCard({ Anxity, Therapy, EMDR }) {
  return (
    <div className="med-images">
      <div className="image-cont">
        <button className="overlay-button">
          <span className="line1">Overcoming Anxiety</span>
          <span className="line2">Through Mindfulness</span>
          <PiArrowSquareInThin className='arrow-icon' />
        </button>
        <img className="med1" src={Anxity} alt="anxity" />
      </div>
      <div className="image-cont">
        <button className="overlay-button">
          <span className="line1">Managing Depression</span>
          <span className="line2">With Therapy</span>
          <PiArrowSquareInThin className='arrow-icon' />
        </button>
        <img className="med2" src={Therapy} alt="therapy" />
      </div>
      <div className="image-cont">
        <button className="overlay-button">
          <span className="line1">Healing from Trauma</span>
          <span className="line2">Through EMDR</span>
          <PiArrowSquareInThin className='arrow-icon' />
        </button>
        <img className="med3" src={EMDR} alt="emdr" />
      </div>
    </div>
  );
}
