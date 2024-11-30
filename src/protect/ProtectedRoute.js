import React from 'react';
import { Navigate } from 'react-router-dom';
import RestrictedAccess from './RestrictedAccess'; // Import the RestrictedAccess component

const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null; // Check for user token in local storage
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <RestrictedAccess />;
};

export default ProtectedRoute;
