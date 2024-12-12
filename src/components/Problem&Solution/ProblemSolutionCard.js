import React, { useState } from 'react';
import styles from './ProblemSolutionCard.module.css';
import { FaEye, FaComment, FaHeart, FaUserCircle, FaTimes, FaDonate } from 'react-icons/fa';
import DonationModal from '../DonationModal/DonationModal'; // Import the DonationModal component

const ProblemSolutionCard = ({
  authorName,
  authorTitle,
  authorImage,
  mainImage,
  overlayText,
  type,
  shortTitle,
  detailedDescription,
  onSeeMore,
  onClose,
  floating = false,
  location,
  donationAmount = 0,
  donationGoal = 1000,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const renderDescription = (text) => {
    return text.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      const isNumbered = /^\d+\.\s/.test(trimmedLine);
      const isSubsection = isNumbered || trimmedLine.endsWith(':') || /^[A-Za-z\s]+$/.test(trimmedLine);
      if (isSubsection) {
        const title = isNumbered ? trimmedLine.replace(/^\d+\.\s/, '') : trimmedLine;
        return <h6 key={i} className={styles.subsectionTitle}>{title}</h6>;
      } else {
        return <p key={i} className={styles.descriptionLine}>{line}</p>;
      }
    });
  };

  // Calculate donation progress percentage
  const donationProgress = Math.min((donationAmount / donationGoal) * 100, 100);

  // If not floating, truncate the description
  const truncatedDescription = floating ? detailedDescription : detailedDescription.split('\n').slice(0,5).join('\n');

  // Combine class names based on floating prop
  const cardClassName = floating ? `${styles.card} ${styles.floating}` : styles.card;

  const handleCardClick = () => {
    if (floating && onSeeMore) {
      onSeeMore();
    }
  };
  const openModal = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <article className={cardClassName}
      onClick={floating ? handleCardClick : undefined}
    >
      <header className={styles.cardHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.authorImageWrapper}>
            {authorImage ? (
              <img className={styles.authorImage} src={authorImage} alt={`${authorName}'s profile`} />
            ) : (
              <FaUserCircle className={styles.authorImage} />
            )}
          </div>
          <div className={styles.authorText}>
            <h3 className={styles.authorName}>{authorName}</h3>
            <p className={styles.authorTitle}>{authorTitle}</p>
          </div>
        </div>
        {floating && (
          <button
            className={styles.closeIcon}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from propagating to the card
              onClose();
            }}
          >
            <FaTimes />
          </button>
        )}
      </header>

      <div className={styles.cardBody}>
        <div className={styles.leftPanel}>
          <div className={styles.imageSection}>
            <img className={styles.mainImage} src={mainImage} alt={type === 'Solution' ? 'Solution Image' : 'Problem Image'} />
            {overlayText && <p className={styles.overlayText}>{overlayText}</p>}
          </div>
          <div className={`${styles.typeTag} ${type === 'Solution' ? styles.solutionTag : styles.problemTag}`}>
            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <section className={styles.contentSection}>
            {shortTitle && <h4 className={styles.sectionTitle}>{shortTitle}</h4>}
            <div className={styles.description}>
              {renderDescription(truncatedDescription)}
            </div>
          </section>

          {!floating && (
            <div className={styles.buttonDiv}>
            <button
              className={styles.seeMoreButton}
              onClick={onSeeMore}
            >
              See More
            </button>
            </div>
          )}
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <FaEye />
              <span>Views</span>
              <span>0</span>
            </div>
            <div className={styles.statItem}>
              <FaComment />
              <span>Comments</span>
              <span>0</span>
            </div>
            <div className={styles.statItem}>
              <FaHeart />
              <span>Likes</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>

      {floating && (
        <div className={styles.donationSection}>
          {/* First Row: donationInfo and donationStats */}
          <div className={styles.donationRow}>
            <div className={styles.donationInfo}>
              <FaDonate className={styles.donationIcon} />
              <span>Donate to this cause</span>
            </div>
            <div className={styles.donationStats}>
              <span className={styles.donationAmount}>
                ${donationAmount.toLocaleString()} raised
                of ${donationGoal.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Second Row: Progress Bar and Donation Percentage */}
          <div className={styles.donationRow}>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${donationProgress}%` }}></div>
            </div>
            <span className={styles.donationPercentage}>
              {donationProgress.toFixed(0)}%
            </span>
          </div>

          {/* Third Row: Donate Button */}
          <div className={styles.donationRow}>
          <button className={styles.donateButton} onClick={openModal}>Donate Now</button>
          </div>
        </div>
      )} 
    </article>
          {/* Donation Modal */}
          <DonationModal
          isOpen={isModalOpen}
          onClose={closeModal}
          donationAmount={donationAmount}
          donationGoal={donationGoal}
        />
      </>
  );
};

export default ProblemSolutionCard;
