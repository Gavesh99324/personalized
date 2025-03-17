import React from 'react';

import './Journal.css';

export default function DetailCard({ icon, title, information }) {
  return (
    <div className='detail-card'>
      <h6 className='detail-card-title'>{icon} {title}</h6>
      <p className='detail-card-info'>{information}</p>
    </div>
  );
}
