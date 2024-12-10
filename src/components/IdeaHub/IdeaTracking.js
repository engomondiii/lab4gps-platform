import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/IdeaTracking.css";

const IdeaTracking = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching ideas from an API
    const fetchIdeas = () => {
      const dummyIdeas = [
        {
          id: "1",
          title: "Community Solar Lighting Program",
          status: "Under Review",
          lastUpdated: "2023-12-10",
        },
        {
          id: "2",
          title: "Mobile Health Clinic",
          status: "In Development",
          lastUpdated: "2023-12-08",
        },
        {
          id: "3",
          title: "AI-Powered Education Platform",
          status: "Submitted",
          lastUpdated: "2023-12-05",
        },
      ];

      setIdeas(dummyIdeas);
      setLoading(false);
    };

    fetchIdeas();
  }, []);

  if (loading) {
    return <div className="loading">Loading tracked ideas...</div>;
  }

  return (
    <div className="tracking-container">
      <header className="tracking-header">
        <h1>Idea Tracking</h1>
        <p>Monitor the progress of your submitted ideas in real-time.</p>
      </header>

      <div className="ideas-list">
        {ideas.map((idea) => (
          <div key={idea.id} className="idea-card">
            <h3>{idea.title}</h3>
            <p>
              <strong>Status:</strong> {idea.status}
            </p>
            <p>
              <strong>Last Updated:</strong> {idea.lastUpdated}
            </p>
            <button
              className="view-details-btn"
              onClick={() => navigate(`/idea-hub/idea/${idea.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeaTracking;
