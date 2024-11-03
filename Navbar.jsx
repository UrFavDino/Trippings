import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import NotificationModal from '../Addition/NotificationModal';
import '../Addition/Navbar.css';


const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked); // Toggle the clicked state
  };

  const resetButtonState = () => {
    setIsClicked(false); // Reset the clicked state
  };

  return (
    <header className={`header`}>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
      <div className="logo">
        <img src="TrippingsLogo.png" alt="Logo" />
        Trippings
      </div>
      <div className="navigation-hp">
        <Link to='/HomePage' className='home-link'>Home</Link>
        <Link to='/travel'>Travel Guides</Link>
        <Link to='/itineraries'>My Itineraries</Link>
      </div>

      <div className="notification-button">
        <button 
          type="button" 
          className={`btn ${isClicked ? 'active' : ''}`} // Add 'active' class if clicked
          data-bs-toggle="modal" 
          data-bs-target="#notificationModal"
          aria-label="Notifications"
          onClick={handleButtonClick} // Call the click handler
        >
          <i class="bi bi-bell-fill"></i>
        </button>
      </div>

      {/* Include the NotificationModal component, passing reset function */}
      <NotificationModal onClose={resetButtonState} />
    
    </header>
  );
};

export default Navbar;
