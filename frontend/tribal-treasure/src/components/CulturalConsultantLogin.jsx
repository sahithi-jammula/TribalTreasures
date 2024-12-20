import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import "../styles/culturalconsultantlogin.css"; // Importing the CSS for the login component

import { useNavigate } from "react-router-dom"; // Importing Link from react-router-dom for routing
function CulturalConsultantLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate(); // Using the useNavigate hook from react-router-dom for routing
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
      const response = await axios.post("https://impartial-surprise-production-2ca1.up.railway.app/checkculturalconsultantlogin", formData);
      if (response.status === 200) {
        setMessage("Login successful!");
        navigate('/')
      }
    } catch (error) {
      setMessage("Login failed. Please check your Username and password.");
    }
  };

  return (
    <div className="culturalconsultantlogin">
      <div className="container">
        <img
          alt="Logo"
          height="50"
          src="https://storage.googleapis.com/a1aa/image/sbpng9p6poI2IJAIp4oXaTOHnxjEOFL5etpe8Y5O7VWe9ShnA.jpg"
          width="50"
        />
        <h1>Cultural Consultant Login</h1>
        <h2>Sign in to your account</h2>
       
        
        {/* Display success or error message */}
        {message && <p>{message}</p>}
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="remember-me">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default CulturalConsultantLogin;
