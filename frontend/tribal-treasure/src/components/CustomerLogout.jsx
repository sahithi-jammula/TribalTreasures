import React from 'react';
import { Navigate } from 'react-router-dom';

export default function CustomerLogout() {
  sessionStorage.removeItem('customerInfo');

  return <Navigate to="/" />;
}
