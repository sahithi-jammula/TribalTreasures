import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import '../styles/admindeletecustomer.css';

export default function AdminDeleteCustomers() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("https://impartial-surprise-production-2ca1.up.railway.app/viewallcustomers");
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
    fetchCustomers();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    const filtered = data.filter((customer) =>
      Object.entries(customer).some(([key, value]) => {
        if (key === 'cregistrationdate' || key === 'cdob') {
          const formattedDate = formatDate(value);
          return formattedDate.toLowerCase().includes(query);
        }
        return value?.toString().toLowerCase().includes(query);
      })
    );
  
    setFilteredData(filtered);
  };


  const deleteCustomer=async(id)=>{
    try{

        await axios.delete(`http://localhost:1981/deletecustomer?id=${id}`)
        fetchCustomers()
    }
    catch(error){

        console.log(error.message)
    }
}
  return (
    <div className="admin-container">
      <AdminNavBar />
      <div className="content">
      <div style={{justifySelf:'center' ,justifyItems:'center',width:'20%',height:'5%',backgroundColor:'#4CC9FE',borderRadius:'5%'}}> <h1 style={{padding:'5px'}}>Admin Portal</h1></div>

        <h2>Delete Customer</h2>

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
          <table className="customer-table">
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
                <th>Registration Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((customer) => (
                <tr key={customer.cid}>
                  <td>{customer.cid}</td>
                  <td>{customer.cfname}</td>
                  <td>{customer.clname}</td>
                  <td>{customer.cusername}</td>
                  <td>{customer.cdob}</td>
                  <td>{customer.cgender}</td>
                  <td>{customer.cemail}</td>
                  <td>{customer.cphonenumber}</td>
                  <td>{customer.caddress}</td>
                  <td>{formatDate(customer.cregistrationdate)}</td>
                  <td><button onClick={() => deleteCustomer(customer.cid)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No customers found.</p>
        )}
      </div>
    </div>
  );
}
