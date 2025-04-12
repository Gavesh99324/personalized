
import React from 'react';
import Doc_Green from '../../../Assets/Doc_Green.jpg';
import HomeTop from '../../../Assets/HomeTop.jpg';
import './Header.css';
import { IoPersonOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { FaStreetView } from "react-icons/fa";
import { TbLeaf } from "react-icons/tb";
import { motion } from 'framer-motion';


export default function Header() {
  return (
    <>
      <div className="header-container">
          <img className='home-top-image' src={HomeTop} alt="" />
          <motion.h2
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }} 
              className='home-top-title'>
                About Us
          </motion.h2>
          <motion.h6
            initial={{ width: 0 }}
            animate={{ width: 'fit-content' }}
            style={{ translateX: '-50%', translateY: '-50%' }}
            transition={{ duration: 1, ease: 'linear' }} 
            className='home-top-subtitle typing-subtitle'>
              Dedicated to Your Journey of Mental Wellness
          </motion.h6>
      </div>

      <div className="header-content">
        <h5 className='who-we-are'>WHO WE ARE</h5>
        <h1>Empowering Minds, Healing <br />Hearts, Cultivating Peace</h1>
        <div className="content-wrapper">
          <ul className='header-list'>
            <li>
              <div className="item-name">
                <IoPersonOutline /> Individual Therapy 
              </div>
              <p className='item-desc'>Personalized sessions focusing on the unique challenges and goals of each individual.</p>
            </li>
            <li>
              <div className="item-name">
                <RiGroupLine /> Group Counseling
              </div>
              <p className='item-desc'>A supportive environment where individuals share and learn from others with similar experiences.</p>
            </li>
            <li>
              <div className="item-name">
                <FaStreetView /> Stress Management
              </div>
              <p className='item-desc'>Strategies and techniques to manage and reduce stress for a healthier lifestyle.</p>
            </li>
            <li>
              <div className="item-name">
                <TbLeaf /> Anxiety & Depression
              </div>
              <p className='item-desc'>Comprehensive support to help manage and overcome symptoms of anxiety and depression.</p>
            </li>
          </ul>
          
         
          <div className="image-container">
            <img className="Doc-Green-image" src={Doc_Green} alt="Doctor Green" />
            
            
            <div className="overlay">
              <h2>
                <span className="typing-effect">Committed to Nurturing</span>
                <br />
                <span className="typing-effect-line-2">Your Inner Peace</span>
              </h2>
              
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}










