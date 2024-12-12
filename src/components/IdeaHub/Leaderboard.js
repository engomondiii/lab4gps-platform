import React, { useState, useEffect } from "react";
import "../../styles/Leaderboard.css";

const Leaderboard = () => {
  const [topContributors, setTopContributors] = useState([]);
  const [impactfulIdeas, setImpactfulIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchLeaderboardData = () => {
      // Dummy data for top contributors
      const contributors = [
        {
          id: 1,
          name: "Alice Johnson",
          contributions: 12,
          recognition: "Top Contributor of the Month",
          profilePhoto: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          name: "Bob Smith",
          contributions: 10,
          recognition: "Best Innovator",
          profilePhoto: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          name: "Catherine Lee",
          contributions: 8,
          recognition: "Community Builder Award",
          profilePhoto: "https://via.placeholder.com/50",
        },
      ];

      // Dummy data for impactful ideas
      const ideas = [
        {
          id: 1,
          title: "Community Solar Lighting Program",
          votes: 150,
          status: "Implemented",
          proposer: { name: "John Doe", profilePhoto: "https://via.placeholder.com/50" },
          description: "A project to bring sustainable solar lighting to underserved communities.",
        },
        {
          id: 2,
          title: "Mobile Health Clinic",
          votes: 120,
          status: "In Development",
          proposer: { name: "Jane Smith", profilePhoto: "https://via.placeholder.com/50" },
          description: "A mobile solution to provide healthcare services to remote areas.",
        },
        {
          id: 3,
          title: "AI-Powered Education Platform",
          votes: 100,
          status: "Under Review",
          proposer: { name: "Alex Johnson", profilePhoto: "https://via.placeholder.com/50" },
          description: "An AI-driven platform to revolutionize the way students learn.",
        },
      ];

      setTopContributors(contributors);
      setImpactfulIdeas(ideas);
      setLoading(false);
    };

    fetchLeaderboardData();
  }, []);

  if (loading) {
    return <div className="loading">Loading leaderboard data...</div>;
  }

  return (
    <div className="leaderboard-container">
      <header className="leaderboard-header">
        <h1>Leaderboard</h1>
        <p>Recognizing our top contributors and impactful ideas.</p>
      </header>

      <section className="contributors-section">
        <h2>Top Contributors</h2>
        <div className="contributors-list">
          {topContributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card">
              <div className="card-header">
                <img
                  src={contributor.profilePhoto}
                  alt={`${contributor.name}'s profile`}
                  className="profile-photo"
                />
                <h3 className="contributor-name">{contributor.name}</h3>
              </div>
              <div className="card-content">
                <p>
                  <strong>Contributions:</strong> {contributor.contributions}
                </p>
                <p>
                  <strong>Recognition:</strong> {contributor.recognition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ideas-section">
        <h2>Most Impactful Ideas</h2>
        <div className="ideas-grid">
          {!selectedIdea &&
            impactfulIdeas.map((idea) => (
              <div key={idea.id} className="idea-card">
                <div className="card-header">
                  <img
                    src={idea.proposer.profilePhoto}
                    alt={`${idea.proposer.name}'s profile`}
                    className="profile-photo"
                  />
                  <div className="proposer-info">
                    <h4 className="proposer-name">{idea.proposer.name}</h4>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="idea-title">{idea.title}</h3>
                  <p className="idea-description">{idea.description}</p>
                  <p className="idea-status">
                    <strong>Status:</strong> {idea.status}
                  </p>
                  <p className="idea-votes">
                    <strong>Votes:</strong> {idea.votes}
                  </p>
                </div>
                <button
                  className="view-details-btn"
                  onClick={() => setSelectedIdea(idea)}
                >
                  View Details
                </button>
              </div>
            ))}

          {selectedIdea && (
            <div className="idea-details">
              <button
                className="back-btn"
                onClick={() => setSelectedIdea(null)}
              >
                ← Back to Ideas
              </button>
              <h2>{selectedIdea.title}</h2>
              <p><strong>Proposer:</strong> {selectedIdea.proposer.name}</p>
              <p><strong>Description:</strong> {selectedIdea.description}</p>
              <p><strong>Votes:</strong> {selectedIdea.votes}</p>
              <p><strong>Status:</strong> {selectedIdea.status}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
