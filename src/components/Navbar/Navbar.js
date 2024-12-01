import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';
import logo from '../../assets/Images/Lab4GPS_Logo_2024-1.jpg'; // Import the logo

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState({ about: false, collaboration: false });
    const location = useLocation(); // Get current location

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle link clicks and scroll to top
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
        setIsMenuOpen(false); // Close the mobile menu
    };

    // Function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li className={isActive('/') ? 'active' : ''}>
                    <Link to="/" className={isScrolled ? 'scrolled-text' : ''} onClick={handleLinkClick}>
                        Home
                    </Link>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => setIsDropdownOpen({ ...isDropdownOpen, about: true })}
                    onMouseLeave={() => setIsDropdownOpen({ ...isDropdownOpen, about: false })}
                >
                    <Link
                        to="/about"
                        className={`dropdown-link ${isScrolled ? 'scrolled-text' : ''}`}
                        onClick={handleLinkClick}
                    >
                        About
                    </Link>
                    <ul className={`dropdown-menu ${isDropdownOpen.about ? 'show' : ''}`}>
                        <li><Link to="/about/why" onClick={handleLinkClick}>Why</Link></li>
                        <li><Link to="/about/who" onClick={handleLinkClick}>Who</Link></li>
                        <li><Link to="/about/what" onClick={handleLinkClick}>What</Link></li>
                        <li><Link to="/about/where" onClick={handleLinkClick}>Where</Link></li>
                        <li><Link to="/about/how" onClick={handleLinkClick}>How</Link></li>
                    </ul>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => setIsDropdownOpen({ ...isDropdownOpen, collaboration: true })}
                    onMouseLeave={() => setIsDropdownOpen({ ...isDropdownOpen, collaboration: false })}
                >
                    <Link
                        to="/collaboration-hub"
                        className={`dropdown-link ${isScrolled ? 'scrolled-text' : ''}`}
                        onClick={handleLinkClick}
                    >
                        Collaboration Hub
                    </Link>
                    <ul className={`dropdown-menu ${isDropdownOpen.collaboration ? 'show' : ''}`}>
                        <li><Link to="/collaboration-hub/startups" onClick={handleLinkClick}>GPS Startups</Link></li>
                        <li><Link to="/collaboration-hub/projects" onClick={handleLinkClick}>GPS Projects</Link></li>
                        <li><Link to="/collaboration-hub/demo-day" onClick={handleLinkClick}>GPS Demo Day</Link></li>
                        <li><Link to="/collaboration-hub/sponsorship" onClick={handleLinkClick}>Sponsorship</Link></li>
                        <li><Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link></li>
                    </ul>
                </li>
                <li className={isActive('/login') ? 'active' : ''}>
                    <Link to="/login" className={isScrolled ? 'scrolled-text' : ''} onClick={handleLinkClick}>
                        Login
                    </Link>
                </li>
                <li className={isActive('/signup') ? 'active' : ''}>
                    <Link to="/signup" className={isScrolled ? 'scrolled-text' : ''} onClick={handleLinkClick}>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
