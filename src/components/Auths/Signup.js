import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, verifyOtp } from "../../services/auth"; // Import API functions
import "../../styles/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = Signup, 2 = OTP Verification, 3 = Success
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state to prevent multiple clicks
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle user signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await registerUser(formData); // Call the registerUser API function
      setStep(2); // Move to OTP verification step
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await verifyOtp(formData.email, otp); // Call the verifyOtp API function
      setSuccess(true);
      setStep(3); // Move to success step
    } catch (err) {
      setError(err.message || "Invalid or expired OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Success message after successful signup
  if (step === 3 && success) {
    return (
      <div className="signup-success">
        <h1>Welcome to Lab4GPS!</h1>
        <p>Your account has been verified successfully. You can now log in.</p>
        <button onClick={() => navigate("/login")} className="go-login">
          Go to Login
        </button>
      </div>
    );
  }

  // Render the signup and OTP verification forms
  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Signup Form */}
        {step === 1 && (
          <div className="signup-form-container">
            <h1>Create Your Account</h1>
            <form onSubmit={handleSignup} className="signup-form">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
          </div>
        )}

        {/* OTP Verification Form */}
        {step === 2 && (
          <div className="otp-verification-container">
            <h1>Verify Your Account</h1>
            <form onSubmit={handleVerifyOtp} className="otp-form">
              <label>Enter OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          </div>
        )}

        {/* Informational Poster Section */}
        <div className="signup-poster">
          <h2>{step === 1 ? "Welcome Back!" : "Almost There!"}</h2>
          <p>
            {step === 1
              ? "If you already have an account, log in to explore Lab4GPS features."
              : "Please verify your account to complete the signup process."}
          </p>
          {step === 1 && (
            <a href="/login" className="login-link">
              Log In
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
