import React from "react";
import { useState } from "react";
import ProposeIdea from "./ProposeIdea";
import IdeaDetails from "./IdeaDetails";
import IdeaDiscussion from "./IdeaDiscussion";
import IdeaVoting from "./IdeaVoting";
import IdeaTracking from "./IdeaTracking";
import Leaderboard from "./Leaderboard";
import "../../styles/IdeaHubDashboard.css";

const IdeaHubDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderActivePage = () => {
    switch (activePage) {
      case "propose":
        return <ProposeIdea />;
      case "tracking":
        return <IdeaTracking />;
      case "leaderboard":
        return <Leaderboard />;
      case "ideaDetails":
        return <IdeaDetails />;
      case "discussion":
        return <IdeaDiscussion />;
      case "voting":
        return <IdeaVoting />;
      default:
        return (
          <div>
            <header className="dashboard-header">
              <h1>Idea Hub Dashboard</h1>
              <p>Welcome to the Idea Hub, your space for proposing, refining, and tracking innovative ideas. Select an option below to navigate to the specific section you need.</p>
            </header>

            <div className="ideas-overview-section">
              <h2>Ideas Overview</h2>
              <div className="ideas-grid">
                <div
                  className="idea-card"
                  onClick={() => setActivePage("ideaDetails")}
                >
                  <h3>Community Solar Lighting Program</h3>
                  <p>Status: Under Review</p>
                  <button
                    className="idea-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePage("voting");
                    }}
                  >
                    Vote
                  </button>
                </div>
                <div
                  className="idea-card"
                  onClick={() => setActivePage("ideaDetails")}
                >
                  <h3>Mobile Health Clinic</h3>
                  <p>Status: Submitted</p>
                  <button
                    className="idea-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePage("voting");
                    }}
                  >
                    Vote
                  </button>
                </div>
                <div
                  className="idea-card"
                  onClick={() => setActivePage("ideaDetails")}
                >
                  <h3>AI-Powered Education Platform</h3>
                  <p>Status: In Development</p>
                  <button
                    className="idea-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePage("voting");
                    }}
                  >
                    Vote
                  </button>
                </div>
              </div>
            </div>

            <footer className="dashboard-footer">
              <p>
                Use the Idea Hub to turn your innovative concepts into actionable projects. Explore, collaborate, and track the progress of ideas that matter.
              </p>
            </footer>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button
          className={`header-tab ${activePage === "propose" ? "active" : ""}`}
          onClick={() => setActivePage("propose")}
        >
          Propose Idea
        </button>
        <button
          className={`header-tab ${activePage === "tracking" ? "active" : ""}`}
          onClick={() => setActivePage("tracking")}
        >
          Track Ideas
        </button>
        <button
          className={`header-tab ${activePage === "leaderboard" ? "active" : ""}`}
          onClick={() => setActivePage("leaderboard")}
        >
          Leaderboard
        </button>
        <button
          className={`header-tab ${activePage === "discussion" ? "active" : ""}`}
          onClick={() => setActivePage("discussion")}
        >
          Discussion
        </button>
        <button
          className={`header-tab ${activePage === "voting" ? "active" : ""}`}
          onClick={() => setActivePage("voting")}
        >
          Voting
        </button>
      </div>

      <div className="content-container">{renderActivePage()}</div>
    </div>
  );
};

export default IdeaHubDashboard;
