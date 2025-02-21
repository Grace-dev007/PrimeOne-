import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';  // Your registration form
import LoginForm from './LoginForm';  
import './App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default App;
