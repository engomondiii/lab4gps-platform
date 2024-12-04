import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../services/auth'; // Import the isLoggedIn function from auth.js

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    // Redirect to the login page if the user is not logged in
    return <Navigate to="/login" replace />;
  }

  return children; // If the user is logged in, show the protected content
};

export default ProtectedRoute;
