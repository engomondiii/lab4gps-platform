// CollaborationHub.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import StartupsSection from '../components/CoolaborationHubSections/StartupsSection';
import ProjectsSection from '../components/CoolaborationHubSections/ProjectsSection';
import SponsorshipSection from '../components/CoolaborationHubSections/SponsorshipSection';
import SNSPage from '../components/CoolaborationHubSections/SNSPage';

const CollaborationHub = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState('startups');

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  const renderSection = () => {
    switch (activeSection) {
      case 'startups':
        return <StartupsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'sns4.0':
        return <SNSPage />;
      case 'sponsorship':
        return <SponsorshipSection />;
      default:
        return <StartupsSection />;
    }
  };

  return (
    <div className="collaboration-hub">
      <div className="section-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default CollaborationHub;