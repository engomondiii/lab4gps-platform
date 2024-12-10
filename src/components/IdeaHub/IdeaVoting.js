import React, { useState, useEffect } from "react";
import "../../styles/IdeaVoting.css";

const IdeaVoting = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching ideas from an API
    const fetchIdeas = () => {
      const dummyIdeas = [
        {
          id: "1",
          title: "Community Solar Lighting Program",
          description:
            "Deploy solar-powered lighting systems in rural communities with training on maintenance and usage.",
          votes: 50,
          status: "Under Review",
        },
        {
          id: "2",
          title: "Mobile Health Clinic",
          description:
            "Implement a mobile health clinic equipped with telemedicine capabilities to serve remote populations.",
          votes: 30,
          status: "Submitted",
        },
        {
          id: "3",
          title: "AI-Powered Education Platform",
          description:
            "Use AI to personalize education in underserved schools, improving engagement and outcomes.",
          votes: 75,
          status: "In Development",
        },
      ];

      setIdeas(dummyIdeas);
      setLoading(false);
    };

    fetchIdeas();
  }, []);

  const handleVote = (id, increment) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea.id === id
          ? {
              ...idea,
              votes: idea.votes + (increment ? 1 : -1),
            }
          : idea
      )
    );
  };

  if (loading) {
    return <div className="loading">Loading ideas for voting...</div>;
  }

  return (
    <div className="voting-container">
      <header className="voting-header">
        <h1>Vote for Ideas</h1>
        <p>
          Review and prioritize ideas by casting your votes. The most popular
          ideas will be prioritized for implementation.
        </p>
      </header>

      <div className="ideas-grid">
        {ideas.map((idea) => (
          <div key={idea.id} className="idea-card">
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <p>
              <strong>Status:</strong> {idea.status}
            </p>
            <div className="vote-actions">
              <button
                className="upvote-btn"
                onClick={() => handleVote(idea.id, true)}
              >
                Upvote
              </button>
              <button
                className="downvote-btn"
                onClick={() => handleVote(idea.id, false)}
              >
                Downvote
              </button>
            </div>
            <p className="vote-count">Votes: {idea.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeaVoting;
