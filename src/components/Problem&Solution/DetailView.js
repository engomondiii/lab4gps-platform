// DetailView.js
import React from 'react';
import styles from './DetailView.module.css'; // Import the CSS module
import Comment from './Comment'; // Import the Comment sub-component
import { FaMapMarkerAlt, FaEye, FaComment, FaHeart, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const DetailView = ({ cardData, onBack }) => {
  // Destructure the cardData object for easy access
  const {
    authorName,
    authorTitle,
    authorImage,
    mainImage,
    age,
    bio,
    country,
    email,
    solutionDescription,
    detailedDescription,
    comments = [],
    type,
    shortTitle
  } = cardData;

  return (
    <div className={styles.container}>
      {/* Back button to return to the grid */}
      <button 
        onClick={onBack} 
        className={styles.backButton}>
        Back
      </button>

      <div className={styles.card}>
        {/* TOP PROFILE SECTION */}
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <div className={styles.authorImageWrapper}>
              {authorImage ? (
                <img src={authorImage} alt={authorName} className={styles.authorImage} />
              ) : (
                <div className={styles.authorImage}></div>
              )}
            </div>
            <div className={styles.authorDetails}>
              <div className={styles.authorName}>{authorName}</div>
              <div className={styles.authorTitle}>{authorTitle}</div>
            </div>
          </div>
          <div className={styles.dropdownIcon}>
            <div className={styles.dropdownArrow}><FaChevronDown /></div>
          </div>
        </div>

        {/* AGE, BIO, and CONTACT INFO */}
        <div className={styles.infoSection}>
          <div className={styles.ageInfo}>
            <span className={styles.ageBold}>Age: {age} </span>
            <span className={styles.ageNormal}>Years Old</span>
          </div>
          <div className={styles.bio}>
            {bio}
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><FaMapMarkerAlt/></div>
              <div>{country}</div>
            </div>
            <div className={styles.contactItem}>
              {/* email icon */}
              <div className={styles.contactIcon}> <FaEnvelope/></div>
              <div>{email}</div>
            </div>
          </div>
        </div>

        {/* MAIN IMAGE & SOLUTION BANNER */}
        <div className={styles.mainImageSection}>
          <img src={mainImage} alt="Main" className={styles.mainImage} />
          {/* overlayText or solutionDescription as text over the image */}
          <div className={styles.overlayText}>
            {solutionDescription}
          </div>
          <div className={styles.banner}>
            <div className={styles.bannerText}>
              {type === 'Solution' ? 'Solution' : 'Problem'}
            </div>
          </div>
        </div>

        {/* FULL PROBLEM STATEMENT & DESCRIPTION */}
        <div className={styles.descriptionSection}>
          <div className={styles.descriptionContent}>
            {shortTitle && (
              <div className={styles.sectionTitle}>{shortTitle}</div>
            )}
            <div className={styles.detailedDescription}>
              {detailedDescription}
            </div>
          </div>

          {/* VIEWS/COMMENTS/LIKES SECTION */}
          <div className={styles.statsSection}>
            <div className={styles.statItem}>
            <FaEye style={{width:24, height:24}} />
              <span>Views</span>
              <span className={styles.statCount}> 0</span>
            </div>
            <div className={styles.statItem}>
             <FaComment style={{width:24, height:24}}/>
              <span>Comments</span>
              <span className={styles.statCount}> {comments.length}</span>
            </div>
            <div className={styles.statItem}>
              
              <FaHeart style={{width:24, height:24}}/>
              <span>Likes</span>
              <span className={styles.statCount}> 0</span>
            </div>
          </div>

          {/* COMMENTS SECTION */}
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default DetailView;
