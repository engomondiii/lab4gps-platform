import React, { useState } from 'react';
import '../../styles/Hero.css';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false); // State to manage video visibility

  const handlePlayVideo = () => {
    setShowVideo(true); // Show video when button is clicked
  };

  return (
    <section className="hero">
      <div className="hero-video-container">
        {showVideo ? (
          // YouTube Video Embed
          <iframe
            src="https://www.youtube.com/embed/savPHzThsZc?autoplay=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Lab4GPS Introduction Video"
            className="hero-video"
          ></iframe>
        ) : (
          // Video Thumbnail and Play Button
          <div className="video-thumbnail">
            <button onClick={handlePlayVideo} className="play-button" aria-label="Play Video"></button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
