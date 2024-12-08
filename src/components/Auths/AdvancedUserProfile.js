import React, { useState, useEffect } from "react";
import "../../styles/AdvancedUserProfile.css";
import { useAuth } from "../../Context/AuthContext";

const AdvancedUserProfile = () => {
  const { user, updateProfile, updateProfilePicture, changePassword, logout } = useAuth();

  useEffect(() => {
    console.log("User object on load:", user);
    if (!user?.first_name || !user?.last_name) {
      console.warn("Missing first_name or last_name in user object:", user);
    }
  }, [user]);

  const [editMode, setEditMode] = useState(false);
  const [changePasswordMode, setChangePasswordMode] = useState(false);

  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
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

  useEffect(() => {
    if (user) {
      console.log("Updating formData with user data:", user);
      setFormData({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        username: user.username || "",
      });
    }
  }, [user]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData); // Ensure API expects `first_name` and `last_name`
      setEditMode(false);
      setSuccessMessage("Profile details updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setError("Failed to update profile.");
      console.error("Error during profile update:", error);
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
      console.error("Error during password change:", error);
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
        console.error("Error updating profile picture:", error);
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
                name="first_name"
                value={formData.first_name}
                onChange={handleEditChange}
                disabled={!editMode}
              />
            </div>
            <div className="detail-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
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
