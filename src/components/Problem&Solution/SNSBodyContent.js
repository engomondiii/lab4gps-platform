// src/components/Problem&Solution/SNSBodyContent.js

import React from 'react';
import ProblemSolutionCard from './ProblemSolutionCard';
import styles from './SNSBodyContent.module.css';

const SNSBodyContent = ({ items, onSeeMore }) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.cardsContainer}>
        {items.map((item) => (
          <ProblemSolutionCard
            key={item.id}
            authorName={item.authorName}
            authorTitle={item.authorTitle}
            authorImage={item.authorImage}
            mainImage={item.mainImage}
            overlayText={item.overlayText}
            type={item.type}
            shortTitle={item.shortTitle}
            detailedDescription={item.detailedDescription}
            location={item.location}
            onSeeMore={() => onSeeMore(item)} // Pass entire item data
            floating={false} // Set to false to retain position
          />
        ))}
      </div>
    </div>
  );
};

export default SNSBodyContent;
