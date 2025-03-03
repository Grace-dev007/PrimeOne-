import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import Employer from './Employer/Emp';
import Jobseeker from './Jobseeker/Jobs';
import Employerlogin from './Employer/Empform/empform';
import EmployerRegister from './Employer/Empform/empreg';


function Routerform() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/employer' element={ <Employer /> } />
                <Route path='/jobseeker' element={ <Jobseeker /> } />
                <Route path='/emplogin' element={ < Employerlogin /> } />
                <Route path='/empregister' element={< EmployerRegister /> } />        
            </Routes>
        </Router>
    )
}

export default Routerform;