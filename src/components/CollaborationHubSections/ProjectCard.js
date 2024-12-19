import React from 'react';
import styles from './ProjectCard.module.css';
import { FaEye, FaComment, FaHeart } from 'react-icons/fa';

/**
 * ProjectCard Component
 * Props:
 * - title: string (Project name)
 * - description: string (Project description text)
 * - imageSrc: string (Path to the main project image)
 * - tagText: string (Optional hashtag text like "Let Your light shine!", "Purpose Driven Life", "Just Mimic!")
 * - views: number
 * - comments: number
 * - likes: number
 */
const ProjectCard = ({
  title,
  description,
  imageSrc,
  tagText,
  views = 0,
  comments = 0,
  likes = 0
}) => {
  return (
    <div className={styles.projectCard}>
      {/* Top Section with Image, Title and Description */}
      <div className={styles.topSection}>
        <div className={styles.imageContainer}>
          {imageSrc && <img src={imageSrc} alt={title} className={styles.mainImage} />}
        </div>
        <b className={styles.title}>{title}</b>
        <div className={styles.description}>{description}</div>
        {tagText && (
          <div className={styles.tagContainer}>
            <div className={styles.tagWrapper}>
              <div className={styles.hash}>#</div>
              <div className={styles.tagText}>{tagText}</div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <FaEye className={styles.icon} />
          <div className={styles.statLabel}>Views</div>
          <div className={styles.statCount}>{views}</div>
        </div>
        <div className={styles.statItem}>
          <FaComment className={styles.icon} />
          <div className={styles.statLabel}>Comments</div>
          <div className={styles.statCount}>{comments}</div>
        </div>
        <div className={styles.statItem}>
          <FaHeart className={styles.icon} />
          <div className={styles.statLabel}>Likes</div>
          <div className={styles.statCount}>{likes}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
