import React, { useState, useEffect } from "react";
import "../../styles/AdvancedUserProfile.css";
import { useAuth } from "../../Context/AuthContext";

const AdvancedUserProfile = () => {
  const { user, updateProfile, updateProfilePicture, changePassword, logout } = useAuth();

  // Log the user object for debugging
  useEffect(() => {
    console.log("User object on load:", user);
    if (!user?.first_name || !user?.last_name) {
      console.warn("Missing first_name or last_name in user object:", user);
    }
  }, [user]);

  const [editMode, setEditMode] = useState(false);
  const [changePasswordMode, setChangePasswordMode] = useState(false);

  // Dynamically set form data with fallback values
  const [formData, setFormData] = useState({
    firstName: user?.first_name || "",
    lastName: user?.last_name || "",
    email: user?.email || "",
    username: user?.username || "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Update formData when user changes
  useEffect(() => {
    if (user) {
      console.log("Updating formData with user data:", user);
      setFormData({
        firstName: user.first_name || "Unknown",
        lastName: user.last_name || "Unknown",
        email: user.email || "",
        username: user.username || "",
      });
    }
  }, [user]);

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      setEditMode(false);
      setSuccessMessage("Profile details updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setError("Failed to update profile.");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      await changePassword(passwordData.oldPassword, passwordData.newPassword);
      setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
      setChangePasswordMode(false);
      setSuccessMessage("Password updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setError("Failed to change password.");
    }
  };

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      try {
        await updateProfilePicture(file);
        setSuccessMessage("Profile picture updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (error) {
        setError("Failed to update profile picture.");
      }
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>My Profile</h1>
      </header>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="profile-content">
        <div className="profile-sidebar">
          <img
            src={user?.profile_picture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-picture"
          />
          <div className="edit-icon-container">
            <label className="edit-icon">
              ✏️
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                hidden
              />
            </label>
          </div>
        </div>
        <div className="profile-details">
          <form onSubmit={handleEditSubmit}>
            <div className="detail-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </div>
            <div className="detail-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </div>
            <div className="detail-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </div>
            <div className="detail-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </div>
            <div className="detail-group">
              <label>Registration Date:</label>
              <input type="text" value={user?.registration_date || ""} disabled />
            </div>
            <div className="detail-group">
              <label>Verified:</label>
              <input type="text" value={user?.is_verified ? "Yes" : "No"} disabled />
            </div>
            <button
              type="button"
              onClick={() => setEditMode(!editMode)}
              className="edit-button"
            >
              {editMode ? "Cancel" : "Edit Details"}
            </button>
            {editMode && (
              <button type="submit" className="save-button">
                Save Changes
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="password-section">
        <h2>Change Password</h2>
        <button
          onClick={() => setChangePasswordMode(!changePasswordMode)}
          className="password-button"
        >
          {changePasswordMode ? "Cancel" : "Change Password"}
        </button>
        {changePasswordMode && (
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <div className="detail-group">
              <label>Old Password:</label>
              <input
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="detail-group">
              <label>New Password:</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="detail-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Update Password</button>
          </form>
        )}
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default AdvancedUserProfile;
