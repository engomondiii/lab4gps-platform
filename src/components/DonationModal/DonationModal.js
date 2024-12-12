import React from 'react';
import styles from './DonationModal.module.css';
import { FaTimes } from 'react-icons/fa';

const DonationModal = ({ isOpen, onClose, donationAmount, donationGoal }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the donation submission logic here
    alert('Thank you for your donation!');
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.modalTitle}>Donate to This Cause</h2>
        <p className={styles.modalDescription}>
          Help us reach our goal of ${donationGoal.toLocaleString()}.
        </p>
        <form className={styles.donationForm} onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            Donation Amount:
            <input
              type="number"
              min="1"
              defaultValue="50"
              className={styles.formInput}
              required
            />
          </label>
          <label className={styles.formLabel}>
            Your Name:
            <input
              type="text"
              className={styles.formInput}
              required
            />
          </label>
          <label className={styles.formLabel}>
            Email Address:
            <input
              type="email"
              className={styles.formInput}
              required
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationModal;
