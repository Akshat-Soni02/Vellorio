import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element = {<LandingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
