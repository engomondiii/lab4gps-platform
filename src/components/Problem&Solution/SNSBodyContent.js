import React from 'react';
import ProblemSolutionCard from './ProblemSolutionCard';
import mockData from './mockData';

const SNSBodyContent = () => {
  return (
    <div>
      <h1>Community Problems & Solutions</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {mockData.map((item, index) => (
          <ProblemSolutionCard
            key={index}
            authorName={item.authorName}
            authorTitle={item.authorTitle}
            authorImage={item.authorImage}
            mainImage={item.mainImage}
            overlayText={item.overlayText}
            type={item.type}
            shortTitle={item.shortTitle}
            detailedDescription={item.detailedDescription}
            location={item.location} // if needed internally
          />
        ))}
      </div>
    </div>
  );
};

export default SNSBodyContent;
