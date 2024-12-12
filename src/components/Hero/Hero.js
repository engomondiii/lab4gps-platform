// src/components/Hero/Hero.js

import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import problemPin from '../../assets/eva_pin-fill-Problem.png';
import solutionPin from '../../assets/eva_pin-fill.png';
import Frame from './Frame';
import ProblemSolutionCard from '../Problem&Solution/ProblemSolutionCard';
import mockData from '../Problem&Solution/mockData'; // Importing the mockData
import styles from '../../styles/Hero.module.css';

const locationDictionary = {
  "Nairobi, Kenya": { lat: 1.2921, lng: 36.8219 },
  "Rabat, Morocco": { lat: 34.0209, lng: -6.8417 },
  "San Francisco, USA": { lat: 37.7749, lng: -122.4194 },
  "Barsendu, Kenya": { lat: -0.3213, lng: 36.8270 },
  "Baseka, Philippines": { lat: 10.6157, lng: 123.4700 }
};

function convertLocationToLatLng(location, country) {
  const key = `${location}, ${country}`;
  if (locationDictionary[key]) {
    return locationDictionary[key];
  }
  return null;
}

const Hero = () => {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showCards, setShowCards] = useState(false); 
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.pointOfView({ altitude: 2.5 });
      globeEl.current.controls().enabled = false; // Disable interactions initially
    }
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().enabled = showCards;
    }
  }, [showCards]);

  useEffect(() => {
    // Prepare markers from mockData
    const newMarkers = mockData.map((item, index) => {
      let latitude = item.lat;
      let longitude = item.lng;

      if ((latitude === undefined || longitude === undefined) && item.location && item.country) {
        const coords = convertLocationToLatLng(item.location, item.country);
        if (coords) {
          latitude = coords.lat;
          longitude = coords.lng;
        }
      }

      if (latitude !== undefined && longitude !== undefined) {
        return {
          lat: latitude,
          lng: longitude,
          id: item.id || index,
          name: item.type + " in " + item.location,
          type: item.type.toLowerCase(),
          cardData: item
        };
      }
      return null;
    }).filter(m => m !== null);

    setMarkers(newMarkers);
  }, []);

  const pinTextures = {
    problem: new THREE.TextureLoader().load(problemPin),
    solution: new THREE.TextureLoader().load(solutionPin),
  };

  const markerRenderer = (marker) => {
    const texture = pinTextures[marker.type];
    if (!texture) return new THREE.Object3D();

    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(8, 8, 8);
    return sprite;
  };

  const handleMarkerClick = (marker) => {
    if (showCards) {
      setSelectedMarker(marker);
    } else {
      alert('Please click "Look Around" to view problem details.');
    }
  };

  const handleCloseCard = () => {
    setSelectedMarker(null);
    // setShowCards(false);
  };

  const handleSeeMore = (item) => {
    navigate(`/details/${item.id}`, { state: { item } });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.globeContainer}>
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
            handleMarkerClick(marker);
            }}
          />
          </div>
          <Frame
          selectedMarker={selectedMarker}
          setShowCards={setShowCards} 
          />
          {showCards && selectedMarker && (
          <ProblemSolutionCard
            authorName={selectedMarker.cardData.authorName}
            authorTitle={selectedMarker.cardData.authorTitle}
            authorImage={selectedMarker.cardData.authorImage}
            mainImage={selectedMarker.cardData.mainImage}
            type={selectedMarker.type.charAt(0).toUpperCase() + selectedMarker.type.slice(1)}
            shortTitle={selectedMarker.cardData.shortTitle}
            detailedDescription={selectedMarker.cardData.detailedDescription.length >210 ? `${selectedMarker.cardData.detailedDescription.substring(0, 210)}...` : selectedMarker.cardData.detailedDescription}
            donationAmount={selectedMarker.cardData.donationAmount}
            donationGoal={selectedMarker.cardData.donationGoal}
            onSeeMore={() => handleSeeMore(selectedMarker.cardData)}
            onClose={handleCloseCard}
            floating={true} // Floating is true for Hero
          showDonation={true} // Ensure donation section is shown
          size="small" // Pass the new size prop
          location={selectedMarker.cardData.location ? `${selectedMarker.cardData.location}, ${selectedMarker.cardData.country || ''}` : 'Unknown Location'} 
        />
      )}
    </section>
  );
};

export default Hero;
