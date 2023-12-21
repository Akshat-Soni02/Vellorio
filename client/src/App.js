import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import LoginPage from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signupPage/SignUpPage';
import CreatorProfileCreate from './pages/creator/creatorProfileCreate/CreatorProfileCreate';
import CreatorHomePage from './pages/creator/creatorHomePage/CreatorHomePage';
import ClientHomePage from './pages/buyer/clientHomePage/ClientHomePage';
import CreatorOrders from './pages/creator/creatorOrders/CreatorOrders';
import CreatorGigs from './pages/creator/creatorGigs/CreatorGigs';
import CreatorEarnings from './pages/creator/creatorEarnings/CreatorEarnings';
import CreatorAnalytics from './pages/creator/creatorAnalytics/CreatorAnalytics';
import CreatorContact from './pages/creator/creatorContact/CreatorContact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element = {<LandingPage/>} />
        <Route path='/login' element = {<LoginPage/>} />
        <Route path='/register' element = {<SignUpPage/>} />
        <Route path='/creator/profileCreate' element = {<CreatorProfileCreate/>} />
        <Route path='/creator/DashBoard' element = {<CreatorHomePage/>} />
        <Route path='/creator/Orders' element = {<CreatorOrders/>} />
        <Route path='/creator/Gigs' element = {<CreatorGigs/>} />
        <Route path='/creator/Earnings' element = {<CreatorEarnings/>} />
        <Route path='/creator/Analytics' element = {<CreatorAnalytics/>} />
        <Route path='/creator/Contact' element = {<CreatorContact/>} />
        <Route path='/client/products' element = {<ClientHomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
