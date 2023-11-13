import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import LoginPage from './pages/loginPage/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element = {<LandingPage/>} />
        <Route path='/login' element = {<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
