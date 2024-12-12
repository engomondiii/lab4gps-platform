// CollaborationHub.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StartupsSection from '../components/CollaborationHubSections/StartupsSection';
import ProjectsSection from '../components/CollaborationHubSections/ProjectsSection';
import SponsorshipSection from '../components/CollaborationHubSections/SponsorshipSection';
import SNSPage from '../components/CollaborationHubSections/SNSPage';
import mockData from '../components/Problem&Solution/mockData'; // Ensure correct path
import styles from '../styles/CollaborationHub.css'; // Ensure correct path

const CollaborationHub = () => {
  const { section, cardId } = useParams();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (cardId) {
      // Find the card data based on cardId
      const card = mockData.find(item => item.id.toString() === cardId);
      if (card) {
        setSelectedCard(card);
      } else {
        // Handle invalid cardId by notifying the user and navigating back to the section
        alert('Card not found.');
        navigate(`/collaboration-hub/${section}`, { replace: true });
      }
    } else {
      // If no cardId is present, ensure no card is selected
      setSelectedCard(null);
    }
  }, [section, cardId, navigate]);

  const renderSection = () => {
    switch (section) {
      case 'startups':
        return <StartupsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'sns4.0':
        return <SNSPage selectedCard={selectedCard} />;
      case 'sponsorship':
        return <SponsorshipSection />;
      default:
        // If the section doesn't match any predefined sections, default to StartupsSection
        return <StartupsSection />;
    }
  };

  return (
    <div className={styles.collaborationHub}>
      <div className={styles.sectionContent}>
        {renderSection()}
      </div>
    </div>
  );
};

export default CollaborationHub;
