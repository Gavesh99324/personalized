
import React from 'react';
import F_Doctor from '../../../Assests/F_Doctor.png';
import './Header.css';
import { IoPersonOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { FaStreetView } from "react-icons/fa";
import { TbLeaf } from "react-icons/tb";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <img className="Doctor-image" src={F_Doctor} alt="Header" />
        <div className="mission-statement">
          <h2>Mission</h2>
          <p>
            "To provide comprehensive and evidence-based Mental Health Services appropriate to the local context through state-of-the-art approaches to patient care, capacity building, advocacy, community engagement, multi-sector collaboration, and research delivered by competent and reliable staff."
          </p>
        </div>
      </div>
      <div>
        <div className="header-content">
          <h1>Welcome to Our Mental Health Centre</h1>
          <p>
            At our Mental Health Centre, we strive to provide exceptional mental health services to our clients, ensuring they receive the support and resources they need to live healthy, fulfilling their dreams, and thriving in the world around them.
          </p>
          <ul className='header-list'>
            <li>
              <div className="item-name">
                <IoPersonOutline /> Individual Therapy 
              </div>
              <p>Personalized sessions focusing on the unique challenges and goals of each individual.</p>
            </li>
            <li>
              <div className="item-name">
                <RiGroupLine /> Group Counseling
              </div>
              <p>A supportive environment where individuals share and learn from others with similar experiences.</p>
            </li>
            <li>
              <div className="item-name">
                <FaStreetView /> Stress Management
              </div>
              <p>Strategies and techniques to manage and reduce stress for a healthier lifestyle.</p>
            </li>
            <li>
              <div className="item-name">
                <TbLeaf /> Anxiety & Depression
              </div>
              <p>Comprehensive support to help manage and overcome symptoms of anxiety and depression.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

