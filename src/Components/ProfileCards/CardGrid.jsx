

import React, { useState } from "react";
import Card from "./Cards";
import "./Cards.css";
import John from "../../Assests/John.jpeg";
import Jane from "../../Assests/Jane.jpeg";
import Mark from "../../Assests/Mark.jpeg";
import Emily from "../../Assests/Emily.jpeg";
import Sarah from "../../Assests/Sarah.jpeg";
import Michael from "../../Assests/Michael.jpeg";
import Linda from "../../Assests/Linda.jpeg";
import William from "../../Assests/William.jpeg";
import Lisa from "../../Assests/Lisa.jpeg";
import Messi from "../../Assests/Messi.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
      {/*
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={handlePrevious}>
          <IoIosArrowBack />
        </button>
        <Card
          name={doctors[currentIndex].name}
          role={doctors[currentIndex].role}
          description={doctors[currentIndex].description}
          image={doctors[currentIndex].image}
        />
        <button className="arrow right-arrow" onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>
      */}

      <div className="quote">
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
    </>
  );
};

export default CardGrid;
