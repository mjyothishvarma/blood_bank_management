import React from 'react';
import { Navigate } from 'react-router-dom';

const EmpProtectedRoute = ({ children }) => {
  const isEmpLoggedIn = localStorage.getItem('isEmpLoggedIn') === 'true';

  if (!isEmpLoggedIn) {
    return <Navigate to="/employeeLogin" replace />;
  }
  return children;
};

export default EmpProtectedRoute;
