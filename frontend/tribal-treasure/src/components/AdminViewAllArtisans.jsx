import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import '../styles/adminviewallartisans.css';

export default function AdminViewAllArtisans() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchArtisans = async () => {
    try {
      const response = await axios.get("https://impartial-surprise-production-2ca1.up.railway.app/viewallartisans");
      setData(response.data);
      setFilteredData(response.data); 
    } catch (error) {
      console.log(error.message);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  useEffect(() => {
    fetchArtisans();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    const filtered = data.filter((artisan) =>
      Object.entries(artisan).some(([key, value]) => {
        if (key === 'aaregistrationDate' || key === 'aadob') {
          const formattedDate = formatDate(value);
          return formattedDate.toLowerCase().includes(query);
        }
        return value?.toString().toLowerCase().includes(query);
      })
    );
  
    setFilteredData(filtered);
  };
  

  return (
    <div className="admin-container">
      <AdminNavBar />
      <div className="content">
        <div
          style={{
            justifySelf: 'center',
            justifyItems: 'center',
            width: '20%',
            height: '5%',
            backgroundColor: '#4CC9FE',
            borderRadius: '5%',
          }}
        >
          <h1 style={{ padding: '5px' }}>Admin Portal</h1>
        </div>

        <h2>View All Artisans</h2>

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width: '98.5%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            
          }}
        />

        {filteredData.length > 0 ? (
          <table className="artisanviewall-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Date Of Birth</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Skills</th>
                <th>Shop Name</th>
                <th>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((artisan) => (
                <tr key={artisan.aaid}>
                  <td>{artisan.aaid}</td>
                  <td>{artisan.aafname}</td>
                  <td>{artisan.aalname}</td>
                  <td>{artisan.aausername}</td>
                  <td>{artisan.aadob}</td>
                  <td>{artisan.aagender}</td>
                  <td>{artisan.aaemail}</td>
                  <td>{artisan.aaphonenumber}</td>
                  <td>{artisan.aaaddress}</td>
                  <td>{artisan.aaskills}</td>
                  <td>{artisan.aashopName || "N/A"}</td>
                  <td>{formatDate(artisan.aaregistrationDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No artisans found.</p>
        )}
      </div>
    </div>
  );
}
