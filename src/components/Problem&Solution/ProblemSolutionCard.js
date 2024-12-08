// ProblemSolutionCard.js
import React, { useState } from 'react';
import styles from './ProblemSolutionCard.module.css';
import { FaChevronDown, FaEye, FaComment, FaHeart, FaUserCircle } from 'react-icons/fa';

const ProblemSolutionCard = ({
  authorName,
  authorTitle,
  authorImage,
  mainImage,
  overlayText,
  type,
  shortTitle,
  detailedDescription
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.authorImageWrapper}>
            {authorImage ? (
              <img className={styles.authorImage} src={authorImage} alt={authorName} />
            ) : (
              <FaUserCircle className={styles.authorImage} />
            )}
          </div>
          <div className={styles.authorText}>
            <h3 className={styles.authorName}>{authorName}</h3>
            <p className={styles.authorTitle}>{authorTitle}</p>
          </div>
        </div>
        <div className={styles.dropdownIcon}>
          <FaChevronDown />
        </div>
      </header>

      <div className={styles.cardBody}>
        <div className={styles.leftPanel}>
          <div className={styles.imageSection}>
            <img className={styles.mainImage} src={mainImage} alt={type === 'Solution' ? 'Solution Image' : 'Problem Image'} />
            {overlayText && <p className={styles.overlayText}>{overlayText}</p>}
          </div>
          <div className={`${styles.typeTag} ${type === 'Solution' ? styles.solutionTag : styles.problemTag}`}>
            <span>{type}</span>
          </div>
        </div>

        <div className={`${styles.rightPanel} ${isExpanded ? styles.expanded : ''}`}>
          <section className={styles.contentSection}>
            {shortTitle && <h4 className={styles.sectionTitle}>{shortTitle}</h4>}
            <div className={styles.description}>
              {renderDescription(detailedDescription)}
            </div>
          </section>

          <div className={styles.ctaContainer}>
            <button className={styles.seeMoreButton} onClick={toggleExpand}>
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </div>
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
    </article>
  );
};

export default ProblemSolutionCard;