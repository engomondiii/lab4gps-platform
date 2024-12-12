import React, { useState, useEffect } from "react";
import "../../styles/IdeaTracking.css";

const IdeaTracking = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIdea, setSelectedIdea] = useState(null);

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
            profilePhoto: "https://via.placeholder.com/50",
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
            profilePhoto: "https://via.placeholder.com/50",
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
            profilePhoto: "https://via.placeholder.com/50",
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

  return (
    <div className="tracking-container">
      <header className="tracking-header">
        <h1>Idea Tracking</h1>
        <p>Monitor the progress of submitted ideas and explore their details.</p>
      </header>

      <div className="ideas-grid">
        {!selectedIdea &&
          ideas.map((idea) => (
            <div key={idea.id} className="idea-card">
              <div className="card-header">
                <img
                  src={idea.proposer.profilePhoto}
                  alt={`${idea.proposer.name}'s profile`}
                  className="profile-photo"
                />
                <div className="proposer-info">
                  <h4 className="proposer-name">{idea.proposer.name}</h4>
                  <small className="last-updated">
                    Last Updated: {idea.lastUpdated}
                  </small>
                </div>
              </div>
              <div className="card-content">
                <h3 className="idea-title">{idea.title}</h3>
                <p className="idea-description">{idea.description}</p>
                <p className="idea-status">
                  <strong>Status:</strong> {idea.status}
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
            <p><strong>Problem:</strong> {selectedIdea.problem}</p>
            <p><strong>Solution:</strong> {selectedIdea.solution}</p>
            <p><strong>Resources:</strong> {selectedIdea.resources}</p>
            <p><strong>Alignment:</strong> {selectedIdea.alignment}</p>
            <p><strong>Tags:</strong> {selectedIdea.tags}</p>
            <p><strong>Status:</strong> {selectedIdea.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaTracking;
