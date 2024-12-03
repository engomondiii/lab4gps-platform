import React, { useState } from "react";
import { FaTachometerAlt, FaFileAlt, FaCommentDots, FaLightbulb, FaTasks, FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import '../styles/MemberPortalDashboard.css';

// Dashboard Component
const MemberPortalDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-header">
          {/* Logo Image replaced with background from CSS */}
          <div className="logo-img"></div>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {sidebarExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>
        <nav>
          <ul>
            <li onClick={() => handleNavigation("home")}>
              <FaHome /> {sidebarExpanded && "Home"}
            </li>
            <li onClick={() => handleNavigation("dashboard")}>
              <FaTachometerAlt /> {sidebarExpanded && "Dashboard"}
            </li>
            <li onClick={() => handleNavigation("archive")}>
              <FaFileAlt /> {sidebarExpanded && "Internal Archive"}
            </li>
            <li onClick={() => handleNavigation("communication")}>
              <FaCommentDots /> {sidebarExpanded && "Communication"}
            </li>
            <li onClick={() => handleNavigation("ideahub")}>
              <FaLightbulb /> {sidebarExpanded && "Idea Hub"}
            </li>
            <li onClick={() => handleNavigation("tasks")}>
              <FaTasks /> {sidebarExpanded && "Tasks"}
            </li>
            <li onClick={() => handleNavigation("training")}>
              <FaChalkboardTeacher /> {sidebarExpanded && "Training"}
            </li>
            <li onClick={() => handleNavigation("community")}>
              <FaUsers /> {sidebarExpanded && "Community"}
            </li>
            <li onClick={() => handleNavigation("events")}>
              <FaCalendarAlt /> {sidebarExpanded && "Events"}
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <header className="header">
          <div className="user-info">
            <img className="profile-img" src="profile.jpg" alt="Profile" />
            <span className="user-name">Welcome, John Doe!</span>
          </div>
          <div className="header-buttons">
            <button className="btn-settings">Settings</button>
            <button className="btn-notifications">Notifications</button>
          </div>
        </header>

        <div className="content">
          {activeSection === "dashboard" && (
            <div className="dashboard-overview">
              <h3>Dashboard Overview</h3>
              <div className="widgets">
                <div className="widget card">Project Updates</div>
                <div className="widget card">Notifications</div>
                <div className="widget card">Upcoming Events</div>
              </div>
            </div>
          )}
          {activeSection === "archive" && (
            <div className="internal-archive">
              <h3>Internal Archive</h3>
              <p>Filter and categorize your resources here.</p>
              <div className="resource-list">
                <div className="resource-item card">Resource 1</div>
                <div className="resource-item card">Resource 2</div>
              </div>
            </div>
          )}
          {/* More Sections like Communication, Idea Hub, etc. */}
        </div>
      </div>
    </div>
  );
};

export default MemberPortalDashboard;
