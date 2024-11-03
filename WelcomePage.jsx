import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BgVideo from '../../Addition/Bgvideo'; // Background video component
import './WelcomePage.css'; // Styles for WelcomePage

const WelcomePage = () => {

  return (
    
    <div className="welcome-page">
      <BgVideo /> 
      <div className="logo-container">
        <img src="/TrippingsLogo.png" alt="Logo" className="logo-image" />
      </div>
 
      <div className="welcome-content">
         
        <div className="w-content">
          <p className="small-text">WELCOME TO</p>
          <h1 className="main-text">TRIPPINGS</h1>
          <p className="tagline">WHERE ALL YOUR DRAWINGS CAN COME TRUE</p>
        </div>
        <Link to="/learnmore" className="learn-more-btn">
          LEARN MORE
        </Link>
      </div>
      
    </div>
  );
};

export default WelcomePage;