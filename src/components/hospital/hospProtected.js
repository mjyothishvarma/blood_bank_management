import React from 'react';
import { Navigate } from 'react-router-dom';

const HospProtectedRoute = ({ children }) => {
  const isHospLoggedIn = localStorage.getItem('isHospLoggedIn') === 'true';

  if (!isHospLoggedIn) {
    return <Navigate to="/hospital" />;
  }

  return children;
};

export default HospProtectedRoute;
