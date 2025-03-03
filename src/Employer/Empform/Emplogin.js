import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [rememberMe, setRememberMe] = useState(false); // New state for Remember Me
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    try {
        const response = await axios.post('http://192.168.0.27:4000/api/user/login', {
            email,
            password
        });

        console.log('Login successful:', response.data);

        alert('Login Successful!');
     
    } catch (error) {

        console.error('Login error:', error.response || error.message);
        alert('Login failed! Please check your credentials.');
    }
};

const handleLogClick = () => {
  navigate('/emplogin')
}

const handleRegClick = () => {
  navigate('/empregister')
}

  return (
    <div className="login-page">
      <h1>Employer Login</h1>
      <div className="button-container">
        <button className="existing-user-button" onClick={handleLogClick}>EXISTING USER</button>
        <button className="new-user-button" onClick={handleRegClick}>NEW USER</button>
      </div>
      <div className="login-form-container">
        <div className="login-header">
          <h2>LOGIN</h2>
        </div>
        <div className="form-inputs">
          <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address" />
             {errors.email && <p className="error">{errors.email}</p>}
             </div>
             <div>
          <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
              {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button className="login-button" onClick={handleSubmit}>LOGIN</button>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;