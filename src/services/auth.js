import api from './api';

// Utility function to handle API errors consistently
const handleApiError = (error) => {
  console.error('API Error:', error);
  const errorResponse = error.response?.data || { detail: error.message };
  throw errorResponse;
};

// Sign up a new user
export const signUp = async (userData) => {
  try {
    const response = await api.post('/users/signup/', userData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Log in a user and return tokens
export const logIn = async (credentials) => {
  try {
    const response = await api.post('/users/login/', credentials);
    const { access, refresh } = response.data.tokens;

    // Store tokens in localStorage
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Request password reset (send OTP to email)
export const requestPasswordReset = async (email) => {
  try {
    const response = await api.post('/users/forgot-password/', { email });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Verify OTP for password reset
export const verifyOtp = async (data) => {
  try {
    const response = await api.post('/users/verify-otp/', data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Reset the password
export const resetPassword = async (data) => {
  try {
    const response = await api.post('/users/reset-password/', data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Log out the user
export const logOut = async () => {
  try {
    await api.post('/users/logout/');
    // Clear tokens from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  } catch (error) {
    handleApiError(error);
  }
};

// Request email verification OTP
export const requestEmailVerificationOtp = async (email) => {
  try {
    const response = await api.post('/users/request-email-verification/', { email });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Verify email OTP
export const verifyEmailOtp = async (data) => {
  try {
    const response = await api.post('/users/verify-email-otp/', data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Refresh the access token
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (!refreshToken) {
    throw new Error('Refresh token is missing. Please log in again.');
  }

  try {
    const response = await api.post('/auth/token/refresh/', { refresh: refreshToken });
    const { access } = response.data;

    // Update the access token
    localStorage.setItem('access_token', access);
    return access;
  } catch (error) {
    handleApiError(error);
  }
};

// Get the current user's profile
export const getUserProfile = async () => {
  try {
    const response = await api.get('/users/profile/');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
