import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import "../styles/adminlogin.css"; // Importing the CSS for the login component
import { useNavigate } from "react-router-dom"; // Importing Link for routing

function AdminLogin() {
  const [formData, setFormData] = useState({
    ausername: "",
    apassword: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post("https://impartial-surprise-production-2ca1.up.railway.app/checkadminlogin", formData);
      if (response.status === 200) {
        setMessage("Login successful!");
        navigate('/adminhome')
      }
    } catch (error) {
      setMessage("Login failed. Please check your Username and password.");
    }
  };

  return (
    <div className="admin">
      <div className="container">
        <img
          alt="Logo"
          height="50"
          src="https://storage.googleapis.com/a1aa/image/sbpng9p6poI2IJAIp4oXaTOHnxjEOFL5etpe8Y5O7VWe9ShnA.jpg"
          width="50"
        />
        <h1>Admin Login</h1>
        <h2>Sign in to your account</h2>
       
        
        {/* Display success or error message */}
        {message && <p>{message}</p>}
        
        <form onSubmit={handleSubmit}>
          <input  
            type="text"
            placeholder="Username"
            name="ausername"
            value={formData.ausername}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="apassword"
            value={formData.apassword}
            onChange={handleChange}
            required
          />
          <div className="remember-me">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
