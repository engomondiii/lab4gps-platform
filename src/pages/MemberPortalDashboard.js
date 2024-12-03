import React, { useState } from "react";
import { FaTachometerAlt, FaFileAlt, FaCommentDots, FaLightbulb, FaTasks, FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaHome, FaChevronLeft, FaChevronRight, FaUserCircle, FaBell, FaCog, FaTh, FaQuestionCircle, FaLifeRing, FaSearch, FaHeadset } from 'react-icons/fa';
import '../styles/MemberPortalDashboard.css';

// Dashboard Component
const MemberPortalDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-header">
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
            <button className="btn-settings">
              <FaCog />
            </button>
            <button className="btn-notifications">
              <FaBell />
            </button>
            <button className="btn-quick-actions">
              <FaTh />
            </button>
            <button className="btn-user-profile">
              <FaUserCircle />
            </button>
          </div>
        </header>

        {/* Help and Search Sections */}
        <div className="help-search-container">
          <div className="help-section">
            <button className="help-btn">
              <FaQuestionCircle /> Help
            </button>
            <button className="help-btn">
              <FaLifeRing /> Support
            </button>
            <button className="help-btn">
              <FaHeadset /> Contact Us
            </button>
          </div>

          <div className="search-section">
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search resources..."
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
        </div>

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
          
          {/* Other Sections... */}
        </div>
      </div>
    </div>
  );
};

export default MemberPortalDashboard;
