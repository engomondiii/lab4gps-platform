// OverviewSection.js
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../../styles/OverviewSection.css";

const OverviewSection = () => {
  return (
    <div className="overview-section">
      <div className="overview-container">
        {/* Video Section */}
        <div className="overview-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/savPHzThsZc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.youtube.com/watch?v=savPHzThsZc"
            target="_blank"
            rel="noopener noreferrer"
            className="open-youtube-link"
          >
          </a>
        </div>

        {/* Text Content Section */}
        <div className="overview-text">
          <h2 className="overview-title">Introduction to Lab4GPS</h2>
          <p className="overview-description">
            At Lab4GPS, we connect innovators, educators, and problem-solvers to create
            scalable solutions for global challenges. Explore our tools, features, and
            collaborative spaces designed for impactful action.
          </p>
          <Link to="/About">
            <button className="cta-button">
              Learn More <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <h2 className="overview-title">We are Global Problem Solvers!</h2>
          <p className="overview-description">
          We are GPS striving to solve the world's problems.
          Join us on our journey!
            <br />
            Join us on our journey!
          </p>
          <Link to="/collaboration-hub?section=sns4.0">
            <button className="cta-button">
              SNS 4.0
            </button>
          </Link>
    </div>
  );
};

export default OverviewSection;