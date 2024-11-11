
import React from "react";
import Card from "./Cards"; // Import the Card component
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


// Array of doctor profiles
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

// Component to render a grid of doctor cards
const CardGrid = () => {
  return (
    <div className="card-container">
      {doctors.map((doctor, index) => (
        <Card 
          key={index} 
          name={doctor.name} 
          role={doctor.role} 
          description={doctor.description}
          image={doctor.image} 
        />
      ))}
    </div>
  );
};

export default CardGrid;




