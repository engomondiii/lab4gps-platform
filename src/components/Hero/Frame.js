// Frame.js
import React from 'react';
// import styles from './Frame.module.css';
import styles from '../../styles/Frame.module.css';

const Frame = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.heading1}>
        <b className={styles.solvingGlobalIssuesContainer}>
          <p className={styles.solvingGlobalIssues}>Solving Global Issues Through</p>
          <p className={styles.solvingGlobalIssues}>Love In Action</p>
        </b>
      </div>
      <div className={styles.container1}>
        <div className={styles.subheading}>Fostering collaboration and innovation globally.</div>
      </div>
      <button className={styles.button}>Look Around</button>
    </div>
  );
};

export default Frame;