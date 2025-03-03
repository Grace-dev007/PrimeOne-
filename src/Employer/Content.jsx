import React from 'react';
import './content.css';
import SearchIcon from '@mui/icons-material/Search';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';

function ContentWithButtons() {
        const navigate = useNavigate(); // Get the navigate function
      
        const handleLoginClick = () => {
          navigate('/emplogin'); // Navigate to the login page
        };

        const handleRegisterClick = () => {
            navigate('/empregister')
        }

  return (
    <div className="container">
      <div className="content-container">
        <div className="content-item">
          <SearchIcon className="content-icon" />
          <p>Search for suitable candidates and choose directly in this portal.</p>
        </div>
        <div className="content-item">
          <UploadFileIcon className="content-icon" />
          <p>Submit your requirement, we post in our portal for job seekers to respond.</p>
        </div>
        <div className="content-item">
          <NotificationsActiveIcon className="content-icon" />
          <p>Create Candidate Alert, to receive suitable candidates in your inbox.</p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="login-button" onClick={handleLoginClick}>LOGIN</button>
        <button className="register-button" onClick={handleRegisterClick}>REGISTER</button>
      </div>
    </div>
  );
}

export default ContentWithButtons;