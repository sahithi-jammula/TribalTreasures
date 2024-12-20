import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ArtisanLogout() {
  sessionStorage.removeItem('artisanInfo');

  return <Navigate to="/" />;
}
