import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import LoginPage from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signupPage/SignUpPage';
import CreatorProfileCreate from './pages/creatorProfileCreate/CreatorProfileCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element = {<LandingPage/>} />
        <Route path='/login' element = {<LoginPage/>} />
        <Route path='/register' element = {<SignUpPage/>} />
        <Route path='/creator/profileCreate' element = {<CreatorProfileCreate/>} />
      </Routes>
    </Router>
  );
}

export default App;
