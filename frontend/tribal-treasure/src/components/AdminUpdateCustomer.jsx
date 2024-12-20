import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import '../styles/adminupdatecustomer.css';

export default function AdminUpdateCustomer() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState({
    cfname: '',
    clname: '',
    cusername: '',
    cdob: '',
    cgender: '',
    cemail: '',
    cpassword:'',
    cphonenumber: '',
    caddress: '',
  });

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

  const openUpdateModal = (customer) => {
    setSelectedCustomer(customer);
    setUpdatedCustomer({
      cfname: customer.cfname,
      clname: customer.clname,
      cusername: customer.cusername,
      cdob: customer.cdob,
      cgender: customer.cgender,
      cemail: customer.cemail,
      cpassword:customer.cpassword,
      cphonenumber: customer.cphonenumber,
      caddress: customer.caddress,
      
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateCustomer = async () => {
    try {
      const response = await axios.put(`http://localhost:1981/updatecustomer?cid=${selectedCustomer.cid}`, updatedCustomer);
      console.log(response.data);
      fetchCustomers();
      setSelectedCustomer(null); 
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

        <h2>Update Customer</h2>

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
          <table className="customerupdate-table">
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
                  <td><button onClick={() => openUpdateModal(customer)}>Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No customers found.</p>
        )}

        {selectedCustomer && (
         <div className="modal">
         <div className="modal-content">
           <h3>Update Customer Details</h3>
           
           <div className="form-group">
             <label>First Name</label>
             <input
               type="text"
               name="cfname"
               value={updatedCustomer.cfname}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Last Name</label>
             <input
               type="text"
               name="clname"
               value={updatedCustomer.clname}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Username</label>
             <input
               type="text"
               name="cusername"
               value={updatedCustomer.cusername}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Date of Birth</label>
             <input
               type="date"
               name="cdob"
               value={updatedCustomer.cdob}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Gender</label>
             <select
               name="cgender"
               value={updatedCustomer.cgender}
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
               name="cemail"
               value={updatedCustomer.cemail}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Password</label>
             <input
               type="text"
               name="cpassword"
               value={updatedCustomer.cpassword}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Phone Number</label>
             <input
               type="text"
               name="cphonenumber"
               value={updatedCustomer.cphonenumber}
               onChange={handleInputChange}
             />
           </div>
       
           <div className="form-group">
             <label>Address</label>
             <input
               type="text"
               name="caddress"
               value={updatedCustomer.caddress}
               onChange={handleInputChange}
             />
           </div>
       
           
       
           <button onClick={updateCustomer}>Update Customer</button>
           <button onClick={() => setSelectedCustomer(null)}>Cancel</button>
         </div>
       </div>
       
        )}
      </div>
    </div>
  );
}
