import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser, logoutUser, getUserDetails, refreshToken } from "../services/auth";

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user details on initial load
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          const userData = await getUserDetails();
          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
          logout(); // Clear tokens if fetching user details fails
        }
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const { user: userData } = await loginUser(email, password);
      setUser(userData);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    logoutUser(); // Clear tokens and redirect
  };

  // Refresh tokens periodically (optional)
  useEffect(() => {
    const interval = setInterval(async () => {
      const refreshTokenValue = localStorage.getItem("refreshToken");
      if (refreshTokenValue) {
        try {
          await refreshToken(refreshTokenValue);
        } catch (error) {
          console.error("Error refreshing token:", error);
          logout(); // Logout user if refresh fails
        }
      }
    }, 10 * 60 * 1000); // Refresh every 10 minutes

    return () => clearInterval(interval);
  }, []);

  // Context value to share across components
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};
