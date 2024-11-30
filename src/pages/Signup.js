import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Simulate signup logic
    alert('Signup successful! You can now log in.');
    window.location.href = '/login';
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '0.5rem', margin: '0.5rem', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.5rem', margin: '0.5rem', width: '100%' }}
        />
        <button onClick={handleSignup} style={{ padding: '0.5rem 1rem', margin: '0.5rem' }}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
