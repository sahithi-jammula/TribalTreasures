import React from "react";
import "../styles/aboutus.css";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

export default function AboutUs({navbar}) {
  const teamMembers = [
    {
      name: "N Sai Krishna",
      role: "Developer",
      image: "https://1drv.ms/i/s!Aitu-UMowQ4z003TzvfufoZbuvU-?embed=1&width=1280&height=1280",
    },
    {
      name: "Sahithi",
      role: "Developer",
      image: "https://1drv.ms/i/s!Aitu-UMowQ4z008zVU9h3lVtguq7?embed=1&width=960&height=1280",
    },
    {
      name: "Tunisha Durga",
      role: "Developer",
      image: "https://1drv.ms/i/s!Aitu-UMowQ4z006Y6l2E82wdi2ve?embed=1&width=960&height=1280",
    },
  ];

  return (
    <div className="aboutus-container">
      {navbar}
    <div className="aboutuscontent">

   <div className="aboutdesc">
    <h2>About Us</h2>
    <p>
Welcome to TRIBAL TREASURES, a vibrant platform that connects talented artisans with customers
 who appreciate authentic, handcrafted art and products. We aim to bridge the gap between creativity
  and commerce, empowering artisans to showcase their skills while giving customers access to unique, high-quality creations.</p>

<h2>Our Mission</h2>
<p>To celebrate craftsmanship and support artisans by providing them with a platform to reach a wider audience while offering 
  customers the joy of owning meaningful, handcrafted items.</p>

  <h2>Why Choose Us?</h2>
  <ul>
<li>Support Local Artisans: Promote creativity and sustain traditional arts.</li>
<li>Unique Products: Explore handcrafted and one-of-a-kind items.</li>
<li>Seamless Experience: A user-friendly platform for both artisans and buyers.</li></ul>
   


    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img className="team-image" src={member.image} alt={`${member.name}`} />
            <div className="overlay">
              <h3 style={{marginBottom:'0%'}}>{member.name}</h3>
              <p style={{marginTop:'0%'}}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <p>Join us in celebrating the artistry that brings communities closer and adds value to lives.</p>
    </div>
    
    </div>
    

    </div>
  );
}
