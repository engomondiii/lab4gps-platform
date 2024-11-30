import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout'; // Import Layout for Navbar and Footer
import '../styles/RestrictedAccess.css'; // Styles for the page

const RestrictedAccess = () => {
  return (
    <Layout>
      <div className="restricted-access">
        <div className="restricted-content">
          <h1 className="restricted-title">Restricted Access</h1>
          <p className="restricted-message">
            This page is available only to logged-in users. Please log in to access this content.
            If you don't have an account, feel free to sign up and join our community!
          </p>
          <div className="restricted-actions">
            <Link to="/login" className="btn btn-login">Login</Link>
            <Link to="/signup" className="btn btn-signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RestrictedAccess;
