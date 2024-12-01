import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/OverviewSection.css";
import { FaProjectDiagram, FaUsers, FaBook, FaRegNewspaper, FaHandHoldingHeart, FaKey } from "react-icons/fa";

const features = [
  // {
  //   title: "Collaboration Hub",
  //   icon: <FaUsers />,
  //   description:
  //     "Connect problem-solvers and innovators to tackle global challenges through structured phases of discovery, projects, and startups.",
  //   route: "/collaboration-hub", // Route for the feature
  // },
  // {
  //   title: "Projects",
  //   icon: <FaProjectDiagram />,
  //   description:
  //     "Discover structured, actionable projects aimed at solving critical problems with clear goals, milestones, and measurable outcomes.",
  //   route: "/projects", // Route for the feature
  // },
  // {
  //   title: "Resources",
  //   icon: <FaBook />,
  //   description:
  //     "Access articles, webinars, and tools that empower learning, innovation, and collaboration on global challenges.",
  //   route: "/resources", // Route for the feature
  // },
  // {
  //   title: "News & Events",
  //   icon: <FaRegNewspaper />,
  //   description:
  //     "Stay updated with the latest achievements, partnerships, and global events relevant to Lab4GPS's mission.",
  //   route: "/news-events", // Route for the feature
  // },
  // {
  //   title: "Sponsorship",
  //   icon: <FaHandHoldingHeart />,
  //   description:
  //     "Support impactful initiatives with tiered sponsorship options and secure payment systems that align with your values.",
  //   route: "/sponsorship", // Route for the feature
  // },
  // {
  //   title: "Member Portal",
  //   icon: <FaKey />,
  //   description:
  //     "Internal members access advanced tools like task management, training, and collaboration spaces to drive meaningful solutions.",
  //   route: "/member-portal/login", // Route for the feature
  // },
];

const OverviewSection = () => {
  return (
    <>
      {/* Introduction Section */}
      <div className="overview-section intro-section">
        <div className="overview-container">
          {/* Left: YouTube Video */}
          <div className="overview-left">
            <iframe
              className="overview-video"
              src="https://www.youtube.com/embed/savPHzThsZc"
              title="Lab4GPS Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right: Introduction */}
          <div className="overview-right">
            <h2 className="overview-title">Introduction to Lab4GPS</h2>
            <p className="overview-description">
              At Lab4GPS, we connect innovators, educators, and problem-solvers to
              create scalable solutions for global challenges. Explore our tools,
              features, and collaborative spaces designed for impactful action.
            </p>
            <Link to="About">
              <button className="cta-button" style={{ backgroundColor: "#141e3f" }}>
                Learn More!
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="section-separator"></div>

      {/* Features Section */}
      <div className="overview-section features-section">
        {/* <h2 className="features-heading">Key Components of Lab4GPS</h2> */}
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <Link to={feature.route}>
                <button className="feature-button">Explore {feature.title}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OverviewSection;
