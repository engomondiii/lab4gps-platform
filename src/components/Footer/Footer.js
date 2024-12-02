import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  // Function to navigate to About page with a specific tab
  const navigateToAboutTab = (tab) => {
    navigate(`/about?tab=${tab}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to navigate to Collaboration Hub page with a specific section
  const navigateToCollaborationHubSection = (section) => {
    navigate(`/collaboration-hub?section=${section}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Wavy Separator */}
      <div className="footer-separator">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="footer-gradient-colors" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#141e3f" />
              <stop offset="50%" stopColor="#00cc99" />
              <stop offset="100%" stopColor="#FF9900" />
            </linearGradient>
          </defs>
          <path
            d="M0,49.99C150,100,450,50,750,60C1050,70,1200,100,1200,100V120H0V49.99Z"
            fill="url(#footer-gradient-colors)"
          />
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h3>About Lab4GPS (Global Problem Solvers)</h3>
          <p>
            Solving global issues through practical love and fostering collaboration to create lasting impact.
          </p>
          <button onClick={() => navigateToAboutTab("why")} className="footer-link">
            Learn More
          </button>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-subsections">
            <div className="subsection">
              <h4>Know About Lab4GPS</h4>
              <ul>
                <li>
                  <button onClick={() => navigateToAboutTab("why")} className="footer-link">
                    Why
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToAboutTab("who")} className="footer-link">
                    Who
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToAboutTab("what")} className="footer-link">
                    What
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToAboutTab("where")} className="footer-link">
                    Where
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToAboutTab("how")} className="footer-link">
                    How
                  </button>
                </li>
              </ul>
            </div>
            <div className="subsection">
              <h4>Collaboration Hub</h4>
              <ul>
                <li>
                  <button
                    onClick={() => navigateToCollaborationHubSection("startups")}
                    className="footer-link"
                  >
                    GPS Startups
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCollaborationHubSection("projects")}
                    className="footer-link"
                  >
                    GPS Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCollaborationHubSection("demo-day")}
                    className="footer-link"
                  >
                    GPS Demo Day
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCollaborationHubSection("sponsorship")}
                    className="footer-link"
                  >
                    Sponsorship
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="footer-link"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:info@lab4gps.org" className="footer-link">gpslab@iwl.kr</a>
          </p>
          <p>
            KakaoBank: <a href="tel:+1234567890" className="footer-link">3333-30-6931050</a>
          </p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon facebook" aria-label="Facebook"></a>
            <a href="#" className="social-icon twitter" aria-label="Twitter"></a>
            <a href="#" className="social-icon instagram" aria-label="Instagram"></a>
            <a href="#" className="social-icon linkedin" aria-label="LinkedIn"></a>
            <a href="#" className="social-icon talk" aria-label="Talk"></a>
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
