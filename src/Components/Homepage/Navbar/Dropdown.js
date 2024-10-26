// Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {
  const dropdownItems = [
    { title: 'Mood Tracking', url: '/mood-tracking' },
    { title: 'Guided Exercises', url: '/guided-exercises' },
    { title: 'Journaling', url: '/journaling' },
    { title: 'AI-Powered Insights', url: '/ai-insights' },
    { title: 'Resource Library', url: '/resource-library' }
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

