import React from "react";
import Cards from "./Cards";
import "./Cards.css";

const CardGrid = () => {
  return (
    <div className="card-container">
      {Array.from({ length: 9 }).map((_, index) => (
        <Cards key={index} />
      ))}
    </div>
  );
};

export default CardGrid;
