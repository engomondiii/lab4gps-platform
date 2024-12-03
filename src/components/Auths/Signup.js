import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, requestEmailVerificationOtp, verifyEmailOtp } from '../../services/auth'; // Import from auth.js
import '../../styles/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1 = Signup, 2 = OTP Verification, 3 = Success
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp({
        email: formData.email,
        username: formData.username,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
      });
      // Send email verification OTP
      await requestEmailVerificationOtp(formData.email);
      setStep(2); // Move to OTP verification step
    } catch (err) {
      setError(err.detail || 'Signup failed. Please try again.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await verifyEmailOtp({ email: formData.email, otp });
      setSuccess(true);
      setStep(3); // Move to success step
    } catch (err) {
      setError(err.detail || 'Invalid or expired OTP. Please try again.');
    }
  };

  if (step === 3 && success) {
    return (
      <div className="signup-success">
        <h1>Welcome to Lab4GPS!</h1>
        <p>Your account has been verified successfully. You can now log in.</p>
        <button onClick={() => navigate('/login')} className="go-login">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
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
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}

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
              <button type="submit">Verify OTP</button>
            </form>
          </div>
        )}

        <div className="signup-poster">
          <h2>{step === 1 ? 'Welcome Back!' : 'Almost There!'}</h2>
          <p>
            {step === 1
              ? 'If you already have an account, log in to explore Lab4GPS features.'
              : 'Please verify your account to complete the signup process.'}
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
