import React from "react";
import { Link } from "react-router-dom";
import "../../styles/OverviewSection.css";

const OverviewSection = () => {
  return (
    <div className="overview-section">
      <h2 className="content-title">We are Global Problem Solvers!</h2>
      <p className="content-description">
        We are GPS striving to solve the world's problems.
        <br />
        Join us on our journey!
      </p>
      <Link to="/demo-day">
        <button className="cta-button">GPS Demo Day</button>
      </Link>
    </div>
  );
};

export default OverviewSection;
