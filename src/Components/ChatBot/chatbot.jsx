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
    </>
  )
}




