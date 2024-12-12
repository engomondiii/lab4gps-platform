// SNSSection.js
import React from 'react';
import styles from './SNSSection.module.css'
import heroImage from '../../assets/Images/SNSSection.png'; // replace with your actual image

const SNSSection = () => {
  return (
    <div className={styles.SNSSectionPage}>
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>SNS 4.0</h1>
        <div className={styles.heroDescription}>
          <p>This is a space where those facing challenges can connect with problem-solvers ready to help. <br/><br/>
          Together, we foster collaboration, understanding, and impactful solutions to make a difference.<br/>
          Speak Up – Let’s Find Solutions Together</p>
        </div>
        <button className={styles.heroButton}>Get Heard</button>
      </div>
      <img className={styles.heroImage} src={heroImage} alt="Illustration representing community problem-solving" />
    </section>
    {/* The following section is the body section */}
    </div>
  );
};

export default SNSSection;