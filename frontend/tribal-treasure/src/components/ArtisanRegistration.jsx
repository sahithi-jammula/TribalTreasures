import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/artisanlogin.css";

function ArtisanRegistration() {
  const [formData, setFormData] = useState({
    aafname: "",
    aalname: "",
    aausername: "",
    aadob: "",
    aagender: "",
    aaemail: "",
    aaphonenumber: "",
    aapassword: "",
    aaaddress: "",
    aaskills: "",
    aashopName: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  // Helper functions for validation
  const isOnlyLetters = (value) => /^[A-Za-z\s]+$/.test(value);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (value) => /^[6-9]\d{9}$/.test(value);


  const validatePasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)) return "Strong";
    return "Moderate";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update password strength dynamically
    if (name === "aapassword") {
      const strength = validatePasswordStrength(value);
      setPasswordStrength(strength);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!isOnlyLetters(formData.aafname)) {
      toast.error("First Name must contain only letters.");
      return false;
    }

    if (!isOnlyLetters(formData.aalname)) {
      toast.error("Last Name must contain only letters.");
      return false;
    }

    if (formData.aausername.trim().length < 4) {
      toast.error("Username must be at least 4 characters long.");
      return false;
    }

    if (!isValidEmail(formData.aaemail)) {
      toast.error("Invalid email format. Please enter a valid email.");
      return false;
    }

    if (!isValidPhone(formData.aaphonenumber)) {
      toast.error("Phone Number must be 10 digits and start with 6, 7, 8, or 9.");
      return false;
    }

    if (passwordStrength === "Weak") {
      toast.error(
        "Password is too weak! Use at least 6 characters, including upper/lower case and numbers."
      );
      return false;
    }

    if (formData.aadob === "") {
      toast.error("Date of Birth is required.");
      return false;
    }

    if (formData.aagender === "") {
      toast.error("Please select a gender.");
      return false;
    }

    if (formData.aaaddress.trim().length < 10) {
      toast.error("Address must be at least 10 characters long.");
      return false;
    }

    if (formData.aaskills.trim() === "") {
      toast.error("Skills field cannot be empty.");
      return false;
    }

    if (formData.aashopName.trim() === "") {
      toast.error("Shop Name cannot be empty.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("https://impartial-surprise-production-2ca1.up.railway.app/insertartisan", formData);
      if (response.status === 200) {
        toast.success(response.data || "Artisan added successfully!");
        setFormData({
          aafname: "",
          aalname: "",
          aausername: "",
          aadob: "",
          aagender: "",
          aaemail: "",
          aaphonenumber: "",
          aapassword: "",
          aaaddress: "",
          aaskills: "",
          aashopName: "",
        });
        setPasswordStrength("");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while adding the artisan.");
    }
  };

  return (
    <div className="artisan">
<ToastContainer
    position="top-right"
    autoClose={3000}
    className="custom-toast-container"
    toastClassName="custom-toast"
/>
      <div className="container">
        <h1>Add Artisan</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="aafname">First Name</label>
          <input
            type="text"
            id="aafname"
            name="aafname"
            value={formData.aafname}
            onChange={handleChange}
            required
          />

          <label htmlFor="aalname">Last Name</label>
          <input
            type="text"
            id="aalname"
            name="aalname"
            value={formData.aalname}
            onChange={handleChange}
            required
          />

          <label htmlFor="aausername">Username</label>
          <input
            type="text"
            id="aausername"
            name="aausername"
            value={formData.aausername}
            onChange={handleChange}
            required
          />

          <label htmlFor="aadob">Date of Birth</label>
          <input
            type="date"
            id="aadob"
            name="aadob"
            value={formData.aadob}
            onChange={handleChange}
            required
          />

          <label htmlFor="aagender">Gender</label>
          <select
            id="aagender"
            name="aagender"
            value={formData.aagender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="aaemail">Email Address</label>
          <input
            type="email"
            id="aaemail"
            name="aaemail"
            value={formData.aaemail}
            onChange={handleChange}
            required
          />

          <label htmlFor="aaphonenumber">Phone Number</label>
          <input
            type="number"
            id="aaphonenumber"
            name="aaphonenumber"
            value={formData.aaphonenumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="aapassword">Password</label>
          <input
            type="password"
            id="aapassword"
            name="aapassword"
            value={formData.aapassword}
            onChange={handleChange}
            required
          />
          <p className={`password-strength ${passwordStrength.toLowerCase()}`} style={{justifySelf:"left"}}>
            Password Strength: {passwordStrength}
          </p>

          <label htmlFor="aaaddress">Address</label>
          <input
            type="text"
            id="aaaddress"
            name="aaaddress"
            value={formData.aaaddress}
            onChange={handleChange}
            required
          />

          <label htmlFor="aaskills">Skills</label>
          <input
            type="text"
            id="aaskills"
            name="aaskills"
            value={formData.aaskills}
            onChange={handleChange}
            required
          />

          <label htmlFor="aashopName">Shop Name</label>
          <input
            type="text"
            id="aashopName"
            name="aashopName"
            value={formData.aashopName}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Artisan</button>
        </form>
      </div>
    </div>
  );
}

export default ArtisanRegistration;
