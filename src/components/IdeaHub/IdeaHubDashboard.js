import React, { useState } from "react";
import ProposeIdea from "./ProposeIdea";
import IdeaDetails from "./IdeaDetails";
import IdeaDiscussion from "./IdeaDiscussion";
import IdeaVoting from "./IdeaVoting";
import IdeaTracking from "./IdeaTracking";
import Leaderboard from "./Leaderboard";
import "../../styles/IdeaHubDashboard.css";

const IdeaHubDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [ideas, setIdeas] = useState([
    {
      id: "1",
      title: "Community Solar Lighting Program",
      description:
        "A project to bring sustainable solar lighting to underserved communities.",
      attachments: "https://via.placeholder.com/300",
      problem: "Lack of reliable lighting in rural areas.",
      solution: "Deploy solar-powered lights in key locations.",
      resources: "$10,000 for initial deployment.",
      alignment: "Supports sustainability and rural development goals.",
      tags: "Environment, Sustainability, Renewable Energy",
    },
    {
      id: "2",
      title: "Mobile Health Clinic",
      description:
        "A mobile solution to provide healthcare services to remote areas.",
      attachments: "https://via.placeholder.com/300",
      problem: "Limited access to healthcare in remote regions.",
      solution: "Deploy mobile clinics with essential medical equipment.",
      resources: "$20,000 for a fully equipped van.",
      alignment: "Improves healthcare accessibility.",
      tags: "Health, Accessibility, Innovation",
    },
    {
      id: "3",
      title: "AI-Powered Education Platform",
      description:
        "An AI-driven platform to revolutionize the way students learn.",
      attachments: "https://via.placeholder.com/300",
      problem: "Lack of personalized learning tools.",
      solution: "Create an AI platform that adapts to individual student needs.",
      resources: "$50,000 for platform development.",
      alignment: "Advances educational technology.",
      tags: "Education, AI, Technology",
    },
  ]);

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
        return <IdeaDetails />;
      default:
        return (
          <div className="idea-feed">
            {ideas.map((idea) => (
              <div key={idea.id} className="idea-post">
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
                <div className="idea-details">
                  <p>
                    <strong>Problem:</strong> {idea.problem}
                  </p>
                  <p>
                    <strong>Solution:</strong> {idea.solution}
                  </p>
                  <p>
                    <strong>Resources:</strong> {idea.resources}
                  </p>
                  <p>
                    <strong>Alignment:</strong> {idea.alignment}
                  </p>
                  <p>
                    <strong>Tags:</strong> {idea.tags}
                  </p>
                </div>
                <div className="idea-actions">
                  <button
                    className="discussion-button"
                    onClick={() => setActivePage("discussion")}
                  >
                    Join Discussion
                  </button>
                  <button
                    className="vote-button"
                    onClick={() => setActivePage("voting")}
                  >
                    Vote for Idea
                  </button>
                  <button
                    className="track-button"
                    onClick={() => setActivePage("tracking")}
                  >
                    Track Idea
                  </button>
                </div>
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
