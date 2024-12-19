import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaFileAlt,
  FaCommentDots,
  FaLightbulb,
  FaGavel,
  FaCalendarAlt,
  FaBell,
  FaCog,
  FaSearch,
  FaQuoteLeft,
} from "react-icons/fa";
import "../../styles/MemberDashboardHome.css"; // Ensure you style this appropriately

const MemberDashboardHome = () => {
  const [notifications, setNotifications] = useState([
    "Team meeting tomorrow at 10 AM",
    "Alpha Project is 80% complete",
    "Hackathon next week",
  ]);
  const [highlights, setHighlights] = useState([
    "10 new projects launched this quarter",
    "Featured challenge: Climate Innovation Hub",
    "Important announcement: Funding opportunities available",
  ]);

  const quickLinks = [
    { icon: <FaUser />, title: "Profile", description: "View and edit your profile details." },
    { icon: <FaFileAlt />, title: "Internal Archive", description: "Access all archived resources." },
    { icon: <FaCommentDots />, title: "Communication", description: "Stay connected with your team." },
    { icon: <FaLightbulb />, title: "Idea Hub", description: "Contribute and vote on innovative ideas." },
    { icon: <FaGavel />, title: "Decision Making", description: "Participate in organizational decisions." },
  ];

  const [recentActivity, setRecentActivity] = useState([
    "Discussed 'Sustainability Project' in Idea Hub",
    "Voted on 'Green Energy Initiative'",
    "Joined 'Climate Action' chat",
  ]);

  useEffect(() => {
    // Mock fetching data if needed from an API
  }, []);

  return (
    <div className="member-dashboard-home-unique">
      {/* Welcome Section */}
      <div className="welcome-section-unique">
        <h1>Welcome to Lab4GPS Portal</h1>
        <p>Your gateway to collaboration, innovation, and making a difference.</p>
        <blockquote>
          <FaQuoteLeft /> "Together, we innovate for a better future."
        </blockquote>
      </div>

      {/* Quick Links */}
      <div className="quick-links-unique">
        <h2>Quick Links</h2>
        <div className="quick-links-grid-unique">
          {quickLinks.map((link, index) => (
            <div className="quick-link-card-unique" key={index}>
              <div className="icon-unique">{link.icon}</div>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications and Updates */}
      <div className="notifications-updates-unique">
        <h2>Recent Notifications and Updates</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>

      {/* Highlights and Announcements */}
      <div className="highlights-section-unique">
        <h2>Highlights and Announcements</h2>
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      {/* Widgets */}
      <div className="widgets-unique">
        <h2>Tools and Widgets</h2>
        <div className="widget-unique">
          <FaCalendarAlt />
          <div className="widget-content-unique">
            <h3>Calendar</h3>
            <p>View upcoming events and meetings.</p>
          </div>
        </div>
        <div className="widget-unique">
          <FaSearch />
          <div className="widget-content-unique">
            <h3>Search</h3>
            <p>Quickly find resources and tools.</p>
          </div>
        </div>
      </div>

      {/* Interactive Help */}
      <div className="interactive-help-unique">
        <h2>Need Assistance?</h2>
        <div className="help-options-unique">
          <button className="help-btn-unique">FAQ</button>
          <button className="help-btn-unique">Video Tutorials</button>
          <button className="help-btn-unique">Contact Support</button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity-unique">
        <h2>Recent Activity</h2>
        <ul>
          {recentActivity.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      {/* Inspirational Section */}
      <div className="inspirational-section-unique">
        <h2>Inspirational Stories</h2>
        <p>
          "Solving global issues through practical love." See how our members are making a difference.
        </p>
      </div>

      {/* User Avatar and Progress */}
      <div className="user-progress-unique">
        <div className="avatar-unique">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
          />
        </div>
        <div className="progress-details-unique">
          <p>You’ve participated in 3 projects this week.</p>
          <a href="/profile">View Your Profile</a>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboardHome;
