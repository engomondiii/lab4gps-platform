import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/OverviewSection.css";

const OverviewSection = () => {
  return (
    <>
      {/* Animated Introduction Section */}
      <div className="overview-section intro-section">
        <div className="animated-background"></div> {/* Decorative Animation */}
        <div className="overview-container">
          {/* Left: Animated Globe */}
          <div className="overview-left">
            <div className="hero-animation">
              <div className="orbit-container">
                <div className="orbit">
                  <div className="globe"></div>
                  <div className="orbiting-icon orbiting-icon-1"></div>
                  <div className="orbiting-icon orbiting-icon-2"></div>
                  <div className="orbiting-icon orbiting-icon-3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="overview-right">
            <h2 className="overview-title">Introduction to Lab4GPS</h2>
            <p className="overview-description">
              At Lab4GPS, we connect innovators, educators, and problem-solvers to
              create scalable solutions for global challenges. Explore our tools,
              features, and collaborative spaces designed for impactful action.
            </p>
            <Link to="/about">
              <button className="cta-button">Learn More!</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Wavy Separator */}
      <div className="section-separator">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,49.99C150,100,450,50,750,60C1050,70,1200,100,1200,100V120H0V49.99Z"
            fill="#00cc99"
          />
        </svg>
      </div>

      {/* Key Features Section */}
      <div className="overview-section features-section">
        <div className="features-container">
          <div className="feature-text-container">
            <h2 className="feature-title">We are Global Problem Solvers!</h2>
            <p className="feature-description">
              We are GPS striving to solve the world's problems. <br />
              Join us on our journey!
            </p>
            <Link to="/demo-day">
              <button className="demo-button">GPS Demo Day</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewSection;
