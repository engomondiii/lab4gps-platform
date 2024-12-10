import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaCommentDots,
  FaLightbulb,
  FaTasks,
  FaChalkboardTeacher,
  FaUsers,
  FaCalendarAlt,
  FaHome,
  FaChevronLeft,
  FaChevronRight,
  FaBell,
  FaCog,
  FaTh,
  FaQuestionCircle,
  FaLifeRing,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";
import { useAuth } from "../Context/AuthContext"; // Import AuthContext hook
import AdvancedUserProfile from "../components/Auths/AdvancedUserProfile";
import InternalArchive from "../components/Archive/InternalArchive";
import IdeaHubDashboard from "../components/IdeaHub/IdeaHubDashboard";
import "../styles/MemberPortalDashboard.css";

const MemberPortalDashboard = () => {
  const { user } = useAuth(); // Access user data from AuthContext
  const [activeSection, setActiveSection] = useState(
    localStorage.getItem("activeSection") || "home"
  );
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [greeting, setGreeting] = useState("");
  const [viewingProfile, setViewingProfile] = useState(false);

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
    setViewingProfile(!viewingProfile);
  };

  const baseUrl = process.env.REACT_APP_API_URL || "http://127.0.0.1:8080";

  const profilePictureUrl = user?.profile_picture?.startsWith("http")
    ? user.profile_picture
    : `${baseUrl}${user?.profile_picture || ""}`;

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarExpanded ? "expanded" : "collapsed"}`}>
        <div className="sidebar-header">
          <div className="logo-img"></div>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {sidebarExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>
        <div className="sidebar-navigation">
          <ul>
            <li
              onClick={() => handleNavigation("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              <FaHome /> {sidebarExpanded && "Home"}
            </li>
            <li
              onClick={() => handleNavigation("dashboard")}
              className={activeSection === "dashboard" ? "active" : ""}
            >
              <FaTachometerAlt /> {sidebarExpanded && "Dashboard"}
            </li>
            <li
              onClick={() => handleNavigation("archive")}
              className={activeSection === "archive" ? "active" : ""}
            >
              <FaFileAlt /> {sidebarExpanded && "Internal Archive"}
            </li>
            <li
              onClick={() => handleNavigation("communication")}
              className={activeSection === "communication" ? "active" : ""}
            >
              <FaCommentDots /> {sidebarExpanded && "Communication"}
            </li>
            <li
              onClick={() => handleNavigation("ideahub")}
              className={activeSection === "ideahub" ? "active" : ""}
            >
              <FaLightbulb /> {sidebarExpanded && "Idea Hub"}
            </li>
            <li
              onClick={() => handleNavigation("tasks")}
              className={activeSection === "tasks" ? "active" : ""}
            >
              <FaTasks /> {sidebarExpanded && "Tasks"}
            </li>
            <li
              onClick={() => handleNavigation("training")}
              className={activeSection === "training" ? "active" : ""}
            >
              <FaChalkboardTeacher /> {sidebarExpanded && "Training"}
            </li>
            <li
              onClick={() => handleNavigation("community")}
              className={activeSection === "community" ? "active" : ""}
            >
              <FaUsers /> {sidebarExpanded && "Community"}
            </li>
            <li
              onClick={() => handleNavigation("events")}
              className={activeSection === "events" ? "active" : ""}
            >
              <FaCalendarAlt /> {sidebarExpanded && "Events"}
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header className="header">
          <div className="user-info">
            <span className="user-name">
              {greeting}, {user?.first_name} {user?.last_name}!
            </span>
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
            <div className="profile-avatar-container" onClick={toggleProfile}>
              <img
                className="profile-avatar"
                src={
                  profilePictureUrl || "https://via.placeholder.com/50?text=Avatar"
                }
                alt="User Avatar"
              />
              <p className="profile-name">{user?.username || "User"}</p>
            </div>
          </div>
        </header>

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
          {viewingProfile ? (
            <AdvancedUserProfile />
          ) : activeSection === "archive" ? (
            <InternalArchive />
          ) : activeSection === "ideahub" ? (
            <IdeaHubDashboard />
          ) : activeSection === "dashboard" ? (
            <div className="dashboard-overview">
              <h3>Dashboard Overview</h3>
              <div className="widgets">
                <div className="widget card">Project Updates</div>
                <div className="widget card">Notifications</div>
                <div className="widget card">Upcoming Events</div>
              </div>
            </div>
          ) : (
            <div className="section-placeholder">
              <h3>{activeSection}</h3>
              <p>Content for {activeSection} will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberPortalDashboard;
