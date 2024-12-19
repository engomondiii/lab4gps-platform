import React, { useState } from 'react';
import styles from '../../styles/Problems.module.css';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Problems = () => {
  const navigate = useNavigate();
  const [stats] = useState({
    notSolved: 523,
    toBeSolved: 121,
    beingSolved: 24,
  });

  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={styles.problems}>
      <div className={styles.overlay}>
        <div className={styles.problemsContainer}>
          <h1 className={styles.problemsTitle}>Problems</h1>
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
        </div>
      </div>

      <div className={styles.addButtonSmallContainer}>
        {isSmallDevice ? (
          <Button onClick={() => navigate('/add')} className={styles.addButtonSmall}>
            +
          </Button>
        ) : (
          <Button onClick={() => navigate('/add')} className={styles.addButton}>
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default Problems;
