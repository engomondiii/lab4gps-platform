import React from 'react';

const LogoComponent = ({ logoSrc, alt = "Startup Logo", className = "" }) => {
  return (
    <img
      src={logoSrc}
      alt={alt}
      className={className}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );
};

export default LogoComponent;
