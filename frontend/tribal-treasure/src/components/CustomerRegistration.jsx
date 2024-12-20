import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/customerlogin.css";

function CustomerRegistration() {
  const [formData, setFormData] = useState({
    cfname: "",
    clname: "",
    cusername: "",
    cdob: "",
    cgender: "",
    cemail: "",
    cphonenumber: "",
    cpassword: "",
    caddress: "",
    confirmPassword: "",
    terms: false
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
    const { name, value, type, checked } = e.target;

    // Update password strength dynamically
    if (name === "cpassword") {
      const strength = validatePasswordStrength(value);
      setPasswordStrength(strength);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const validateForm = () => {
    if (!isOnlyLetters(formData.cfname)) {
      toast.error("First Name must contain only letters.");
      return false;
    }

    if (!isOnlyLetters(formData.clname)) {
      toast.error("Last Name must contain only letters.");
      return false;
    }

    if (formData.cusername.trim().length < 4) {
      toast.error("Username must be at least 4 characters long.");
      return false;
    }

    if (!isValidEmail(formData.cemail)) {
      toast.error("Invalid email format. Please enter a valid email.");
      return false;
    }

    if (!isValidPhone(formData.cphonenumber)) {
      toast.error("Phone Number must be 10 digits and start with 6, 7, 8, or 9.");
      return false;
    }

    if (passwordStrength === "Weak") {
      toast.error(
        "Password is too weak! Use at least 6 characters, including upper/lower case and numbers."
      );
      return false;
    }

    if (formData.cpassword !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    if (formData.cdob === "") {
      toast.error("Date of Birth is required.");
      return false;
    }

    if (formData.cgender === "") {
      toast.error("Please select a gender.");
      return false;
    }

    if (formData.caddress.trim().length < 10) {
      toast.error("Address must be at least 10 characters long.");
      return false;
    }

    if (!formData.terms) {
      toast.error("You must agree to the Terms of Service and Privacy Policy.");
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
      const response = await axios.post("https://impartial-surprise-production-2ca1.up.railway.app/insertcustomer", formData);
      if (response.status === 200) {
        toast.success(response.data || "Account created successfully!");
        // Reset form data
        setFormData({
          cfname: "",
          clname: "",
          cusername: "",
          cdob: "",
          cgender: "",
          cemail: "",
          cphonenumber: "",
          cpassword: "",
          caddress: "",
          confirmPassword: "",
          terms: false
        });
        setPasswordStrength("");
      }
    } catch (error) {
      toast.error(error.response?.data || "An error occurred while creating the account.");
    }
  };

  return (
    <div className="customer">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="custom-toast-container"
        toastClassName="custom-toast"
      />
      <div className="container">
        <h1>Create your account</h1>
        <p>
          Already have an account? <a href="#">Sign in</a>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cfname">First Name</label>
          <input
            type="text"
            id="cfname"
            name="cfname"
            value={formData.cfname}
            onChange={handleChange}
            required
          />

          <label htmlFor="clname">Last Name</label>
          <input
            type="text"
            id="clname"
            name="clname"
            value={formData.clname}
            onChange={handleChange}
            required
          />

          <label htmlFor="cusername">Username</label>
          <input
            type="text"
            id="cusername"
            name="cusername"
            value={formData.cusername}
            onChange={handleChange}
            required
          />

          <label htmlFor="cdob">Date of Birth</label>
          <input
            type="date"
            id="cdob"
            name="cdob"
            value={formData.cdob}
            onChange={handleChange}
            required
          />

          <label htmlFor="cgender">Gender</label>
          <select
            id="cgender"
            name="cgender"
            value={formData.cgender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="cemail">Email Address</label>
          <input
            type="email"
            id="cemail"
            name="cemail"
            value={formData.cemail}
            onChange={handleChange}
            required
          />

          <label htmlFor="cphonenumber">Phone Number</label>
          <input
            type="number"
            id="cphonenumber"
            name="cphonenumber"
            value={formData.cphonenumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="cpassword">Password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />
          <p className={`password-strength ${passwordStrength.toLowerCase()}`} style={{justifySelf:"left"}}>
            Password Strength: {passwordStrength}
          </p>

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label htmlFor="caddress">Address</label>
          <input
            type="text"
            id="caddress"
            name="caddress"
            value={formData.caddress}
            onChange={handleChange}
            required
          />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerRegistration;