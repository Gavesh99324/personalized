
import React from 'react';
import './Support.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdPaperPlane } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";

export default function Support() {
  return (
    <div className="support-card-container">
      <div className="support-card card-1">
        <IoDocumentTextOutline className="card-icon" />
        <h3 className='card-title'>Initial Assessment</h3>
      </div>
      <div className="support-card card-2">
        <IoMdPaperPlane className="card-icon" />
        <h3 className='card-title'>Custom Plan</h3>
      </div>
      <div className="support-card card-3">
        <IoSettingsOutline className="card-icon" />
        <h3 className='card-title'>Continual Guidance</h3>
      </div>
      <div className="support-card card-4">
        <VscGraph className="card-icon" />
        <h3 className='card-title'>Monitoring & Growth</h3>
      </div>
    </div>
  );
}





