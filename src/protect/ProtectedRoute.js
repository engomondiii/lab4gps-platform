import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn, refreshAccessToken, isAccessTokenExpired } from '../services/auth';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const checkAuthentication = async () => {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      if (!accessToken || !refreshToken) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      if (isAccessTokenExpired(accessToken)) {
        try {
          // Attempt to refresh the token
          await refreshAccessToken();
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Failed to refresh access token:', error);
          setIsAuthenticated(false);
        }
      } else {
        // Token is valid
        setIsAuthenticated(true);
      }

      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Optionally show a loader while authentication is being checked
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
