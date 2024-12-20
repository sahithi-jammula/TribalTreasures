
import { BrowserRouter, useLocation,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CustomerHome from './components/CustomerHome';
import AdminHome from './components/AdminHome';
import ArtisanHome from './components/ArtisanHome';
import AdminAddArtisan from './components/AdminAddArtisan';
import AdminViewAllArtisans from './components/AdminViewAllArtisans';
import AdminDeleteArtisan from './components/AdminDeleteArtisan';
import AdminUpdateArtisan from './components/AdminUpdateArtisan';
import AdminViewAllProducts from './components/AdminViewAllProducts';
import AdminDeleteProduct from './components/AdminDeleteProduct';
import AdminUpdateProduct from './components/AdminUpdateProduct';
import AdminViewAllCustomers from './components/AdminViewAllCustomers';
import AdminDeleteCustomer from './components/AdminDeleteCustomer';
import AdminUpdateCustomer from './components/AdminUpdateCustomer';
import ArtisanAddProduct from './components/ArtisanAddProduct';
import ArtisanViewAllProducts from './components/ArtisanViewAllProducts';
import ArtisanDeleteProduct from './components/ArtisanDeleteProduct';
import ArtisanUpdateProduct from './components/ArtisanUpdateProduct';
import ArtisanProfile from './components/ArtisanProfile';
import CustomerViewallProducts from './components/CustomerViewallProducts';
import CustomerViewAllArtisans from './components/CustomerViewAllArtisans';
import CustomerCart from './components/CustomerCart';
import CustomerProfile from './components/CustomerProfile';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import CustomerContactUs from './components/CustomerContactUs';
import CustomerAboutUs from './components/CustomerAboutUs';
import ArtisanContactUs from './components/ArtisanContactUs';
import ArtisanAboutUs from './components/ArtisanAboutUs';
import ArtisanLogout from './components/ArtisanLogout';
import NavBar from './components/NavBar';
import ArtisanNavBar from './components/ArtisanNavBar';
import CustomerNavBar from './components/CustomerNavBar';
import CustomerLogout from './components/CustomerLogout';
function App() {
  

  return (
    <div>

   <BrowserRouter basename='/'>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/aboutus" element={<Aboutus navbar={<NavBar/>} />} />
    <Route path="/contact" element={<Contact contactus={<NavBar/>} />} />
    <Route path="/customerhome" element={<CustomerHome/>} />
    <Route path="/adminhome" element={<AdminHome/>} />
    <Route path="/artisanhome" element={<ArtisanHome/>} />
    <Route path="/admin/addartisan" element={<AdminAddArtisan/>} />
    <Route path="/admin/viewallartisans" element={<AdminViewAllArtisans/>} />
    <Route path="/admin/deleteartisan" element={<AdminDeleteArtisan/>} />
    <Route path="/admin/updateartisan" element={<AdminUpdateArtisan/>} />
    <Route path="/admin/viewallproducts" element={<AdminViewAllProducts/>} />
    <Route path="/admin/deleteproduct" element={<AdminDeleteProduct/>} />
    <Route path="/admin/updateproduct" element={<AdminUpdateProduct/>} />
    <Route path="/admin/viewallcustomers" element={<AdminViewAllCustomers/>} />
    <Route path="/admin/deletecustomer" element={<AdminDeleteCustomer/>} />
    <Route path="/admin/updatecustomer" element={<AdminUpdateCustomer/>} />
    <Route path="/artisan/addproduct" element={<ArtisanAddProduct/>} />
    <Route path="/artisan/viewallproducts" element={<ArtisanViewAllProducts/>} />
    <Route path="/artisan/deleteproduct" element={<ArtisanDeleteProduct/>} />
    <Route path="/artisan/updateProduct" element={<ArtisanUpdateProduct/>} />
    <Route path="/artisan/profile" element={<ArtisanProfile/>} />
    <Route path="/customer/products" element={<CustomerViewallProducts/>} />
    <Route path="/customer/artisans" element={<CustomerViewAllArtisans/>} />
    <Route path="/customer/cart" element={<CustomerCart/>} />
    <Route path="/customer/profile" element={<CustomerProfile/>} />
    <Route path="/customer/contactus" element={<CustomerContactUs contactus={<CustomerNavBar/>}/>} />
    <Route path="/customer/aboutus" element={<CustomerAboutUs navbar={<CustomerNavBar/>}/>} />
    <Route path="/artisan/contactus" element={<ArtisanContactUs contactus={<ArtisanNavBar/>}/>} />
    <Route path="/artisan/aboutus" element={<ArtisanAboutUs navbar={<ArtisanNavBar/>}/>} />
    <Route path="/artisanlogout" element={<ArtisanLogout/>} />
    <Route path="/customerlogout" element={<CustomerLogout/>} />





    





    



    </Routes>

   


   </BrowserRouter>
   
   </div>
  )
}

export default App;
