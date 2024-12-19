// LikeButton.js
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 

const LikeButton = ({ initialLiked = false, onToggle }) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleClick = () => {
    setLiked((prev) => !prev);
    if (onToggle) {
      onToggle(!liked); // Call parent callback if provided
    }
  };

  return (
    <button 
      onClick={handleClick} 
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: 0
      }}
      aria-label="Toggle like"
    >
      {liked ? (
        <FaHeart style={{ color: '#e74c3c', width: '24px', height: '24px' }} />
      ) : (
        <FaRegHeart style={{ color: '#141e3f80', width: '24px', height: '24px' }} />
      )}
    </button>
  );
};

export default LikeButton;
