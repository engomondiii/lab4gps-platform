import React, { useState, useEffect } from 'react';
import { FaTrophy, FaMedal, FaUser, FaThumbsUp, FaPlus } from 'react-icons/fa';
import '../../styles/RecognitionSystem.css';

const RecognitionSystem = () => {
  const [badges, setBadges] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [points, setPoints] = useState(0);
  const [nominations, setNominations] = useState([]);
  const [newNomination, setNewNomination] = useState('');
  const [votes, setVotes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setBadges([
      { id: 1, name: 'Engagement Champion', earned: '2024-06-01' },
      { id: 2, name: 'Innovator of the Month', earned: '2024-05-15' },
    ]);
    setLeaderboard([
      { name: 'Alice Johnson', points: 120 },
      { name: 'Bob Smith', points: 95 },
      { name: 'Carol Williams', points: 85 },
    ]);
    setPoints(120);
    setNominations([
      { id: 1, nominee: 'Alice Johnson', award: 'Team Collaboration Star', votes: 15 },
      { id: 2, nominee: 'Bob Smith', award: 'Innovator of the Month', votes: 20 },
    ]);
    setLoading(false);
  }, []);

  const handleNominationSubmit = () => {
    if (newNomination.trim()) {
      const newNominee = {
        id: nominations.length + 1,
        nominee: newNomination,
        award: 'Nominated for Recognition',
        votes: 0,
      };
      setNominations([...nominations, newNominee]);
      setNewNomination('');
    }
  };

  const handleVote = (id) => {
    const updatedNominations = nominations.map((nom) =>
      nom.id === id ? { ...nom, votes: nom.votes + 1 } : nom
    );
    setNominations(updatedNominations);
    setVotes({ ...votes, [id]: true });
  };

  return (
    <div className="recognition-system-wrapper">
      <h1 className="recognition-system-title">Recognition System</h1>

      {loading ? (
        <p className="recognition-loading">Loading...</p>
      ) : (
        <>
          {/* Badge Display */}
          <section className="recognition-badges-section">
            <h2 className="recognition-badges-title">Your Badges</h2>
            <div className="recognition-badges-list">
              {badges.length > 0 ? (
                badges.map((badge) => (
                  <div key={badge.id} className="recognition-badge-card">
                    <FaMedal className="recognition-badge-icon" />
                    <h3 className="recognition-badge-name">{badge.name}</h3>
                    <p className="recognition-badge-earned">Earned: {badge.earned}</p>
                  </div>
                ))
              ) : (
                <p>No badges earned yet.</p>
              )}
            </div>
          </section>

          {/* Points and Leaderboard */}
          <section className="recognition-leaderboard-section">
            <h2 className="recognition-leaderboard-title">Leaderboard</h2>
            <p className="recognition-points">Your Points: <strong>{points}</strong></p>
            <ul className="recognition-leaderboard-list">
              {leaderboard.map((member, index) => (
                <li key={index} className="recognition-leaderboard-item">
                  <span>{index + 1}. {member.name}</span>
                  <span>{member.points} Points</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nominations and Voting */}
          <section className="recognition-nominations-section">
            <h2 className="recognition-nominations-title">Nominations and Voting</h2>
            <div className="recognition-nomination-input-wrapper">
              <FaPlus className="recognition-nomination-icon" />
              <input
                type="text"
                placeholder="Nominate someone (e.g., Alice Johnson)"
                value={newNomination}
                onChange={(e) => setNewNomination(e.target.value)}
                className="recognition-nomination-input"
              />
              <FaTrophy
                className="recognition-nomination-submit-icon"
                onClick={handleNominationSubmit}
                title="Submit Nomination"
              />
            </div>
            <ul className="recognition-nominations-list">
              {nominations.map((nom) => (
                <li key={nom.id} className="recognition-nomination-card">
                  <p>
                    <strong>{nom.nominee}</strong> - {nom.award}
                  </p>
                  <p>Votes: {nom.votes}</p>
                  <FaThumbsUp
                    className={`recognition-vote-icon ${votes[nom.id] ? 'voted' : ''}`}
                    onClick={() => !votes[nom.id] && handleVote(nom.id)}
                    title={votes[nom.id] ? 'Already Voted' : 'Vote'}
                  />
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default RecognitionSystem;
