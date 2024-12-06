// Frame.js
import React, { useState } from 'react';
import styles from '../../styles/Frame.module.css';
import Problems from './Problems';

const Frame = () => {
  const [showProblems, setShowProblems] = useState(false);

  const handleClick = () => {
    setShowProblems(true);
  };

  return (
    <div className={styles.overlay}>
      {!showProblems ? (
        <>
          <div className={styles.heading1}>
            <b className={styles.solvingGlobalIssuesContainer}>
              <p className={styles.solvingGlobalIssues}>Solving Global Issues Through <br/> Love In Action</p>
            </b>
          </div>
          <div className={styles.container1}>
            <div className={styles.subheading}>Fostering collaboration and innovation globally.</div>
          </div>
          <button className={styles.button} onClick={handleClick}>
            Look Around
          </button>
        </>
      ) : (
        <Problems />
      )}
    </div>
  );
};

export default Frame;