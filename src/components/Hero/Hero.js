import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import problemPin from '../../assets/eva_pin-fill-Problem.png';
import solutionPin from '../../assets/eva_pin-fill.png';
import Frame from './Frame';
import '../../styles/Hero.css';

const Hero = () => {
  const globeEl = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // Globe controls
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({ altitude: 2.5 });
  }, []);

  // Markers data with 'type' field
  const markers = [
    {
      lat: 37.7749,
      lng: -122.4194,
      id: 1,
      name: 'Problem in San Francisco',
      type: 'problem',
    },
    {
      lat: 1.2921,
      lng: 36.8219,
      id: 1,
      name: 'Problem in Nairobi Kenya',
      type: 'problem',
    },
    {
      lat: 36.8219,
      lng: 1.2921,
      id: 2,
      name: 'Solution in Nairobi Kenya',
      type: 'solution',
    },
  ];

  // Load textures
  const pinTextures = {
    problem: new THREE.TextureLoader().load(problemPin),
    solution: new THREE.TextureLoader().load(solutionPin),
  };

  // Custom marker renderer
  const markerRenderer = (marker) => {
    const texture = pinTextures[marker.type];
    if (!texture) return new THREE.Object3D(); // Return empty object if texture isn't loaded yet

    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(6, 6, 6); // Adjust as needed
    return sprite;
  };

  return (
    <section className="hero">
      <div className="globe-container">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          objectsData={markers}
          objectLat="lat"
          objectLng="lng"
          objectLabel="name"
          objectThreeObject={markerRenderer}
          onObjectClick={(marker) => {
            navigate(`/location/${marker.id}`);
          }}
        />
      </div>
      <Frame></Frame>
    </section>
  );
};

export default Hero;