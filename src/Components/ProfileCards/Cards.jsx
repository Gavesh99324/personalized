import React from "react";
import F_Doctor from "../../Assests/F_Doctor.png";
import "./Cards.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="user-image-container">
          <img src={F_Doctor} alt="user" className="user-image" />
        </div>
      </div>
      <div className="card-content">
        <div className="user-details">
          <h3 className="user-name">John Doe</h3>
          <p className="user-role">React Developer</p>
        </div>
        <p className="user-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="social-icons">
          <span className="icon twitter-icon">
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span className="icon behance-icon">
            <i className="fa-brands fa-behance"></i>
          </span>
          <span className="icon linkedin-icon">
            <i className="fa-brands fa-linkedin-in"></i>
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
