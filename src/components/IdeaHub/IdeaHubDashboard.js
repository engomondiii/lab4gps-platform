import React, { useState, useEffect } from "react";
import ProposeIdea from "./ProposeIdea";
import IdeaDetails from "./IdeaDetails";
import IdeaDiscussion from "./IdeaDiscussion";
import IdeaVoting from "./IdeaVoting";
import IdeaTracking from "./IdeaTracking";
import Leaderboard from "./Leaderboard";
import "../../styles/IdeaHubDashboard.css";
import IdeaHubDashboardService from "../../services/IdeaHubDashboardService";

const IdeaHubDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);

  // Fetch real proposed ideas from the backend rather than using dummy data
  useEffect(() => {
    const fetchDashboardIdeas = async () => {
      try {
        const response = await IdeaHubDashboardService.fetchDashboardIdeas();
        const dashboardData = response.data; 
        // dashboardData is expected to contain an array of objects with 'idea' and metadata fields
        // The frontend currently expects: id, title, description, problem, solution, resources, alignment, tags, attachments
        // DashboardIdeaSerializer includes idea fields via IdeaSerializer which should provide these fields.
        // We'll map them into a similar structure as previously used by the frontend:
        
        const formattedIdeas = dashboardData.map(entry => {
          const idea = entry.idea; // Contains fields from IdeaSerializer
          return {
            id: idea.id.toString(),
            title: idea.title,
            description: idea.description,
            attachments: idea.attachments,
            problem: idea.problem,
            solution: idea.solution,
            resources: idea.resources,
            alignment: idea.alignment,
            tags: idea.tags,
          };
        });

        setIdeas(formattedIdeas);
      } catch (error) {
        console.error("Error fetching dashboard ideas:", error);
      }
    };

    if (activePage === "dashboard") {
      fetchDashboardIdeas();
    }
  }, [activePage]);

  const handleIdeaClick = async (idea) => {
    // Fetch full details from the backend if needed
    // The dashboard provides partial info already, but let's fetch full details to ensure we have everything updated
    try {
      const response = await IdeaHubDashboardService.fetchIdeaDetail(idea.id);
      const fullIdea = response.data;
      // Format and combine the fetched data with existing fields for consistency
      // fullIdea fields: id, title, description, attachments, problem, solution, resources, alignment, tags
      const selected = {
        id: fullIdea.id.toString(),
        title: fullIdea.title,
        description: fullIdea.description,
        attachments: fullIdea.attachments,
        problem: fullIdea.problem,
        solution: fullIdea.solution,
        resources: fullIdea.resources,
        alignment: fullIdea.alignment,
        tags: fullIdea.tags,
      };
      setSelectedIdea(selected);
      setActivePage("ideaDetails");

      // Optionally record that the user viewed this idea (if authenticated)
      // await IdeaHubDashboardService.recordIdeaView(fullIdea.id); // only if user is authenticated
    } catch (error) {
      console.error("Error fetching idea detail:", error);
    }
  };

  const handleMinimize = () => {
    // Minimize the detailed view and return to dashboard
    setSelectedIdea(null);
    setActivePage("dashboard");
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "propose":
        return <ProposeIdea />;
      case "tracking":
        return <IdeaTracking />;
      case "leaderboard":
        return <Leaderboard />;
      case "discussion":
        return <IdeaDiscussion />;
      case "voting":
        return <IdeaVoting />;
      case "ideaDetails":
        // Display the selected idea details along with all fields from ProposeIdea
        return (
          <>
            <IdeaDetails idea={selectedIdea} />
            {selectedIdea && (
              <div className="idea-full-details" style={{ marginTop: "20px" }}>
                <h3>Full Idea Details</h3>
                <p><strong>Title:</strong> {selectedIdea.title}</p>
                <p><strong>Problem:</strong> {selectedIdea.problem}</p>
                <p><strong>Solution:</strong> {selectedIdea.solution}</p>
                <p><strong>Resources:</strong> {selectedIdea.resources}</p>
                <p><strong>Alignment:</strong> {selectedIdea.alignment}</p>
                <p><strong>Tags:</strong> {selectedIdea.tags}</p>
                {selectedIdea.attachments && (
                  <div style={{ marginTop: "10px" }}>
                    <strong>Attachments:</strong><br />
                    <img
                      src={selectedIdea.attachments}
                      alt="Idea Attachment"
                      style={{ width: "200px", borderRadius: "8px", marginTop: "5px" }}
                    />
                  </div>
                )}
                {/* Add a minimize button here to go back to dashboard */}
                <button
                  style={{ marginTop: "15px", padding: "8px 12px", background: "#367162", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
                  onClick={handleMinimize}
                >
                  Minimize
                </button>
              </div>
            )}
          </>
        );
      default:
        return (
          <div className="idea-feed">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="idea-post"
                style={{ cursor: "pointer" }}
                onClick={() => handleIdeaClick(idea)}
              >
                <h3 className="idea-title">{idea.title}</h3>
                <p className="idea-description">{idea.description}</p>
                {idea.attachments && (
                  <div className="idea-attachment">
                    <img
                      src={idea.attachments}
                      alt={`${idea.title} attachment`}
                    />
                  </div>
                )}

                {activePage === "ideaDetails" && selectedIdea && selectedIdea.id === idea.id && (
                  <div className="idea-details">
                    <p><strong>Problem:</strong> {idea.problem}</p>
                    <p><strong>Solution:</strong> {idea.solution}</p>
                    <p><strong>Resources:</strong> {idea.resources}</p>
                    <p><strong>Alignment:</strong> {idea.alignment}</p>
                    <p><strong>Tags:</strong> {idea.tags}</p>
                  </div>
                )}

                {activePage === "ideaDetails" && selectedIdea && selectedIdea.id === idea.id && (
                  <div className="idea-actions">
                    <button
                      className="discussion-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePage("discussion");
                      }}
                    >
                      Join Discussion
                    </button>
                    <button
                      className="vote-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePage("voting");
                      }}
                    >
                      Vote for Idea
                    </button>
                    <button
                      className="track-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePage("tracking");
                      }}
                    >
                      Track Idea
                    </button>
                  </div>
                )}

                {!(activePage === "ideaDetails" && selectedIdea && selectedIdea.id === idea.id) && (
                  <>
                    <p
                      style={{
                        color: "#367162",
                        fontWeight: "bold",
                        marginTop: "10px",
                        cursor: "pointer"
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIdeaClick(idea);
                      }}
                    >
                      Click to read more...
                    </p>

                    <div className="quick-actions" style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                      <button
                        className="discussion-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePage("discussion");
                        }}
                        style={{ display: "flex", alignItems: "center", gap: "5px" }}
                      >
                        💬 <span>Discussion</span>
                      </button>
                      <button
                        className="vote-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePage("voting");
                        }}
                        style={{ display: "flex", alignItems: "center", gap: "5px" }}
                      >
                        👍 <span>Vote</span>
                      </button>
                      <button
                        className="track-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePage("tracking");
                        }}
                        style={{ display: "flex", alignItems: "center", gap: "5px" }}
                      >
                        👀 <span>Track</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="idea-hub-container">
      {/* Introduction Header */}
      <header className="idea-hub-intro-header">
        <h1 className="idea-hub-title">Idea Hub Dashboard</h1>
        <p className="idea-hub-subtitle">
          Welcome to the Idea Hub, where innovation meets collaboration. Explore,
          refine, and track groundbreaking ideas that drive progress.
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className="idea-hub-tabs">
        <button
          className={`idea-hub-tab ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          Ideas
        </button>
        <button
          className={`idea-hub-tab ${activePage === "propose" ? "active" : ""}`}
          onClick={() => setActivePage("propose")}
        >
          Propose an Idea
        </button>
        <button
          className={`idea-hub-tab ${activePage === "tracking" ? "active" : ""}`}
          onClick={() => setActivePage("tracking")}
        >
          Track Ideas
        </button>
        <button
          className={`idea-hub-tab ${activePage === "leaderboard" ? "active" : ""}`}
          onClick={() => setActivePage("leaderboard")}
        >
          Leaderboard
        </button>
        <button
          className={`idea-hub-tab ${activePage === "discussion" ? "active" : ""}`}
          onClick={() => setActivePage("discussion")}
        >
          Discussions
        </button>
        <button
          className={`idea-hub-tab ${activePage === "voting" ? "active" : ""}`}
          onClick={() => setActivePage("voting")}
        >
          Voting
        </button>
      </nav>

      {/* Dynamic Content Below Tabs */}
      <main className="idea-hub-content">{renderActivePage()}</main>
    </div>
  );
};

export default IdeaHubDashboard;
