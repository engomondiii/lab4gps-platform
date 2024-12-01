import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';
import logo from '../../assets/Images/Lab4GPS_Logo_2024-1.jpg'; // Import the logo

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Get current location

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo-container">
                <Link to="/">
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
                    <Link to="/" className={isScrolled ? 'scrolled-text' : ''}>Home</Link>
                </li>
                <li className={isActive('/about') ? 'active' : ''}>
                    <Link to="/about" className={isScrolled ? 'scrolled-text' : ''}>About</Link>
                </li>
                <li className={isActive('/collaboration-hub') ? 'active' : ''}>
                    <Link to="/collaboration-hub" className={isScrolled ? 'scrolled-text' : ''}>Collaboration Hub</Link>
                </li>
                <li className={isActive('/projects') ? 'active' : ''}>
                    <Link to="/projects" className={isScrolled ? 'scrolled-text' : ''}> GPS Projects</Link>
                </li>
                <li className={isActive('/startups') ? 'active' : ''}>
                    <Link to="/startups" className={isScrolled ? 'scrolled-text' : ''}>GPS Startups</Link>
                </li>
                {/* <li className={isActive('/resources') ? 'active' : ''}>
                    <Link to="/resources" className={isScrolled ? 'scrolled-text' : ''}>Resources</Link>
                </li>
                <li className={isActive('/news-events') ? 'active' : ''}>
                    <Link to="/news-events" className={isScrolled ? 'scrolled-text' : ''}>News & Events</Link>
                </li> */}
                <li className={isActive('/sponsorship') ? 'active' : ''}>
                    <Link to="/sponsorship" className={isScrolled ? 'scrolled-text' : ''}>Sponsorship</Link>
                </li>
                <li className={isActive('/member-portal') ? 'active' : ''}>
                    <Link to="/member-portal" className={isScrolled ? 'scrolled-text' : ''}>Member Portal</Link>
                </li>
                <li className={isActive('/login') ? 'active' : ''}>
                    <Link to="/login" className={isScrolled ? 'scrolled-text' : ''}>Login</Link>
                </li>
                {/* <li className={isActive('/signup') ? 'active' : ''}>
                    <Link to="/signup" className={isScrolled ? 'scrolled-text' : ''}>Sign Up</Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
