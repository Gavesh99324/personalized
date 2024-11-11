
import React from "react";
import Card from "./Cards"; // Import the Card component
import "./Cards.css";

// Array of doctor profiles
const doctors = [
  { name: "Dr. John Doe", role: "Cardiologist", description: "Expert in cardiovascular health." },
  { name: "Dr. Jane Smith", role: "Dermatologist", description: "Specialist in skin conditions and treatment." },
  { name: "Dr. Mark Lee", role: "Orthopedic Surgeon", description: "Focused on musculoskeletal issues." },
  { name: "Dr. Emily Clark", role: "Pediatrician", description: "Dedicated to child and adolescent health." },
  { name: "Dr. Sarah Johnson", role: "Neurologist", description: "Specializes in neurological disorders." },
  { name: "Dr. Michael Brown", role: "Oncologist", description: "Experienced in cancer treatment and care." },
  { name: "Dr. Linda Davis", role: "Psychiatrist", description: "Mental health expert for various disorders." },
  { name: "Dr. William Garcia", role: "Endocrinologist", description: "Focuses on hormonal and metabolic issues." },
  { name: "Dr. Lisa Martinez", role: "Ophthalmologist", description: "Expert in eye health and vision care." },
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
        />
      ))}
    </div>
  );
};

export default CardGrid;




