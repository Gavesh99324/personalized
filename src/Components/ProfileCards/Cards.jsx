
import React from "react";
import "./Cards.css";
import { CiFacebook } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

// Component to render a single doctor card
const Card = ({ name, role, description, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="user-image-container">
          <img src={image} alt="user" className="user-image" />
        </div>
      </div>
      <div className="card-content">
        <div className="user-details">
          <h3 className="user-name">{name}</h3>
          <p className="user-role">{role}</p>
        </div>
        <p className="user-description">{description}</p>
        <div className="social-icons">
          <span className="icon facebook-icon">
            <CiFacebook size={24} color="#1877F2" />
          </span>
          <span className="icon whatsApp-icon">
            <BsWhatsapp size={24} color="#25D366" />
          </span>
          <span className="icon linkedin-icon">
            <AiFillLinkedin size={24} color="#0A66C2" />
          </span>
        </div>
        <div className="contact-button-container">
          <button className="contact-button">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

