

import React from 'react';
import './PrivacyPolicyPopup.css';

const PrivacyPolicyPopup = ({ isVisible, closePopup }) => {
  if (!isVisible) return null; // Return null if not visible

  return (
    <div className="privacy-popup">
      <div className="privacy-content">
        <h3>Privacy & Terms</h3>
        <p>
          By using this site, you agree to our Privacy Policy and Terms of Service. We use cookies to improve your experience on our site.
        </p>
        {/* Close icon to hide the popup */}
        <button onClick={closePopup} className="close-icon">✖</button>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;


