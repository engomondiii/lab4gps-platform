import React, { useState, useEffect } from "react";
import "../../styles/IdeaTracking.css";

const IdeaTracking = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [viewMode, setViewMode] = useState("my"); // 'my' or 'others'

  useEffect(() => {
    // Simulate fetching ideas from an API
    const fetchIdeas = () => {
      const dummyIdeas = [
        {
          id: "1",
          title: "Community Solar Lighting Program",
          status: "Under Review",
          lastUpdated: "2023-12-10",
          proposer: {
            name: "John Doe",
            profilePhoto: "https://via.placeholder.com/100x50",
          },
          description:
            "A project to bring sustainable solar lighting to underserved communities.",
          problem: "Lack of reliable lighting in rural areas.",
          solution: "Deploy solar-powered lights in key locations.",
          resources: "$10,000 for initial deployment.",
          alignment: "Supports sustainability and rural development goals.",
          tags: "Environment, Sustainability, Renewable Energy",
        },
        {
          id: "2",
          title: "Mobile Health Clinic",
          status: "In Development",
          lastUpdated: "2023-12-08",
          proposer: {
            name: "Jane Smith",
            profilePhoto: "https://via.placeholder.com/100x50",
          },
          description:
            "A mobile solution to provide healthcare services to remote areas.",
          problem: "Limited access to healthcare in remote regions.",
          solution: "Deploy mobile clinics with essential medical equipment.",
          resources: "$20,000 for a fully equipped van.",
          alignment: "Improves healthcare accessibility.",
          tags: "Health, Accessibility, Innovation",
        },
        {
          id: "3",
          title: "AI-Powered Education Platform",
          status: "Submitted",
          lastUpdated: "2023-12-05",
          proposer: {
            name: "Alex Johnson",
            profilePhoto: "https://via.placeholder.com/100x50",
          },
          description:
            "An AI-driven platform to revolutionize the way students learn.",
          problem: "Lack of personalized learning tools.",
          solution: "Create an AI platform that adapts to individual student needs.",
          resources: "$50,000 for platform development.",
          alignment: "Advances educational technology.",
          tags: "Education, AI, Technology",
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

  const myIdeas = ideas.filter((idea) => idea.proposer.name === "John Doe");
  const othersIdeas = ideas.filter((idea) => idea.proposer.name !== "John Doe");

  const displayedIdeas = viewMode === "my" ? myIdeas : othersIdeas;

  return (
    <div className="tracking-container">
      {/* Top Section with Title and Description */}
      <header className="tracking-header">
        <h1 className="tracking-title">Idea Tracking</h1>
        <p className="tracking-description">
          Keep track of the progress of ideas you have proposed and explore those proposed by others.
        </p>
      </header>

      {/* Toggle between My Ideas and Other Ideas */}
      <div className="view-mode-toggle">
        <button
          className={`toggle-btn ${viewMode === "my" ? "active" : ""}`}
          onClick={() => {
            setSelectedIdea(null);
            setViewMode("my");
          }}
        >
          My Ideas
        </button>
        <button
          className={`toggle-btn ${viewMode === "others" ? "active" : ""}`}
          onClick={() => {
            setSelectedIdea(null);
            setViewMode("others");
          }}
        >
          Other People's Ideas
        </button>
      </div>

      <div className="ideas-section">
        {!selectedIdea && (
          <div className="ideas-grid">
            {displayedIdeas.map((idea) => (
              <div key={idea.id} className="idea-card">
                <div className="card-content">
                  <h3 className="idea-title">{idea.title}</h3>
                  <p className="idea-description">{idea.description}</p>
                  <p className="idea-status">
                    <strong>Status:</strong> {idea.status}
                  </p>
                  <small className="last-updated">
                    Last Updated: {idea.lastUpdated}
                  </small>
                </div>
                <div className="proposer-section">
                  <img
                    src={idea.proposer.profilePhoto}
                    alt={`${idea.proposer.name}'s profile`}
                    className="proposer-photo"
                  />
                  <div className="proposer-details">
                    <strong className="proposer-name">{idea.proposer.name}</strong>
                  </div>
                </div>
                <button
                  className="view-details-btn"
                  onClick={() => setSelectedIdea(idea)}
                >
                  View Details
                </button>
              </div>
            ))}
            {displayedIdeas.length === 0 && (
              <div className="no-ideas">
                {viewMode === "my" ? "You haven't proposed any ideas yet." : "No ideas from others at the moment."}
              </div>
            )}
          </div>
        )}

        {selectedIdea && (
          <div className="idea-details">
            <button
              className="back-btn"
              onClick={() => setSelectedIdea(null)}
            >
              ← Back
            </button>
            <h2 className="details-title">{selectedIdea.title}</h2>
            <div className="details-info">
              <p><strong>Proposer:</strong> {selectedIdea.proposer.name}</p>
              <p><strong>Problem:</strong> {selectedIdea.problem}</p>
              <p><strong>Solution:</strong> {selectedIdea.solution}</p>
              <p><strong>Resources:</strong> {selectedIdea.resources}</p>
              <p><strong>Alignment:</strong> {selectedIdea.alignment}</p>
              <p><strong>Tags:</strong> {selectedIdea.tags}</p>
              <p><strong>Status:</strong> {selectedIdea.status}</p>
              <p><strong>Last Updated:</strong> {selectedIdea.lastUpdated}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaTracking;
