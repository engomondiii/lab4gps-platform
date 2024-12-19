import React, { useState } from 'react';
import '../../styles/VotingModule.css';

const VotingModule = ({ decision }) => {
  const [votes, setVotes] = useState({
    yes: 0,
    no: 0,
    abstain: 0
  });

  const [userVote, setUserVote] = useState('');

  const handleVote = (voteType) => {
    if (userVote) {
      alert("You have already voted!");
      return;
    }
    setVotes(prevVotes => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1
    }));
    setUserVote(voteType);
    alert(`You voted ${voteType}`);
  };

  return (
    <div className="voting-module-container">
      <h2 className="voting-module-title">Voting on: {decision.title}</h2>
      <div className="voting-module-vote-counts">
        <p className="voting-module-vote-count">Yes: {votes.yes}</p>
        <p className="voting-module-vote-count">No: {votes.no}</p>
        <p className="voting-module-vote-count">Abstain: {votes.abstain}</p>
      </div>
      <div className="voting-module-buttons">
        <button onClick={() => handleVote('yes')} className="voting-module-button voting-module-yes">Vote Yes</button>
        <button onClick={() => handleVote('no')} className="voting-module-button voting-module-no">Vote No</button>
        <button onClick={() => handleVote('abstain')} className="voting-module-button voting-module-abstain">Abstain</button>
      </div>
    </div>
  );
};

export default VotingModule;
