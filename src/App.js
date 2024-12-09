import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext"; // Import AuthContext
import ProtectedRoute from "./protect/ProtectedRoute"; // Import ProtectedRoute
import Home from "./pages/Home";
import About from "./pages/About";
import CollaborationHub from "./pages/CollaborationHub";
import Projects from "./pages/Projects";
import Startups from "./pages/Startups";
import Resources from "./pages/Resources";
import NewsEvents from "./pages/NewsEvents";
import Sponsorship from "./pages/Sponsorship";
import MemberPortalDashboard from "./pages/MemberPortalDashboard"; // Member Dashboard Page
import InternalArchive from "./components/Archive/InternalArchive"; // Internal Archive Page
import IdeaHub from "./pages/IdeaHub"; // Idea Hub Page
import EventManagement from "./pages/EventManagement"; // Event Management Page
import Login from "./components/Auths/Login";
import Signup from "./components/Auths/Signup";
import ForgotPassword from "./components/Auths/ForgotPassword"; // Forgot Password
import Layout from "./components/Layout/Layout"; // Layout for Navbar/Footer
import AdvancedUserProfile from "./components/Auths/AdvancedUserProfile"; // Import the Profile component
import AddProblemSolution from './components/Problem&Solution/AddProblemSolution';
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
          <Route path="/add" element={<AddProblemSolution />} />
          <Route
            path="/forgot-password"
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            path="/collaboration-hub"
            element={
              <Layout>
                <CollaborationHub />
              </Layout>
            }
          />
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
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
