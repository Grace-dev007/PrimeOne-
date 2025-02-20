import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './App.css';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="app-container">
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            {isLogin ? <LoginForm /> : <RegistrationForm />}<br></br>
            <button className="toggle-button" onClick={toggleForm}>
                {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default App;
