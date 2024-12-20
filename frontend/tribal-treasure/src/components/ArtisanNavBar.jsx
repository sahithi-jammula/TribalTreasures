import React from 'react';
import '../styles/artisannavbar.css';
import { Link ,Route,Routes, useLocation} from 'react-router-dom';

export default function ArtisanNavBar() {

  const location = useLocation();
    
  return (
    <>
    
    <div className="artisan-sidebar">
      <h1>Tribal Treasure</h1>
      <Link to="/artisanhome">Home</Link>
      <Link to="/artisan/addproduct">Add Product</Link>
      <Link to="/artisan/viewallproducts">View All Products</Link>
      {/* <Link to="/artisan/deleteproduct">Delete Product</Link> */}
      {/* <Link to="/artisan/updateProduct">Update Product</Link> */}
      <Link to="/artisan/aboutus">About Us</Link>
      <Link to="/artisan/contactus">Contact Us</Link>
      <Link to='/artisan/profile'>Profile</Link>

      <div className="artisan-auth-buttons">
        <Link to="/artisanlogout">Log Out</Link>
      </div>
    </div>



</>
  );
}
