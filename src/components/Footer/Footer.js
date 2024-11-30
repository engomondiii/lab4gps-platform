import React from 'react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Lab4GPS</h3>
          <p>
            Solving global issues through practical love and fostering collaboration to create lasting impact.
          </p>
          <Link to="/about" className="footer-link">Learn More</Link>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/collaboration-hub" className="footer-link">Collaboration Hub</Link></li>
            <li><Link to="/projects" className="footer-link">Projects</Link></li>
            <li><Link to="/news-events" className="footer-link">News & Events</Link></li>
            <li><Link to="/sponsorship" className="footer-link">Sponsorship</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@lab4gps.org" className="footer-link">gpslab@iwl.kr</a></p>
          <p>KakaoBank: <a href="tel:+1234567890" className="footer-link">3333-30-6931050 

</a></p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon facebook" aria-label="Facebook"></a>
            <a href="#" className="social-icon twitter" aria-label="Twitter"></a>
            <a href="#" className="social-icon instagram" aria-label="Instagram"></a>
            <a href="#" className="social-icon linkedin" aria-label="LinkedIn"></a>
            <a href="#" className="social-icon talk" aria-label="talk"></a>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lab4GPS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
