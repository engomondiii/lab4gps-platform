import React, { useState, useEffect } from "react";
import "../../styles/Leaderboard.css";

const Leaderboard = () => {
  const [topContributors, setTopContributors] = useState([]);
  const [impactfulIdeas, setImpactfulIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchLeaderboardData = () => {
      // Dummy data for top contributors
      const contributors = [
        { id: 1, name: "Alice Johnson", contributions: 12, recognition: "Top Contributor of the Month" },
        { id: 2, name: "Bob Smith", contributions: 10, recognition: "Best Innovator" },
        { id: 3, name: "Catherine Lee", contributions: 8, recognition: "Community Builder Award" },
      ];

      // Dummy data for impactful ideas
      const ideas = [
        { id: 1, title: "Community Solar Lighting Program", votes: 150, status: "Implemented" },
        { id: 2, title: "Mobile Health Clinic", votes: 120, status: "In Development" },
        { id: 3, title: "AI-Powered Education Platform", votes: 100, status: "Under Review" },
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
              <h3>{contributor.name}</h3>
              <p>
                <strong>Contributions:</strong> {contributor.contributions}
              </p>
              <p>
                <strong>Recognition:</strong> {contributor.recognition}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="ideas-section">
        <h2>Most Impactful Ideas</h2>
        <div className="ideas-list">
          {impactfulIdeas.map((idea) => (
            <div key={idea.id} className="idea-card">
              <h3>{idea.title}</h3>
              <p>
                <strong>Votes:</strong> {idea.votes}
              </p>
              <p>
                <strong>Status:</strong> {idea.status}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
