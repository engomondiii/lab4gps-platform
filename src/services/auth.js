import api from "./api";

/**
 * Register a new user
 * @param {Object} formData - User registration details
 * @returns {Promise} - Server response data
 */
export const registerUser = async (formData) => {
  try {
    const response = await api.post("/auth/signup/", formData);
    return response.data;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error.response?.data || error.message;
  }
};

/**
 * Verify OTP to activate user account
 * @param {string} email - User's email
 * @param {string} otp - OTP sent to the user's email
 * @returns {Promise} - Server response data
 */
export const verifyOtp = async (email, otp) => {
  try {
    const response = await api.post("/auth/verify-otp/", { email, otp });
    return response.data;
  } catch (error) {
    console.error("Error during OTP verification:", error);
    throw error.response?.data || error.message;
  }
};

/**
 * Login user and obtain JWT tokens
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise} - Server response data containing tokens
 */
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login/", { email, password });
    const { access, refresh } = response.data;

    // Store tokens in localStorage
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    return response.data;
  } catch (error) {
    console.error("Error during user login:", error);
    throw error.response?.data || error.message;
  }
};

/**
 * Refresh the access token
 * @param {string} refreshToken - JWT refresh token
 * @returns {Promise} - Server response data containing a new access token
 */
export const refreshToken = async (refreshToken) => {
  try {
    const response = await api.post("/auth/token/refresh/", { refresh: refreshToken });
    localStorage.setItem("accessToken", response.data.access); // Save new access token
    return response.data;
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error.response?.data || error.message;
  }
};

/**
 * Fetch authenticated user's details
 * @returns {Promise} - Server response data containing user details
 */
export const getUserDetails = async () => {
  try {
    const response = await api.get("/auth/user/");
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error.response?.data || error.message;
  }
};

/**
 * Logout the user
 * Clears tokens and redirects to login page
 */
export const logoutUser = () => {
  try {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login"; // Redirect to login
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

