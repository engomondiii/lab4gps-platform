import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/IdeaDetails.css";

const IdeaDetails = () => {
  const { id } = useParams(); // Retrieve the idea ID from the URL
  const navigate = useNavigate();
  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulating fetching idea details
  useEffect(() => {
    // Replace this with an API call to fetch idea details based on the ID
    const fetchIdea = () => {
      const dummyIdeas = [
        {
          id: "1",
          title: "Community Solar Lighting Program",
          problem:
            "Energy access is a significant issue in rural areas, leaving many communities without reliable lighting solutions.",
          solution:
            "Deploy solar-powered lighting systems in rural communities with training on maintenance and usage.",
          resources: "Solar panels, batteries, installation tools, training costs",
          alignment:
            "This idea aligns with Lab4GPS's mission to promote sustainability and empower underserved communities.",
          tags: ["Environment", "Renewable Energy", "Sustainability"],
          status: "Under Review",
        },
        {
          id: "2",
          title: "Mobile Health Clinic",
          problem:
            "Lack of access to medical facilities in remote areas results in preventable health issues.",
          solution:
            "Implement a mobile health clinic equipped with telemedicine capabilities to serve remote populations.",
          resources: "Mobile van, medical equipment, telemedicine software, staff salaries",
          alignment:
            "This project directly supports our goal of improving healthcare access in underserved regions.",
          tags: ["Health", "Technology"],
          status: "Submitted",
        },
      ];

      const selectedIdea = dummyIdeas.find((idea) => idea.id === id);
      setIdea(selectedIdea);
      setLoading(false);
    };

    fetchIdea();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading idea details...</div>;
  }

  if (!idea) {
    return <div className="error">Idea not found.</div>;
  }

  return (
    <div className="idea-details-container">
      <header className="idea-details-header">
        <h1>{idea.title}</h1>
        <p>
          <strong>Status:</strong> {idea.status}
        </p>
      </header>
      <div className="idea-details-content">
        <section className="idea-details-section">
          <h2>Problem Addressed</h2>
          <p>{idea.problem}</p>
        </section>
        <section className="idea-details-section">
          <h2>Proposed Solution</h2>
          <p>{idea.solution}</p>
        </section>
        <section className="idea-details-section">
          <h2>Estimated Resources Required</h2>
          <p>{idea.resources}</p>
        </section>
        <section className="idea-details-section">
          <h2>Alignment with Lab4GPS Goals</h2>
          <p>{idea.alignment}</p>
        </section>
        <section className="idea-details-section">
          <h2>Tags</h2>
          <div className="tags-container">
            {idea.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
      <footer className="idea-details-footer">
        <button
          className="collaborate-btn"
          onClick={() => navigate(`/idea-hub/idea/${id}/discussion`)}
        >
          Collaborate on this Idea
        </button>
      </footer>
    </div>
  );
};

export default IdeaDetails;
