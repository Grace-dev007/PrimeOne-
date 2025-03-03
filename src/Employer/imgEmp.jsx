import React from 'react';
import './imgEmp.css'; 
import Emp from "../images/empimg.png"

function ImageWithText() {
  return (
    <div className="image-container">
      <img src={ Emp } alt="Background" />
      <div className="text-overlay">
        <p className="employer-text">Employer</p>
        <h1 className="candidate-text">CANDIDATE LIST</h1>
      </div>
    </div>
  );
}

export default ImageWithText;
