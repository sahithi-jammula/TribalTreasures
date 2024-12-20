import React, { useState } from "react";
import axios from "axios";
import "../styles/addproduct.css";

import ArtisanNavBar from './ArtisanNavBar';

function ArtisanAddProduct() {
  const [formData, setFormData] = useState({
    pname: "",
    pdescription: "",
    pprice: "",
    pcategory: "",
    pimage: null,
    pisActive: true,
    prating: "",
  });

  const artisanInfo = JSON.parse(sessionStorage.getItem("artisanInfo"));
  const artisanId = artisanInfo?.aaid;

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      pimage: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
  
    // Append JSON data as a string
    formDataToSend.append(
      "productData",
      new Blob([JSON.stringify({
        pname: formData.pname,
        pdescription: formData.pdescription,
        pprice: formData.pprice,
        pcategory: formData.pcategory,
        pisActive: formData.pisActive,
        prating: formData.prating,
        aid: artisanId,
      })], { type: "application/json" })
    );
    
  
    // Append the file
    if (formData.pimage) {
      formDataToSend.append("file", formData.pimage);
    }
  
    try {
      const response = await axios.post(
        "https://impartial-surprise-production-2ca1.up.railway.app/insertproduct",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 201) {
        setMessage("Product added successfully!");
        setFormData({
          pname: "",
          pdescription: "",
          pprice: "",
          pcategory: "",
          pimage: null,
          pisActive: true,
          prating: "",
        });
      }
    } catch (error) {
      console.error("Error Response:", error.response?.data || error.message);
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    }
  };
  
  

  return (

    <div className='artisan-container'>
     <ArtisanNavBar/>
     <div className='artisancontent'>

    <div className="product">
       <div className="container">
        <h1>Add New Product</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="pname">Product Name</label>
          <input
            type="text"
            id="pname"
            name="pname"
            value={formData.pname}
            onChange={handleChange}
            required
          />

          <label htmlFor="pdescription">Product Description</label>
          <textarea
            id="pdescription"
            name="pdescription"
            value={formData.pdescription}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="pprice">Price</label>
          <input
            type="number"
            id="pprice"
            name="pprice"
            value={formData.pprice}
            onChange={handleChange}
            step="0.01"
            required
          />

          <label htmlFor="pcategory">Category</label>
          <input
            type="text"
            id="pcategory"
            name="pcategory"
            value={formData.pcategory}
            onChange={handleChange}
            list="category-options"
            required
          />
          <datalist id="category-options">
            <option value="Handmade Crafts" />
            <option value="Jewelry" />
            <option value="Clothing" />
            <option value="Home Decor" />
            <option value="Toys" />
            <option value="Art" />
            <option value="Accessories" />
            <option value="Furniture" />
            <option value="Beauty Products" />
            <option value="Food & Beverages" />
          </datalist>

          <label htmlFor="pimage">Product Image</label>
          <input
            type="file"
            id="pimage"
            name="pimage"
            onChange={handleFileChange}
            accept="image/*"
            required
          />

          <label htmlFor="isActive">Is Active</label>
          <select
            id="isActive"
            name="pisActive"
            value={formData.pisActive}
            onChange={handleChange}
            required
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="prating"
            value={formData.prating}
            onChange={handleChange}
            step="0.01"
            max="5"
            min="0"
          />

          <button type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ArtisanAddProduct;
