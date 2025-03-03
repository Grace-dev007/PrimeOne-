import React from 'react';
import './Navbar.css';
import EmailIcon from '@mui/icons-material/Email'; 
import primeLogo from '../images/prime.png';// Import the CSS style file
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/employer')
  };

  const handleJobClick = () => {
    navigate('/jobseeker')
  };
  
  return (
    <nav className="navbar">
      <div className="logo">
      <a href="/">
      <img src={primeLogo} alt="Primejobs Logo" /> {/* Replace with your logo image path */}
      </a>
      </div>
      <div className="contact">
        <a href="mailto:info@primeljobs.com">
          <EmailIcon /> {/* Replace with your email icon path */}
                 info@prime1jobs.com
        </a>
      </div>
      <div className="buttons">
        <button className="employer-button" onClick={handleClick}>EMPLOYER</button>
        <button className="jobseeker-button" onClick={handleJobClick}>JOBSEEKER</button>
      </div>
    </nav>
  );
}

export default Navbar;


