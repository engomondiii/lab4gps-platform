import React, { useState } from 'react';
import '../styles/RequestMembership.css';

const RequestMembership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - replace with API call to backend
    console.log("Membership Request:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="request-membership">
        <h2>Your membership request has been submitted!</h2>
      </div>
    );
  }

  return (
    <div className="request-membership">
      <form onSubmit={handleSubmit} className="membership-form">
        <h1>Request Membership</h1>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label>Reason for Request:</label>
        <textarea
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          required
        ></textarea>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestMembership;
