// src/components/Hero/Problems.js

import React, { useState, useEffect } from 'react';
import styles from '../../styles/Problems.module.css';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Problems = () => {
  const navigate = useNavigate();
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
              <p className={styles.notSolved}>not solved</p>
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
              <span className={styles.problemText}>Africa Water Shortages</span>
              <span className={styles.quote}>"</span>
            </p>
          </div>
        )}
      </div>
      <Button  onClick={() => navigate('/add')} className={styles.addButton}>Add</Button>
    </div>
  );
};

export default Problems;
