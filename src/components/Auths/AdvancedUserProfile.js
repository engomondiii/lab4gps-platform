import React, { useState, useEffect } from 'react';
import { FaEdit, FaCheckCircle, FaPlusCircle, FaRegSave } from 'react-icons/fa';
import '../../styles/AdvancedUserProfile.css'; // Importing the updated CSS styles

// Dummy data to simulate the profile
const dummyData = {
  user: {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
  },
  phone_number: "+1234567890",
  profile_picture: "https://via.placeholder.com/150",
  date_of_birth: "1990-01-01",
  gender: "Male",
  country: "USA",
  state: "California",
  city: "Los Angeles",
  time_zone: "PST",
  job_title: "Software Engineer",
  organization: "TechCorp",
  skills: ["Python", "Django", "Project Management"],
  education_background: "BS in Computer Science",
  work_experience: "5+ years of experience in software development.",
  certifications_awards: "Certified Python Developer",
  preferred_communication_method: "Email",
  language_preference: "English",
  social_links: {
    LinkedIn: "https://www.linkedin.com/in/johndoe/",
    GitHub: "https://github.com/johndoe",
  },
  collaboration_status: "Available for Projects",
  badges: {
    "Completed Project A": "https://via.placeholder.com/100",
    "Contributor Badge": "https://via.placeholder.com/100",
  },
  profile_views: 120,
};

const AdvancedUserProfile = () => {
  const [profile, setProfile] = useState(dummyData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    // Logic to save the data (e.g., API call to the backend)
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="user-info">
          <img src={profile.profile_picture} alt="Profile" className="profile-img" />
          <div className="user-details">
            <h1>{profile.user.firstName} {profile.user.lastName}</h1>
            <p>{profile.user.email}</p>
          </div>
        </div>
        <div className="edit-button" onClick={handleEdit}>
          {isEditing ? <FaRegSave /> : <FaEdit />}
          <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
        </div>
      </header>

      <div className="profile-body">
        <div className="section">
          <h2>Core Profile Information</h2>
          <div className="info-group">
            <label>Phone Number:</label>
            {isEditing ? (
              <input type="text" defaultValue={profile.phone_number} />
            ) : (
              <span>{profile.phone_number}</span>
            )}
          </div>
          <div className="info-group">
            <label>Date of Birth:</label>
            {isEditing ? (
              <input type="date" defaultValue={profile.date_of_birth} />
            ) : (
              <span>{profile.date_of_birth}</span>
            )}
          </div>
          <div className="info-group">
            <label>Gender:</label>
            {isEditing ? (
              <select defaultValue={profile.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span>{profile.gender}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Professional Information</h2>
          <div className="info-group">
            <label>Job Title:</label>
            {isEditing ? (
              <input type="text" defaultValue={profile.job_title} />
            ) : (
              <span>{profile.job_title}</span>
            )}
          </div>
          <div className="info-group">
            <label>Organization:</label>
            {isEditing ? (
              <input type="text" defaultValue={profile.organization} />
            ) : (
              <span>{profile.organization}</span>
            )}
          </div>
          <div className="info-group">
            <label>Skills:</label>
            {isEditing ? (
              <input type="text" defaultValue={profile.skills.join(", ")} />
            ) : (
              <span>{profile.skills.join(", ")}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Preferences</h2>
          <div className="info-group">
            <label>Preferred Communication Method:</label>
            {isEditing ? (
              <select defaultValue={profile.preferred_communication_method}>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="None">None</option>
              </select>
            ) : (
              <span>{profile.preferred_communication_method}</span>
            )}
          </div>
          <div className="info-group">
            <label>Language Preference:</label>
            {isEditing ? (
              <input type="text" defaultValue={profile.language_preference} />
            ) : (
              <span>{profile.language_preference}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Social Links</h2>
          <div className="info-group">
            <label>LinkedIn:</label>
            <a href={profile.social_links.LinkedIn} target="_blank" rel="noopener noreferrer">{profile.social_links.LinkedIn}</a>
          </div>
          <div className="info-group">
            <label>GitHub:</label>
            <a href={profile.social_links.GitHub} target="_blank" rel="noopener noreferrer">{profile.social_links.GitHub}</a>
          </div>
        </div>

        <div className="section">
          <h2>Gamification</h2>
          <div className="badges">
            <h3>Badges</h3>
            {Object.keys(profile.badges).map((badge, index) => (
              <div className="badge" key={index}>
                <img src={profile.badges[badge]} alt={badge} />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Collaboration Status</h2>
          <div className="info-group">
            <label>Status:</label>
            {isEditing ? (
              <select defaultValue={profile.collaboration_status}>
                <option value="Available for Projects">Available for Projects</option>
                <option value="Busy">Busy</option>
                <option value="Not Looking">Not Looking</option>
              </select>
            ) : (
              <span>{profile.collaboration_status}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Profile Views</h2>
          <p>{profile.profile_views} views</p>
        </div>

        {isEditing && (
          <button className="save-button" onClick={handleSave}>
            <FaCheckCircle /> Save
          </button>
        )}
      </div>
    </div>
  );
};

export default AdvancedUserProfile;
