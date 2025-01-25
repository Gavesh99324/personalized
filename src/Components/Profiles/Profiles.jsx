
/*

import React, { useEffect, useState } from 'react';
import './Profiles.css';

export default function Profiles() {
  const [text, setText] = useState(''); // State to hold the current text
  const fullText = ''; // The full text to display

  useEffect(() => {
    let index = 0; // To keep track of the current index
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Update text with the current substring
        index++;
      } else {
        clearInterval(interval); // Clear the interval when done
      }
    }, 150); // Adjust the speed here (150 ms per character)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className='profiles'>
      <h1 className='title'>{text}</h1> 
    </div>
  );
}
  

 */











