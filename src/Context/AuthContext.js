import React, { createContext, useContext, useState, useEffect } from "react";
import {
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUserProfilePicture,
  changeUserPassword,
  refreshToken,
  forgotPassword,
  verifyResetOtp,
  resetPassword,
} from "../services/auth";

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

  // Fetch user profile on initial load
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          const userProfile = await getUserProfile();
          setUser(userProfile);
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
          logout(); // Clear tokens if fetching profile fails
        }
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const { user: userProfile } = await loginUser(email, password);
      setUser(userProfile);
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

  // Update user profile details
  const updateProfile = async (profileData) => {
    try {
      const updatedProfile = await updateUserProfile(profileData);
      setUser((prevUser) => ({ ...prevUser, ...updatedProfile }));
      return "Profile updated successfully.";
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  // Update profile picture
  const updateProfilePicture = async (profilePicture) => {
    try {
      const updatedPicture = await updateUserProfilePicture(profilePicture);
      setUser((prevUser) => ({ ...prevUser, profile_picture: updatedPicture.profile_picture }));
      return "Profile picture updated successfully.";
    } catch (error) {
      console.error("Error updating profile picture:", error);
      throw error;
    }
  };

  // Change user password
  const changePassword = async (oldPassword, newPassword) => {
    try {
      const response = await changeUserPassword({ old_password: oldPassword, new_password: newPassword });
      return response.message;
    } catch (error) {
      console.error("Error changing password:", error);
      throw error;
    }
  };

  // Forgot Password - Send OTP
  const initiateForgotPassword = async (email) => {
    try {
      const response = await forgotPassword(email);
      return response.message; // Return success message
    } catch (error) {
      console.error("Forgot Password error:", error);
      throw error;
    }
  };

  // Forgot Password - Verify OTP
  const verifyForgotPasswordOtp = async (email, otp) => {
    try {
      const response = await verifyResetOtp(email, otp);
      return response.message; // Return success message
    } catch (error) {
      console.error("OTP Verification error:", error);
      throw error;
    }
  };

  // Forgot Password - Reset Password
  const resetUserPassword = async (email, newPassword) => {
    try {
      const response = await resetPassword(email, newPassword);
      return response.message; // Return success message
    } catch (error) {
      console.error("Reset Password error:", error);
      throw error;
    }
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
    updateProfile,
    updateProfilePicture,
    changePassword,
    initiateForgotPassword,
    verifyForgotPasswordOtp,
    resetUserPassword,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};
