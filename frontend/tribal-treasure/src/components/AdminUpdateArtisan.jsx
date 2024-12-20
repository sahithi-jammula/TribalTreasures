import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import '../styles/adminupdateartisan.css';

export default function AdminUpdateArtisan() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [updatedArtisan, setUpdatedArtisan] = useState({
    aafname: '',
    aalname: '',
    aausername: '',
    aadob: '',
    aagender: '',
    aaemail: '',
    aapassword:'',
    aaphonenumber: '',
    aaaddress: '',
    aaskills: '',
    aashopName: '',
  });

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
      month:'long',
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
        if (key === 'aaregistrationdate' || key === 'aadob') {
          const formattedDate = formatDate(value);
          return formattedDate.toLowerCase().includes(query);
        }
        return value?.toString().toLowerCase().includes(query);
      })
    );
  
    setFilteredData(filtered);
  };

  const openUpdateModal = (artisan) => {
    setSelectedArtisan(artisan);
    setUpdatedArtisan({
      aafname: artisan.aafname,
      aalname: artisan.aalname,
      aausername: artisan.aausername,
      aadob: artisan.aadob,
      aagender: artisan.aagender,
      aaemail: artisan.aaemail,
      aapassword:artisan.aapassword,
      aaphonenumber: artisan.aaphonenumber,
      aaaddress: artisan.aaaddress,
      aaskills: artisan.aaskills,
      aashopName: artisan.aashopName || '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedArtisan(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateArtisan = async () => {
    try {
      const response = await axios.put(`http://localhost:1981/updateartisan?aaid=${selectedArtisan.aaid}`, updatedArtisan);
      console.log(response.data);
      fetchArtisans();
      setSelectedArtisan(null); 
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-container">
      <AdminNavBar />
      <div className="content">
        <div style={{ justifySelf: 'center', justifyItems: 'center', width: '20%', height: '5%', backgroundColor: '#4CC9FE', borderRadius: '5%' }}>
          <h1 style={{ padding: '5px' }}>Admin Portal</h1>
        </div>

        <h2>Update Artisan</h2>

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
          <table className="artisanupdate-table">
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
                <th>Action</th>
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
                  <td><button onClick={() => openUpdateModal(artisan)}>Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No artisans found.</p>
        )}

        {selectedArtisan && (
         <div className="modal">
         <div className="modal-content">
           <h3>Update Artisan Details</h3>
           
           <div className="form-group">
             <label>First Name</label>
             <input
               type="text"
               name="aafname"
               value={updatedArtisan.aafname}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Last Name</label>
             <input
               type="text"
               name="aalname"
               value={updatedArtisan.aalname}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Username</label>
             <input
               type="text"
               name="aausername"
               value={updatedArtisan.aausername}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Date of Birth</label>
             <input
               type="date"
               name="aadob"
               value={updatedArtisan.aadob}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Gender</label>
             <select
               name="aagender"
               value={updatedArtisan.aagender}
               onChange={handleInputChange}
             >
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Other">Other</option>
             </select>
           </div>
       
           <div className="form-group">
             <label>Email</label>
             <input
               type="email"
               name="aaemail"
               value={updatedArtisan.aaemail}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Password</label>
             <input
               type="text"
               name="aapassword"
               value={updatedArtisan.aapassword}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Phone Number</label>
             <input
               type="text"
               name="aaphonenumber"
               value={updatedArtisan.aaphonenumber}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Address</label>
             <input
               type="text"
               name="aaaddress"
               value={updatedArtisan.aaaddress}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Skills</label>
             <input
               type="text"
               name="aaskills"
               value={updatedArtisan.aaskills}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Shop Name</label>
             <input
               type="text"
               name="aashopName"
               value={updatedArtisan.aashopName}
               onChange={handleInputChange}
             />
           </div>
       
           <button onClick={updateArtisan}>Update Artisan</button>
           <button onClick={() => setSelectedArtisan(null)}>Cancel</button>
         </div>
       </div>
       
        )}
      </div>
    </div>
  );
}
