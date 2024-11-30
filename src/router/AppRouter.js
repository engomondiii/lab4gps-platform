import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CollaborationHub from '../pages/CollaborationHub';
import Projects from '../pages/Projects';
import Startups from '../pages/Startups';
import Resources from '../pages/Resources';
import NewsEvents from '../pages/NewsEvents';
import Sponsorship from '../pages/Sponsorship';
import MemberPortalLogin from '../member/MemberPortalLogin'; // Member Login
import RequestMembership from '../member/RequestMembership'; // Request Access
import MemberPortalDashboard from '../member/MemberPortalDashboard'; // Member Dashboard
import Login from '../components/Auths/Login';
import Signup from '../components/Auths/Signup';
import ForgotPassword from '../components/Auths/ForgotPassword'; // Forgot Password
import ProtectedRoute from '../protect/ProtectedRoute'; // Protected routes for general access
import MemberProtectedRoute from '../protect/MemberProtectedRoute'; // Protected route for Member Portal
import Layout from '../components/Layout/Layout'; // Layout for Navbar/Footer

const AppRouter = () => {
  return (
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

        {/* Private Routes */}
        <Route
          path="/collaboration-hub"
          element={
            <ProtectedRoute>
              <Layout>
                <CollaborationHub />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Layout>
                <Projects />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/startups"
          element={
            <ProtectedRoute>
              <Layout>
                <Startups />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Layout>
                <Resources />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news-events"
          element={
            <ProtectedRoute>
              <Layout>
                <NewsEvents />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sponsorship"
          element={
            <ProtectedRoute>
              <Layout>
                <Sponsorship />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Member Portal Routes */}
        <Route
          path="/member-portal/login"
          element={
            <Layout>
              <MemberPortalLogin />
            </Layout>
          }
        />
        <Route
          path="/member-portal/request"
          element={
            <Layout>
              <RequestMembership />
            </Layout>
          }
        />
        <Route
          path="/member-portal/dashboard"
          element={
            <MemberProtectedRoute>
              <Layout>
                <MemberPortalDashboard />
              </Layout>
            </MemberProtectedRoute>
          }
        />
        {/* Default redirect to login for /member-portal */}
        <Route
          path="/member-portal"
          element={<Layout><MemberPortalLogin /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
