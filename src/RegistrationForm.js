import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

export default function RegistrationForm() {
    const [type, setType] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!type) {
            errors.name = 'User type cannot be blank.';
        }

        if (!name) {
            errors.name = 'User Name cannot be blank.';
        }

        if (!email) {
            errors.email = 'User Email cannot be blank.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        if (!contactNumber) {
            errors.contactNumber = 'User Phone cannot be blank.';
        } else if (!/^\d{10}$/.test(contactNumber)) {
            errors.contactNumber = 'Contact number must be 10 digits';
        }

        if (!companyName) {
            errors.companyName = 'Company name is required';
        }

        if (!password) {
            errors.password = 'User Password cannot be blank.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm Password cannot be blank.';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form from reloading the page
        const validationErrors = validate();  // Validate the form data
    
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);  // If there are validation errors, show them
        } else {
            // Data to be sent to the backend (API)
            const userData = {
                type,
                name,
                email,
                contactNumber,
                companyName,
                password
            };
    
            try {
                // Sending a POST request to the backend API to register the user using axios
                const response = await axios.post('http://192.168.0.27:4000/api/user/register', userData);
    
                // If the registration is successful, show a success message
                alert('Registration Successful!');
                console.log('Registration successful:', response.data);
            } catch (error) {
                // If the request fails (error status or network issue)
                if (error.response) {
                    // The request was made and the server responded with a status other than 2xx
                    console.error('Error response:', error.response.data);
                    alert(`Error: ${error.response.data.message || 'An error occurred'}`);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Error request:', error.request);
                    alert('No response received from the server');
                } else {
                    // Something happened while setting up the request
                    console.error('Error message:', error.message);
                    alert('An error occurred while trying to registered');
                }
            }
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <label>type</label>
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                {errors.type && <p className="error">{errors.type}</p>}
            </div>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
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
                <label>Contact Number</label>
                <input
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />
                {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
            </div>
            <div>
                <label>Company Name</label>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                {errors.companyName && <p className="error">{errors.companyName}</p>}
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
            <div>
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

