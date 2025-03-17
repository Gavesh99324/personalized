import React from 'react';
import './Journal.css';

export default function SearchBar({ IoSearch }) {
  return (
    <>
      <div className='search-bar'>
        <h4>How can we help you?</h4>
      </div>
      <div className="search-wrapper">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">
            <IoSearch />
          </button>
        </div>
      </div>
    </>
  );
}
