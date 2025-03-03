import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const validationErrors = validate();
    //     if (Object.keys(validationErrors).length > 0) {
    //         setErrors(validationErrors);
    //     } else {
    //         console.log('Login successful:', { email, password});
    //         alert('Login Successful!');
    //     }
    // };
    

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
const handleRegisterClick = () => {
    navigate('/register'); // Redirect to /register route
};

    return (

        
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {/* <div className="extra-options">
                <div className="remember-me">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember Me
                    </label>
                </div>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </div> */}

            <button type="submit">Login</button> <br/><br/>
            <button type="button" onClick={handleRegisterClick}>Register</button>
        </form>
    );
};


