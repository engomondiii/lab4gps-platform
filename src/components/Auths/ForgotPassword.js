import React, { useState } from "react";
import "../../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Steps: 1 = Email Input, 2 = OTP and Password Reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state to disable buttons during processing

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate sending OTP
    setTimeout(() => {
      if (email) {
        setStep(2); // Move to OTP and Password Reset step
      } else {
        setError("Please enter a valid email.");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleOtpAndPasswordSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false); // End loading if there's an error
      return;
    }

    // Simulate OTP verification and password reset
    setTimeout(() => {
      if (otp === "123456" && newPassword) {
        setSuccessMessage("Password reset successful! You can now log in.");
        setStep(3); // Success screen
      } else {
        setError("Invalid or expired OTP. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="forgot-password">
      <h1>Forgot Password</h1>

      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="forgot-password-form">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send OTP"}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpAndPasswordSubmit} className="forgot-password-form">
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      )}

      {step === 3 && (
        <div className="success-message">
          <h2>{successMessage}</h2>
          <a href="/login" className="go-login">
            Go to Login
          </a>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
