import React, { useState, useEffect } from 'react';
import { FaEdit, FaCheckCircle, FaRegSave } from 'react-icons/fa';
import '../../styles/AdvancedUserProfile.css';
import {
  getAdvancedProfile,
  updateAdvancedProfile,
  getProfileMetrics,
  updateCollaborationStatus,
} from '../../services/ProfileService';

const AdvancedUserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch the advanced user profile and metrics on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getAdvancedProfile();
        setProfile(profileData);
        const metricsData = await getProfileMetrics();
        setMetrics(metricsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => setIsEditing(!isEditing);

  const handleSave = async () => {
    if (!profile) return;

    setIsSaving(true);
    try {
      const updatedProfile = await updateAdvancedProfile(profile);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCollaborationStatusChange = async (newStatus) => {
    try {
      await updateCollaborationStatus(newStatus);
      setProfile((prevProfile) => ({
        ...prevProfile,
        collaboration_status: newStatus,
      }));
    } catch (error) {
      console.error('Failed to update collaboration status:', error);
    }
  };

  if (!profile || !metrics) {
    return <div className="profile-container">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="user-info">
          <img
            src={profile.profile_picture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-img"
          />
          <div className="user-details">
            <h1>
              {profile.user?.first_name || 'N/A'} {profile.user?.last_name || 'N/A'}
            </h1>
            <p>{profile.user?.email || 'N/A'}</p>
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
              <input
                type="text"
                value={profile.phone_number || ''}
                onChange={(e) =>
                  setProfile({ ...profile, phone_number: e.target.value })
                }
              />
            ) : (
              <span>{profile.phone_number || 'N/A'}</span>
            )}
          </div>
          <div className="info-group">
            <label>Date of Birth:</label>
            {isEditing ? (
              <input
                type="date"
                value={profile.date_of_birth || ''}
                onChange={(e) =>
                  setProfile({ ...profile, date_of_birth: e.target.value })
                }
              />
            ) : (
              <span>{profile.date_of_birth || 'N/A'}</span>
            )}
          </div>
          <div className="info-group">
            <label>Gender:</label>
            {isEditing ? (
              <select
                value={profile.gender || ''}
                onChange={(e) =>
                  setProfile({ ...profile, gender: e.target.value })
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span>{profile.gender || 'N/A'}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Professional Information</h2>
          <div className="info-group">
            <label>Job Title:</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.job_title || ''}
                onChange={(e) =>
                  setProfile({ ...profile, job_title: e.target.value })
                }
              />
            ) : (
              <span>{profile.job_title || 'N/A'}</span>
            )}
          </div>
          <div className="info-group">
            <label>Organization:</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.organization || ''}
                onChange={(e) =>
                  setProfile({ ...profile, organization: e.target.value })
                }
              />
            ) : (
              <span>{profile.organization || 'N/A'}</span>
            )}
          </div>
          <div className="info-group">
            <label>Skills:</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.skills?.join(', ') || ''}
                onChange={(e) =>
                  setProfile({ ...profile, skills: e.target.value.split(', ') })
                }
              />
            ) : (
              <span>{profile.skills?.join(', ') || 'N/A'}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Preferences</h2>
          <div className="info-group">
            <label>Preferred Communication Method:</label>
            {isEditing ? (
              <select
                value={profile.preferred_communication_method || ''}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    preferred_communication_method: e.target.value,
                  })
                }
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="None">None</option>
              </select>
            ) : (
              <span>{profile.preferred_communication_method || 'N/A'}</span>
            )}
          </div>
          <div className="info-group">
            <label>Language Preference:</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.language_preference || ''}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    language_preference: e.target.value,
                  })
                }
              />
            ) : (
              <span>{profile.language_preference || 'N/A'}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Social Links</h2>
          <div className="info-group">
            <label>LinkedIn:</label>
            <a
              href={profile.social_links?.LinkedIn || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.social_links?.LinkedIn || 'N/A'}
            </a>
          </div>
          <div className="info-group">
            <label>GitHub:</label>
            <a
              href={profile.social_links?.GitHub || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.social_links?.GitHub || 'N/A'}
            </a>
          </div>
        </div>

        <div className="section">
          <h2>Collaboration Status</h2>
          <div className="info-group">
            <label>Status:</label>
            {isEditing ? (
              <select
                value={profile.collaboration_status || ''}
                onChange={(e) => handleCollaborationStatusChange(e.target.value)}
              >
                <option value="Available for Projects">Available for Projects</option>
                <option value="Busy">Busy</option>
                <option value="Not Looking">Not Looking</option>
              </select>
            ) : (
              <span>{profile.collaboration_status || 'N/A'}</span>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Profile Views</h2>
          <p>{metrics.profile_views || 0} views</p>
          <p>Profile Completeness: {metrics.profile_completeness || 0}%</p>
        </div>

        {isEditing && (
          <button
            className="save-button"
            onClick={handleSave}
            disabled={isSaving}
          >
            <FaCheckCircle /> {isSaving ? 'Saving...' : 'Save'}
          </button>
        )}
      </div>
    </div>
  );
};

export default AdvancedUserProfile;
