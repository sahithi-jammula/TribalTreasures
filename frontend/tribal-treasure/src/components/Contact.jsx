import React, { useEffect } from "react";
import NavBar from "./NavBar";
import '../styles/contact.css'
export default function Contact({contactus}) {
  useEffect(() => {
    // Load the Visme script dynamically if not already loaded
    const scriptId = "visme-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="contact-container">
      {contactus}
      <div className="contactcontent">
      <div className="contact-page">

        
        <div
          className="visme_d"
          data-title="artisan"
          data-url="pvpoded4-artisan"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="104178"
        ></div>
      </div>
    </div>
    </div>
  );
}
