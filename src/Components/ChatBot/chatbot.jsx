/*

import React from 'react';
import './Chatbot.css';
import ContactImg from '../../Assests/ContactImg.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";


export default function Chatbot() {
  return (
    <>
      <div className='contact-img'>
        <img src={ContactImg} alt="contact" />
        <h2 className='contact-title'>Contact Us</h2>
        <h4 className='contact-subtitle'>Connect with Us, Your Support Awaits</h4>
      </div>

      <div className="details-section">
        <div className='details-container'>
          <h3 className='details-header'>Seamless Communication, <br />Global Impact.</h3>

          <div className='cards'>
            <h5 className='address-header'>{<IoLocationOutline className='address-icon'/>}Head Office</h5>
            <p className='address-text'>P.O. Box 854, Sir Marcus Fernando Mw.,<br />Colombo 07</p>
          </div>
          <div className='cards'>
            <h5 className='email-header'>{<MdOutlineEmail className='email-icon'/>}Email Us</h5>
            <p className='email-text'>support@yourdomain.tld <br />hello@yourdomain.tld</p>
          </div>
          <div className='cards'>
            <h5 className='telephone-header'>{<MdOutlinePhoneInTalk className='phone-icon'/>}Let's Talk</h5>
            <p className='telephone-text'>Phone: +94 11 222 3333 <br />Fax: +94 11 222 4444</p>
          </div>
        </div>

        <div className="send-message-container">
          <h3>Send us a message</h3>
          <div className="name-container">
            <div>
              <h5>Name</h5>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <h5>Phone</h5>
              <input type="tel" placeholder="Phone" />
            </div>
          </div>
          <div className="email-container">
            <h5>Email</h5>
            <input type="email" placeholder="Email" />
          </div>
          <div className="msg-container">
            <h5>Message</h5>
            <textarea className='message-area' placeholder="Message"></textarea>
          </div>
          <div className="button-container">
            <button className='appointment-button'>{<MdOutlineEmail className='appointment-icon'/>}Send Message</button>
          </div>
        </div>
      </div>

      <div className='map-section'>
        <h3>Our Location</h3>
        <div className='map-container'>
          <div id="map" style={{ width: "100%", height: "400px" }}></div>
          
        </div>
      </div>

      <div className='social-media-section'>
        <h3>Connect With Us</h3>
        <div className='social-media-container'>
          Social media icons 
        </div>
      </div>

      <div className='back-to-top'>
        <a href="#home"><span></span>Back to Top</a>
      </div>

      <div className='chatbot'>
        
      </div>

    </>
  );
}

*/


import React, { useEffect } from 'react';
import './Chatbot.css';
import ContactImg from '../../Assests/ContactImg.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";

export default function Chatbot() {
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src =  `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    window.initMap = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 6.9271, lng: 79.8612 }, // Colombo, Sri Lanka
        zoom: 15,
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <>
      <div className='contact-img'>
        <img src={ContactImg} alt="contact" />
        <h2 className='contact-title'>Contact Us</h2>
        <h4 className='contact-subtitle'>Connect with Us, Your Support Awaits</h4>
      </div>

      <div className="details-section">
        <div className='details-container'>
          <h3 className='details-header'>Seamless Communication, <br />Global Impact.</h3>

          <div className='cards'>
            <h5 className='address-header'><IoLocationOutline className='address-icon'/> Head Office</h5>
            <p className='address-text'>P.O. Box 854, Sir Marcus Fernando Mw.,<br />Colombo 07</p>
          </div>
          <div className='cards'>
            <h5 className='email-header'><MdOutlineEmail className='email-icon'/> Email Us</h5>
            <p className='email-text'>support@yourdomain.tld <br />hello@yourdomain.tld</p>
          </div>
          <div className='cards'>
            <h5 className='telephone-header'><MdOutlinePhoneInTalk className='phone-icon'/> Let's Talk</h5>
            <p className='telephone-text'>Phone: +94 11 222 3333 <br />Fax: +94 11 222 4444</p>
          </div>
        </div>

        <div className="send-message-container">
          <h3>Send us a message</h3>
          <div className="name-container">
            <div>
              <h5>Name</h5>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <h5>Phone</h5>
              <input type="tel" placeholder="Phone" />
            </div>
          </div>
          <div className="email-container">
            <h5>Email</h5>
            <input type="email" placeholder="Email" />
          </div>
          <div className="msg-container">
            <h5>Message</h5>
            <textarea className='message-area' placeholder="Message"></textarea>
          </div>
          <div className="button-container">
            <button className='appointment-button'><MdOutlineEmail className='appointment-icon'/> Send Message</button>
          </div>
        </div>
      </div>

      <div className='map-section'>
        <h3>Our Location</h3>
        <div className='map-container'>
          <div id="map" style={{ width: "100%", height: "400px" }}></div>
        </div>
      </div>

      <div className='social-media-section'>
        <h3>Connect With Us</h3>
        <div className='social-media-container'>
          {/* Social media icons */}
        </div>
      </div>

      <div className='back-to-top'>
        <a href="#home"><span></span>Back to Top</a>
      </div>

      <div className='chatbot'>
        {/* Chatbot goes here */}
      </div>
    </>
  );
}








