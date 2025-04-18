
import React, { useState } from "react";
import "./Cards.css";

import John from "../../Assets/John.jpeg";
import Jane from "../../Assets/Jane.jpeg";
import Mark from "../../Assets/Mark.jpeg";
import Emily from "../../Assets/Emily.jpeg";
import Sarah from "../../Assets/Sarah.jpeg";
import Michael from "../../Assets/Michael.jpeg";
import Linda from "../../Assets/Linda.jpeg";
import William from "../../Assets/William.jpeg";
import Lisa from "../../Assets/Lisa.jpeg";
import Messi from "../../Assets/Messi.jpg";
import Ex_Meeting from "../../Assets/Ex_Meeting.jpg";

import { BiPhoneCall } from "react-icons/bi";

const doctors = [
  { name: "Dr. John Doe", role: "Cardiologist", description: "Expert in cardiovascular health.", image: John },
  { name: "Dr. Jane Smith", role: "Dermatologist", description: "Specialist in skin conditions and treatment.", image: Jane },
  { name: "Dr. Mark Lee", role: "Orthopedic Surgeon", description: "Focused on musculoskeletal issues.", image: Mark },
  { name: "Dr. Emily Clark", role: "Pediatrician", description: "Dedicated to child and adolescent health.", image: Emily },
  { name: "Dr. Sarah Johnson", role: "Neurologist", description: "Specializes in neurological disorders.", image: Sarah },
  { name: "Dr. Michael Brown", role: "Oncologist", description: "Experienced in cancer treatment and care.", image: Michael },
  { name: "Dr. Linda Davis", role: "Psychiatrist", description: "Mental health expert for various disorders.", image: Linda },
  { name: "Dr. William Garcia", role: "Endocrinologist", description: "Focuses on hormonal and metabolic issues.", image: William },
  { name: "Dr. Lisa Martinez", role: "Ophthalmologist", description: "Expert in eye health and vision care.", image: Lisa },
];

const CardGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  return (
    <>

      <div className="quote">
        <h4 className="meet-our-team">MEET OUR TEAM</h4>
        <h3 className="quote-text">We talk a lot about hope <br />helping and teamwork</h3>
      </div>

      <div className="grids-container">
        {[
          { name: "Dr. Emma Collins", title: "CLINICAL PSYCHOLOGIST", image: Sarah },
          { name: "Alex Martin", title: "LICENSED THERAPIST", image: John },
          { name: "Dr. Jason Reed", title: "PSYCHIATRIST", image: Messi },
          { name: "Sarah Bennett", title: "MINDFULNESS COACH", image: Linda },
        ].map((person, index) => (
          <div className="grids-item" key={index}>
            <img className="grids-image" src={person.image} alt={person.name} />
            <div className="info">
              <span className="data-name">{person.name}</span>
              <span className="data-title">{person.title}</span>
            </div>
          </div>
        ))}
      </div>


    <div className="contact-experts">

      <div className="left-container-professional">
         <div className="left-contact-text">
            <h3 className="contact-text">Caring Professional, Here to <br /> Support You. </h3>
            <p className="contact-para"> "Pain itself is very important, it is followed by the greatest care. As the elite said, 
               constraints and problems of the body, the pain of the lion." 
            </p>
         </div>
          
          <div className="two-contact">
             <div className="contact-first">
                <h3>Licensed and Experienced Experts</h3>
             </div>
             <div className="contact-second">
                <h3>Holistic and <br /> Evidence based <br />Practices</h3>
             </div>
          </div>
          
      </div>

      <div className="right-container-professional">
         <div className="right-contact-image">
            <img className="contact-professional-image" src={Ex_Meeting} alt="Emily" />
            <div className="telephone-container">
              {BiPhoneCall && <BiPhoneCall className="telephone-icon" />}
              <h3 className="quote">Need more help?</h3>
              <a href="tel:88840002424" className="telephone-num">(888) 4000-2424</a>
            </div>
         </div>
      </div>
      
    </div>
      

    </>
  );
};

export default CardGrid;






