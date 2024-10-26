// Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {
  const dropdownItems = [
    { title: 'Mood Tracking', url: '/' },
    { title: 'Guided Exercises', url: '/journal' },
    { title: 'Journaling', url: '/journal' },
    { title: 'AI-Powered Insights', url: '/Chatbot' },
    { title: 'Resource Library', url: '/journal' }
  ];

  return (
    <ul className="dropdown-menu">
      {dropdownItems.map((item, index) => (
        <li key={index}>
          <Link to={item.url} className="dropdown-link">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

