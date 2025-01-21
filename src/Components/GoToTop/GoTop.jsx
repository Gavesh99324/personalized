import React from 'react';
import './GoTop.css';
import { BiSolidUpArrowSquare } from "react-icons/bi";

export default function GoTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="GoTop" onClick={scrollToTop}>
      <BiSolidUpArrowSquare className="icon" />
    </div>
  );
}

