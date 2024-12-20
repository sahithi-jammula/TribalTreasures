import React from 'react'
import ArtisanNavBar from './ArtisanNavBar'
import '../styles/artisanprofile.css'

export default function ArtisanProfile() {
  const artisanInfo = JSON.parse(sessionStorage.getItem("artisanInfo"));

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className='artisan-container'>
      <ArtisanNavBar />
      <div className='artisancontent'>
        <div style={{ justifySelf: 'center', justifyItems: 'center', width: '20%', height: '5%', backgroundColor: '#4CC9FE', borderRadius: '5%' }}>
          <h1 style={{ padding: '5px' }}>Artisan Portal</h1>
        </div>
        

        <div className="artisanprofile-container">
          <div className="artisanprofile-header">
            <img src="https://th.bing.com/th/id/OIP.uFSarI4MS9PBRdk7vFgQrwHaHa?w=167&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Profile" className="artisanprofile-img" />
            <h1 className="artisanprofile-name">{artisanInfo.aafname} {artisanInfo.aalname}</h1>
            <p className="artisanprofile-username">@{artisanInfo.aausername}</p>
          </div>
          <div className="artisanprofile-section">
            <h2>Personal Information</h2>
            <p>
              <strong>Date of Birth:</strong> {formatDate(artisanInfo.aadob)}
            </p>
            <p>
              <strong>Gender:</strong> {artisanInfo.aagender}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${artisanInfo.aaemail}`}>
                {artisanInfo.aaemail}
              </a>
            </p>
            <p>
              <strong>Phone Number:</strong> {artisanInfo.aaphonenumber}
            </p>
            <p>
              <strong>Address:</strong> {artisanInfo.aaaddress}
            </p>
          </div>
          <div className="artisanprofile-section">
            <h2>Skills</h2>
            <p>{artisanInfo.aaskills}</p>
          </div>
          <div className="artisanprofile-section">
            <h2>Shop Information</h2>
            <p>
              <strong>Shop Name:</strong> {artisanInfo.aashopName}
            </p>
            <p>
              <strong>Registration Date:</strong> {formatDate(artisanInfo.aaregistrationDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
