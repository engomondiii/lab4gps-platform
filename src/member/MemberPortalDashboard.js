import React from 'react';
import '../styles/MemberPortalDashboard.css';

const MemberPortalDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('memberToken');
    window.location.href = '/member-portal/login';
  };

  return (
    <div className="member-dashboard">
      <h1>Welcome to the Member Portal</h1>
      <p>Access all the exclusive tools and resources for internal members.</p>
      <ul>
        <li>📂 <a href="#">Internal Archive and Resource Library</a></li>
        <li>📢 <a href="#">Announcements and Updates</a></li>
        <li>💬 <a href="#">Messaging System</a></li>
        <li>🎯 <a href="#">Task and Project Management Tools</a></li>
        <li>📚 <a href="#">Training and Development</a></li>
        <li>🤖 <a href="#">AI Chatbot Support</a></li>
        <li>🗂️ <a href="#">Community Building Tools</a></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MemberPortalDashboard;
