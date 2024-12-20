import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import "../styles/customerlogin.css"; // Importing the CSS for the login component
import { useNavigate } from "react-router-dom"; // Importing Link for routing

function CustomerLogin() {
  const [formData, setFormData] = useState({
    cemail: "",
    cpassword: ""
  });
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  
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
      const response = await axios.post("https://impartial-surprise-production-2ca1.up.railway.app/checkcustomerlogin", formData);
      if (response.status === 200) {
        setMessage("Login successful!");
        const customerInfo = response.data; 
       
        sessionStorage.setItem("customerInfo", JSON.stringify(customerInfo));
        navigate('/customerhome')
      }
    } catch (error) {
      setMessage("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="customerlogin">
      <div className="container">
        <img
          alt="Logo"
          height="50"
          src="https://storage.googleapis.com/a1aa/image/sbpng9p6poI2IJAIp4oXaTOHnxjEOFL5etpe8Y5O7VWe9ShnA.jpg"
          width="50"
        />
        <h1>Customer Login</h1>
        <h2>Sign in to your account</h2>
        <p>
          Or <a href="#">create a new account</a>
        </p>
        
        {/* Display success or error message */}
        {message && <p>{message}</p>}
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            name="cemail"
            value={formData.cemail}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="cpassword"
            value={formData.cpassword}
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

export default CustomerLogin;
