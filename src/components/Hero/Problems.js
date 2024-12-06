import React, { useState, useEffect } from 'react';
import styles from '../../styles/Problems.module.css';

const Problems = () => {
  const [showStats, setShowStats] = useState(true);
  const [stats] = useState({
    notSolved: 523,
    toBeSolved: 121,
    beingSolved: 24,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowStats(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.problems}>
    <div className={styles.overlay}>
        <h1 className={styles.problemsTitle}>Problems</h1>
        {showStats ? (
        <div className={styles.stats}>
          <div className={styles.notSolved523Container}>
            <p className={styles.notSolved}>not <br/> solved</p>
            <h3 className={styles.boldH3}>{stats.notSolved}</h3>
          </div>
          <div className={styles.notSolved523Container}>
            <p className={styles.notSolved}>to be solved</p>
            <h3 className={styles.boldH3}>{stats.toBeSolved}</h3>
          </div>
          <div className={styles.notSolved523Container}>
            <p className={styles.notSolved}>being solved</p>
            <h3 className={styles.boldH3}>{stats.beingSolved}</h3>
          </div>
        </div>
      ) : (
        <div className={styles.featuredProblem}>
          <p className={styles.featuredTitle}>Problems which visitor clicked most</p>
          <p className={styles.featuredContent}>
            <span className={styles.quote}>"</span>
            <span className={styles.problemText}>African Poverty Issues</span>
            <span className={styles.quote}>"</span>
          </p>
        </div>
      )}
    </div>
      <button className={styles.addButton}>Add</button>
    </div>
  );
};

export default Problems;