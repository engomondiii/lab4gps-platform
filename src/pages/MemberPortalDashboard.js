import React, { useState, useEffect } from "react";
import { FaTachometerAlt, FaFileAlt, FaCommentDots, FaLightbulb, FaTasks, FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaHome, FaChevronLeft, FaChevronRight, FaUserCircle, FaBell, FaCog, FaTh, FaQuestionCircle, FaLifeRing, FaSearch, FaHeadset } from 'react-icons/fa';
import AdvancedUserProfile from '../components/Auths/AdvancedUserProfile'; // Import the Profile component
import '../styles/MemberPortalDashboard.css';

// Dashboard Component
const MemberPortalDashboard = () => {
  const [activeSection, setActiveSection] = useState(localStorage.getItem("activeSection") || "home");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [greeting, setGreeting] = useState("");
  const [userName] = useState("John Doe");
  const [viewingProfile, setViewingProfile] = useState(false); // New state to toggle profile view

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning");
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleProfile = () => {
    setViewingProfile(!viewingProfile); // Toggle the profile view
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
        <div className="sidebar-navigation">
          <ul>
            <li onClick={() => handleNavigation("home")} className={activeSection === "home" ? "active" : ""}>
              <FaHome /> {sidebarExpanded && "Home"}
              {activeSection === "home" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("dashboard")} className={activeSection === "dashboard" ? "active" : ""}>
              <FaTachometerAlt /> {sidebarExpanded && "Dashboard"}
              {activeSection === "dashboard" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("archive")} className={activeSection === "archive" ? "active" : ""}>
              <FaFileAlt /> {sidebarExpanded && "Internal Archive"}
              {activeSection === "archive" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("communication")} className={activeSection === "communication" ? "active" : ""}>
              <FaCommentDots /> {sidebarExpanded && "Communication"}
              {activeSection === "communication" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("ideahub")} className={activeSection === "ideahub" ? "active" : ""}>
              <FaLightbulb /> {sidebarExpanded && "Idea Hub"}
              {activeSection === "ideahub" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("tasks")} className={activeSection === "tasks" ? "active" : ""}>
              <FaTasks /> {sidebarExpanded && "Tasks"}
              {activeSection === "tasks" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("training")} className={activeSection === "training" ? "active" : ""}>
              <FaChalkboardTeacher /> {sidebarExpanded && "Training"}
              {activeSection === "training" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("community")} className={activeSection === "community" ? "active" : ""}>
              <FaUsers /> {sidebarExpanded && "Community"}
              {activeSection === "community" && <span className="active-indicator"></span>}
            </li>
            <li onClick={() => handleNavigation("events")} className={activeSection === "events" ? "active" : ""}>
              <FaCalendarAlt /> {sidebarExpanded && "Events"}
              {activeSection === "events" && <span className="active-indicator"></span>}
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header className="header">
          <div className="user-info">
            <span className="user-name">{greeting}, {userName}!</span>
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
            <button className="btn-user-profile" onClick={toggleProfile}> {/* On click, toggle profile */}
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

        {/* Display Profile or Dashboard content */}
        <div className="content">
          {viewingProfile ? (
            <AdvancedUserProfile />  
          ) : (
            activeSection === "dashboard" && (
              <div className="dashboard-overview">
                <h3>Dashboard Overview</h3>
                <div className="widgets">
                  <div className="widget card">Project Updates</div>
                  <div className="widget card">Notifications</div>
                  <div className="widget card">Upcoming Events</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberPortalDashboard;
