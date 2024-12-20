import React from 'react'
import AdminNavBar from './AdminNavBar'
import ArtisanRegistration from './ArtisanRegistration'
import '../styles/adminaddartisan.css'
export default function AdminAddArtisan() {
  return (
    <div className='admin-container'>
    <AdminNavBar/>
    <div className='content'>
    <div style={{justifySelf:'center' ,justifyItems:'center',width:'20%',height:'5%',backgroundColor:'#4CC9FE',borderRadius:'5%',marginBottom:'7%'}}> <h1 style={{padding:'5px'}}>Admin Portal</h1></div>
    <ArtisanRegistration/>
    </div>
    </div>
  )
}
