// src/components/Hero/Frame.js

import React, { useState } from 'react';
import styles from '../../styles/Frame.module.css';
import Problems from './Problems';
import Button from '../common/Button';

const Frame = ({ selectedMarker, setShowCards }) => {
  const [showProblems, setShowProblems] = useState(false);

  const handleClick = () => {
    // Once "Look Around" is clicked, show the problems and allow card display
    setShowProblems(true);
    setShowCards(true);
  };

  return (
    <div className={styles.overlay}>
      {!showProblems ? (
        <>
          <div className={styles.heading1}>
            <h1 className={styles.solvingGlobalIssuesContainer}>
              Love In Action
            </h1>
          </div>
          <div className={styles.container1}>
            <div className={styles.subheading}>Fostering collaboration and innovation globally.</div>
          </div>
          <Button onClick={handleClick}>Look Around</Button>
        </>
      ) : (
        <Problems />
      )}
    </div>
  );
};

export default Frame;
