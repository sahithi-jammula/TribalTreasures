import React from 'react'
import CustomerNavBar from './CustomerNavBar'
import '../styles/customerprofile.css'

export default function CustomerProfile() {
  const customerInfo = JSON.parse(sessionStorage.getItem("customerInfo"));

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className='customer-container'>
      <CustomerNavBar/>
      <div className='customercontent'>
        <div style={{ justifySelf: 'center', justifyItems: 'center', width: '20%', height: '5%', backgroundColor: '#4CC9FE', borderRadius: '5%' }}>
          <h1 style={{ padding: '5px' }}>Customer Portal</h1>
        </div>
        

        <div className="customerprofile-container">
          <div className="customerprofile-header">
            <img src="https://th.bing.com/th/id/OIP.uFSarI4MS9PBRdk7vFgQrwHaHa?w=167&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Profile" className="customerprofile-img" />
            <h1 className="customerprofile-name">{customerInfo.cfname} {customerInfo.clname}</h1>
            <p className="customerprofile-username">@{customerInfo.cusername}</p>
          </div>
          <div className="customerprofile-section">
            <h2>Personal Information</h2>
            <p>
              <strong>Date of Birth:</strong> {formatDate(customerInfo.cdob)}
            </p>
            <p>
              <strong>Gender:</strong> {customerInfo.cgender}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${customerInfo.cemail}`}>
                {customerInfo.cemail}
              </a>
            </p>
            <p>
              <strong>Phone Number:</strong> {customerInfo.cphonenumber}
            </p>
            <p>
              <strong>Address:</strong> {customerInfo.caddress}
            </p>
          
          
            <p>
              <strong>Registration Date:</strong> {formatDate(customerInfo.cregistrationdate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
