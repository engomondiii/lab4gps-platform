import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <section className="hero">
      <div className="hero-video-container">
        {/* Vimeo Video Embed */}
        <iframe
          src="https://player.vimeo.com/video/163099115?autoplay=1&loop=1&background=1&muted=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Earth Animation"
          className="hero-video"
        ></iframe>
      </div>
      <div className="hero-content">
        <h1>Solving Global Issues Through Practical Love</h1>
        <p>Fostering collaboration and innovation globally.</p>
        <div className="hero-buttons">
          {/* Navigate to About page */}
          {/* <button
            className="btn-learn"
            onClick={() => navigate('/about')}
            style={{ fontFamily: 'Helvetica75-Bold' }}
          >
            Learn More
          </button> */}
          {/* Navigate to Login page */}
          {/* <button
            className="btn-involved"
            onClick={() => navigate('/login')}
            style={{ fontFamily: 'Helvetica-Regular' }}
          >
            Get Involved
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;