import React from 'react';
import { Navigate } from 'react-router-dom';
import RestrictedAccess from './RestrictedAccess'; // Import the RestrictedAccess component
import { isLoggedIn } from '../services/auth'; // Import the isLoggedIn function from auth.js

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <RestrictedAccess />;
  }

  return children; // If the user is logged in, show the protected content
};

export default ProtectedRoute;
