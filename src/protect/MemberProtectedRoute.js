import React from 'react';
import { Navigate } from 'react-router-dom';

const MemberProtectedRoute = ({ children }) => {
  const isMemberAuthenticated = localStorage.getItem('memberToken') !== null;
  return isMemberAuthenticated ? children : <Navigate to="/member-portal/login" />;
};

export default MemberProtectedRoute;
