import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/OverviewSection.css";

const OverviewSection = () => {
  return (
    <>
      {/* Introduction Section */}
      <div className="overview-section intro-section">
        <div className="overview-container">
          {/* Left: YouTube Video */}
          <div className="overview-left">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/savPHzThsZc"
                title="Lab4GPS Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
