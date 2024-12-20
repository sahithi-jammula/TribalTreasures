import React from 'react'
import '../styles/customernavbar.css'
import { Link } from 'react-router-dom'
export default function CustomerNavBar() {

  return (
    <>
    
    <div className="customer-sidebar">
      <h1>Tribal Treasure</h1>
      <Link to="/customerhome">Home</Link>
      <Link to="/customer/products">Products</Link>
      <Link to="/customer/artisans">Artisans</Link>
      
      <Link to="/customer/aboutus">About</Link>
      <Link to="/customer/contactus">Contact</Link>
      <Link to='/customer/profile'>Profile</Link>

      <div className="customer-auth-buttons">
        <button className="signup-btn"><Link to="/customerlogout"><i className="fas fa-phone"></i>Log Out</Link></button>
      </div>
    </div>



</>
  )
}
