import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/signup'];
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <div className="sidebar">
          <h1>Tribal Treasure</h1>
          <Link to="/"><i className="fas fa-home"></i>Home</Link>
          
          <Link to="/aboutus"><i className="fas fa-info-circle"></i>About Us</Link>
          <Link to="/contact"><i className="fas fa-phone"></i>Contact</Link>

          <div className="auth-buttons">
            <button  onClick={handleLoginClick}>
              <Link>Login</Link>
            </button>
            <button >
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal1-content">
            <h2>Select Login Type</h2>
            <button onClick={() => (window.location.href = '/login?type=admin')}>Admin Login</button>
            <button onClick={() => (window.location.href = '/login?type=customer')}>Customer Login</button>
            <button onClick={() => (window.location.href = '/login?type=artisan')}>Artisan Login</button>
            <button style={{backgroundColor: '#a31515',color:' #fff'}} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
