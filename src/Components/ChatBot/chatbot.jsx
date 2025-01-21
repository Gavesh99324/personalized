import React from 'react'
import './Chatbot.css'
import ContactImg from '../../Assests/ContactImg.jpg'

export default function Chatbot() {
  return (
    <>
    <div>
      <div className='contact-img'>
        <img src={ContactImg} alt="contact" />
        <h2 className='contact-title'>Contact Us</h2>
        <h4 className='contact-subtitle'>Connect with Us, Your Support Awaits</h4>
      </div>
    </div>
      
    <div className='details-container'>
      <h3 className='details-header'>Seamless Communication, <br />Global Impact.</h3>

      <div className='card'>
        <h5 className='address-header'>Head Office</h5>
        <p className='address-text'>P.O. Box 854, Sir Marcus Fernando Mw.,<br /> Colombo 07</p>
      </div>
      <div className='card'>
        <h5 className='email-header'>Email Us</h5>
        <p className='email-text'>support@yourdomain.tld <br />hello@yourdomain.tld</p>
      </div>
      <div className='card'>
        <h5 className='telephone-header'>Let's Talk</h5>
        <p className='telephone-text'>phone: +94 11 222 3333 <br />Fax: +94 11 222 4444</p>
      </div>

    </div>

    </>
  )
}








