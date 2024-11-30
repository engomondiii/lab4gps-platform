import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MemberPortalLogin.css';

const MemberPortalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock authentication - replace with actual API call
    const isAuthenticated = email === "member@example.com" && password === "password123";
    if (isAuthenticated) {
      localStorage.setItem("memberToken", "mockToken"); // Store member token
      navigate('/member-portal/dashboard');
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="member-login-container">
      <div className="member-login-wrapper">
        {/* Login Form Section */}
        <div className="login-form-section">
          <h1>Member Portal Login</h1>
          <form onSubmit={handleLogin} className="login-form">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
          <p>
            Not a member? <a href="/member-portal/request">Request Access</a>
          </p>
        </div>

        {/* Poster Section */}
        <div className="poster-section">
          <h2>Not a Member?</h2>
          <p>
            If you're not an internal member, you can request access to the Member Portal.
            Once your request is reviewed and approved by the admin, you'll receive an
            email with login details.
          </p>
          <p>
            Click the button below to navigate to the membership request page and submit
            your application.
          </p>
          <a href="/member-portal/request" className="poster-button">Request Membership</a>
        </div>
      </div>
    </div>
  );
};

export default MemberPortalLogin;
