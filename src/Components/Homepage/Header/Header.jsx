/*
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
        <ul>Individual Therapy</ul>
        <ul>Group Counseling</ul>
        <ul>Stress Management</ul>
        <ul>Anxiety & Depression</ul>
      </div>
    </div>
    </>
  );
}

*/


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
            <li><IoPersonOutline /> Individual Therapy</li>
            <li><RiGroupLine /> Group Counseling</li>
            <li><FaStreetView /> Stress Management</li>
            <li><TbLeaf /> Anxiety & Depression</li>
          </ul>
        </div>
      </div>
    </>
  );
}




