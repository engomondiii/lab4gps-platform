import React from 'react';
import styles from './ProblemSolutionCard.module.css';
import { DropdownIcon } from 'react-icons/fa'; // Adjust the icon library and icon name as necessary
import { FaChevronDown, FaEye, FaComment, FaHeart } from 'react-icons/fa'; // Import the correct icons
import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon

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

            <div className={styles.rightPanel}>
                <section className={styles.contentSection}>
                    {shortTitle && <h4 className={styles.sectionTitle}>{shortTitle}</h4>}
                    <div className={styles.description}>
                        {detailedDescription.split('\n').map((line, i) => (
                            <p key={i} className={styles.descriptionLine}>{line}</p>
                        ))}
                    </div>
                </section>

                <div className={styles.ctaContainer}>
                    <button className={styles.seeMoreButton}>See More</button>
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
