// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./protect/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import CollaborationHub from "./pages/CollaborationHub";
import Projects from "./pages/Projects";
import Startups from "./pages/Startups";
import Resources from "./pages/Resources";
import NewsEvents from "./pages/NewsEvents";
import Sponsorship from "./pages/Sponsorship";
import MemberPortalDashboard from "./pages/MemberPortalDashboard";
import InternalArchive from "./components/Archive/InternalArchive";
import IdeaHub from "./pages/IdeaHub";
import EventManagement from "./pages/EventManagement";
import Login from "./components/Auths/Login";
import Signup from "./components/Auths/Signup";
import ForgotPassword from "./components/Auths/ForgotPassword";
import Layout from "./components/Layout/Layout";
import AdvancedUserProfile from "./components/Auths/AdvancedUserProfile";
import AddProblemSolution from './components/Problem&Solution/AddProblemSolution';

// IdeaHub Pages
import IdeaHubDashboard from "./components/IdeaHub/IdeaHubDashboard";
import ProposeIdea from "./components/IdeaHub/ProposeIdea";
import IdeaDetails from "./components/IdeaHub/IdeaDetails";
import IdeaDiscussion from "./components/IdeaHub/IdeaDiscussion";
import IdeaVoting from "./components/IdeaHub/IdeaVoting";
import IdeaTracking from "./components/IdeaHub/IdeaTracking";
import Leaderboard from "./components/IdeaHub/Leaderboard";

import "./styles/global.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route path="/add" element={<AddProblemSolution />} />

          {/* Collaboration Hub Routes with Path Parameters */}
          {/* Redirect /collaboration-hub to /collaboration-hub/startups */}
          <Route
            path="/collaboration-hub"
            element={<Navigate to="/collaboration-hub/startups" replace />}
          />
          {/* Detailed View Route */}
          <Route
            path="/collaboration-hub/:section/:cardId"
            element={
              <Layout>
                <CollaborationHub />
              </Layout>
            }
          />
          {/* Section Route */}
          <Route
            path="/collaboration-hub/:section"
            element={
              <Layout>
                <CollaborationHub />
              </Layout>
            }
          />

          {/* Other Public Routes */}
          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
          <Route
            path="/startups"
            element={
              <Layout>
                <Startups />
              </Layout>
            }
          />
          <Route
            path="/resources"
            element={
              <Layout>
                <Resources />
              </Layout>
            }
          />
          <Route
            path="/news-events"
            element={
              <Layout>
                <NewsEvents />
              </Layout>
            }
          />
          <Route
            path="/sponsorship"
            element={
              <Layout>
                <Sponsorship />
              </Layout>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/member-portal/dashboard"
            element={
              <ProtectedRoute>
                <MemberPortalDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/archive"
            element={
              <ProtectedRoute>
                <InternalArchive />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/idea-hub"
            element={
              <ProtectedRoute>
                <IdeaHub />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/event-management"
            element={
              <ProtectedRoute>
                <EventManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/profile"
            element={
              <ProtectedRoute>
                <AdvancedUserProfile />
              </ProtectedRoute>
            }
          />

          {/* IdeaHub Pages - Protected Routes */}
          <Route
            path="/member-portal/idea-hub/dashboard"
            element={
              <ProtectedRoute>
                <IdeaHubDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/idea-hub/propose"
            element={
              <ProtectedRoute>
                <ProposeIdea />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/idea-hub/idea/:id"
            element={
              <ProtectedRoute>
                <IdeaDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/idea-hub/idea/:id/discussion"
            element={
              <ProtectedRoute>
                <IdeaDiscussion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/idea-hub/vote"
            element={
              <ProtectedRoute>
                <IdeaVoting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/idea-hub/tracking"
            element={
              <ProtectedRoute>
                <IdeaTracking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-portal/idea-hub/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
