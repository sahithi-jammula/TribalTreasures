import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import CustomerLogin from './CustomerLogin';
import ArtisanLogin from './ArtisanLogin';
  
function Login() {
  const [searchParams] = useSearchParams();
  const loginType = searchParams.get('type');

  return (
    <div className="login-container">
      {loginType === 'admin' && <AdminLogin />}
      {loginType === 'customer' && <CustomerLogin />}
      {loginType === 'artisan' && <ArtisanLogin />}
      {!loginType && <p>Please select a login type from the navigation menu.</p>}
    </div>
  );
}

export default Login;
