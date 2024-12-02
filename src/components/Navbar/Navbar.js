import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaHandshake } from "react-icons/fa"; // Import relevant icons
import "../../styles/Navbar.css";
import logo from "../../assets/Images/Lab4GPS_Logo_2024-1.jpg"; // Import the logo

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({ about: false, collaboration: false });
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Use for programmatic navigation

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle link clicks and scroll to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
    setIsMenuOpen(false); // Close the mobile menu
  };

  // Function to navigate to the Collaboration Hub page with a specific section
  const navigateToCollaborationHub = (section) => {
    navigate(`/collaboration-hub?section=${section}`);
    handleLinkClick();
  };

  // Function to navigate to the About page with a specific tab
  const navigateToAboutTab = (tab) => {
    navigate(`/about?tab=${tab}`);
    handleLinkClick();
  };

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Lab4GPS Logo" className="logo-image" />
        </Link>
      </div>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {/* Home Link */}
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" className={isScrolled ? "scrolled-text" : ""} onClick={handleLinkClick}>
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen({ ...isDropdownOpen, about: true })}
          onMouseLeave={() => setIsDropdownOpen({ ...isDropdownOpen, about: false })}
        >
          <Link
            to="/about"
            className={`dropdown-link ${isScrolled ? "scrolled-text" : ""}`}
            onClick={() => navigateToAboutTab("why")}
          >
            <FaInfoCircle className="nav-icon" /> About
          </Link>
          <ul className={`dropdown-menu ${isDropdownOpen.about ? "show" : ""}`}>
            <li>
              <button onClick={() => navigateToAboutTab("why")}>Why</button>
            </li>
            <li>
              <button onClick={() => navigateToAboutTab("who")}>Who</button>
            </li>
            <li>
              <button onClick={() => navigateToAboutTab("what")}>What</button>
            </li>
            <li>
              <button onClick={() => navigateToAboutTab("where")}>Where</button>
            </li>
            <li>
              <button onClick={() => navigateToAboutTab("how")}>How</button>
            </li>
          </ul>
        </li>

        {/* Collaboration Hub Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen({ ...isDropdownOpen, collaboration: true })}
          onMouseLeave={() => setIsDropdownOpen({ ...isDropdownOpen, collaboration: false })}
        >
          <Link
            to="/collaboration-hub"
            className={`dropdown-link ${isScrolled ? "scrolled-text" : ""}`}
            onClick={() => navigateToCollaborationHub("startups")}
          >
            <FaHandshake className="nav-icon" /> Collaboration Hub
          </Link>
          <ul className={`dropdown-menu ${isDropdownOpen.collaboration ? "show" : ""}`}>
            <li>
              <button onClick={() => navigateToCollaborationHub("startups")}>GPS Startups</button>
            </li>
            <li>
              <button onClick={() => navigateToCollaborationHub("projects")}>GPS Projects</button>
            </li>
            <li>
              <button onClick={() => navigateToCollaborationHub("demo-day")}>GPS Demo Day</button>
            </li>
            <li>
              <button onClick={() => navigateToCollaborationHub("sponsorship")}>Sponsorship</button>
            </li>
            <li>
              <button onClick={() => navigate("/contact-us")}>Contact Us</button>
            </li>
          </ul>
        </li>

        {/* Login and Sign-Up Links */}
        <li className={isActive("/login") ? "active" : ""}>
          <Link to="/login" className={isScrolled ? "scrolled-text" : ""} onClick={handleLinkClick}>
            Login
          </Link>
        </li>
        <li className={isActive("/signup") ? "active" : ""}>
          <Link to="/signup" className={isScrolled ? "scrolled-text" : ""} onClick={handleLinkClick}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
