import React from 'react';
import './imgjob.css'; 
import Emp from "../images/jobseek.png"

function ImageWithText() {
  return (
    <div className="image-container">
      <img src={ Emp } alt="Background" /> {/* Replace with your image path */}
      <div className="text-overlay">
        <p className="employer-text">Jobseeker</p>
        <h1 className="candidate-text">CANDIDATE LIST</h1>
      </div>
    </div>
  );
}

export default ImageWithText;
