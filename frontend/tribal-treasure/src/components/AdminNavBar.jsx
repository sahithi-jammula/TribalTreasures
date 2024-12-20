import React from 'react';
import '../styles/adminnavbar.css';
import { Link ,Route,Routes, useLocation} from 'react-router-dom';

export default function AdminNavBar() {

  const location = useLocation();
    
  return (
    <>
    
    <div className="admin-sidebar">
      <h1>Tribal Treasure</h1>
      <Link to="/adminhome">Home</Link>
      <Link to="/admin/addartisan">Add Artisan</Link>
      <Link to="/admin/viewallartisans">View All Artisans</Link>
      <Link to="/admin/deleteartisan">Delete Artisan</Link>
      <Link to="/admin/updateartisan">Update Artisan</Link>
      <Link to="/admin/viewallproducts">View All Products</Link>
      {/* <Link to="/admin/deleteproduct">Delete Product</Link> */}
      {/* <Link to="/admin/updateproduct">Update Product</Link> */}
      <Link to="/admin/viewallcustomers">View All Customers</Link>
      <Link to="/admin/deletecustomer">Delete Customer</Link>
      <Link to="/admin/updatecustomer">Update Customer</Link>

      <div className="admin-auth-buttons">
        <button className="signup-btn"><Link to="/"><i className="fas fa-phone"></i>Log Out</Link></button>
      </div>
    </div>



</>
  );
}
