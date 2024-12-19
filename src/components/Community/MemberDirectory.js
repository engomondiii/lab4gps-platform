import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaLinkedin, FaAward, FaSearch } from 'react-icons/fa';
import RecognitionSystem from './RecognitionSystem';
import '../../styles/MemberDirectory.css';

const dummyMembers = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Project Manager',
    expertise: ['Climate Change', 'Community Engagement'],
    projects: ['Clean Water Initiative', 'Sustainable Farming'],
    contact: { email: 'alice@example.com', linkedin: 'https://linkedin.com/alice' },
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Researcher',
    expertise: ['Data Analysis', 'Renewable Energy'],
    projects: ['Solar Energy Optimization'],
    contact: { email: 'bob@example.com', linkedin: 'https://linkedin.com/bob' },
  },
  {
    id: 3,
    name: 'Carol Williams',
    role: 'Volunteer',
    expertise: ['Outreach', 'Event Management'],
    projects: ['Tree Planting Campaign'],
    contact: { email: 'carol@example.com', linkedin: 'https://linkedin.com/carol' },
  },
];

const MemberDirectory = () => {
  const [members, setMembers] = useState(dummyMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [suggestedMembers, setSuggestedMembers] = useState([]);
  const [showRecognitionSystem, setShowRecognitionSystem] = useState(false); // Toggle view for RecognitionSystem

  useEffect(() => {
    const fetchCollaborationSuggestions = () => {
      const suggestions = dummyMembers.filter(member =>
        member.expertise.includes('Community Engagement')
      );
      setSuggestedMembers(suggestions);
    };

    fetchCollaborationSuggestions();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredMembers = dummyMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(value) ||
        member.role.toLowerCase().includes(value) ||
        member.expertise.some((skill) => skill.toLowerCase().includes(value))
    );

    setMembers(value ? filteredMembers : dummyMembers);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(value);

    const filteredMembers = dummyMembers.filter(
      (member) => member.role.toLowerCase() === value.toLowerCase()
    );

    setMembers(value ? filteredMembers : dummyMembers);
  };

  const handleRecognitionSystem = () => {
    setShowRecognitionSystem(true); // Toggle view to show RecognitionSystem
  };

  const handleBackToDirectory = () => {
    setShowRecognitionSystem(false); // Toggle view back to Member Directory
  };

  return (
    <div className="member-directory-wrapper">
      {showRecognitionSystem ? (
        <div>
          <button onClick={handleBackToDirectory} className="back-to-directory-button">
            Back to Member Directory
          </button>
          <RecognitionSystem />
        </div>
      ) : (
        <>
          <h1 className="member-directory-title">Member Directory</h1>
          <div className="member-directory-controls">
            <div className="search-bar-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by name, expertise, or project..."
                value={searchTerm}
                onChange={handleSearch}
                className="member-directory-search-bar"
              />
            </div>
            <select
              value={filter}
              onChange={handleFilter}
              className="member-directory-filter-dropdown"
            >
              <option value="">Filter by Role</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Researcher">Researcher</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>

          <div className="member-directory-list">
            {members.length > 0 ? (
              members.map((member) => (
                <div key={member.id} className="member-directory-card">
                  <h2 className="member-directory-name">{member.name}</h2>
                  <p className="member-directory-role"><strong>Role:</strong> {member.role}</p>
                  <p className="member-directory-expertise">
                    <strong>Expertise:</strong> {member.expertise.join(', ')}
                  </p>
                  <p className="member-directory-projects">
                    <strong>Projects:</strong> {member.projects.join(', ')}
                  </p>
                  <div className="member-directory-contact-links">
                    <FaUser className="profile-icon" title="View Profile" />
                    <a href={`mailto:${member.contact.email}`} className="contact-icon">
                      <FaEnvelope title="Email" />
                    </a>
                    <a
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <FaLinkedin title="LinkedIn" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-members-message">No members found.</p>
            )}
          </div>

          <div className="member-directory-suggestions">
            <h3 className="suggestions-title">Suggested Collaborators</h3>
            {suggestedMembers.map((member) => (
              <div key={member.id} className="suggested-member-item">
                <p>
                  {member.name} - {member.expertise.join(', ')}
                </p>
                <FaUser className="profile-icon" title="View Profile" />
              </div>
            ))}
          </div>

          <div className="member-directory-recognition">
            <h3 className="recognition-title">Celebrate Achievements</h3>
            <FaAward
              className="recognition-icon"
              onClick={handleRecognitionSystem}
              title="Go to Recognition System"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MemberDirectory;
