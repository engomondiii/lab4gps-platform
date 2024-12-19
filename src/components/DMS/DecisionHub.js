import React, { useState, useEffect } from 'react';
import '../../styles/DecisionHub.css';
import ProposalForm from './ProposalForm';
import DiscussionForum from './DiscussionForum';
import VotingModule from './VotingModule';
import DecisionAnalytics from './DecisionAnalytics';

const DecisionHub = () => {
  const [decisions, setDecisions] = useState([]);
  const [selectedDecision, setSelectedDecision] = useState(null);

  useEffect(() => {
    // Placeholder for fetching decision data
    const fetchDecisions = async () => {
      // Simulate fetching data from an API
      const fetchedDecisions = [
        { id: 1, title: "New Office Location", status: "Voting" },
        { id: 2, title: "Annual Budget 2025", status: "Discussion" },
        { id: 3, title: "Remote Work Policies", status: "Review" }
      ];
      setDecisions(fetchedDecisions);
    };

    fetchDecisions();
  }, []);

  const handleSelectDecision = (decision) => {
    setSelectedDecision(decision);
  };

  return (
    <div className="decision-hub-container">
      <h1 className="decision-hub-title">Decision Hub</h1>
      <div className="decision-hub-list">
        {decisions.map(decision => (
          <div
            key={decision.id}
            className="decision-hub-item"
            onClick={() => handleSelectDecision(decision)}
          >
            <h2 className="decision-hub-item-title">{decision.title}</h2>
            <p className="decision-hub-item-status">Status: {decision.status}</p>
          </div>
        ))}
      </div>
      {selectedDecision && (
        <div className="decision-hub-details">
          <h2 className="decision-hub-details-title">
            Selected Decision: {selectedDecision.title}
          </h2>
          <ProposalForm decision={selectedDecision} />
          <DiscussionForum decision={selectedDecision} />
          <VotingModule decision={selectedDecision} />
          <DecisionAnalytics decision={selectedDecision} />
        </div>
      )}
    </div>
  );
};

export default DecisionHub;
