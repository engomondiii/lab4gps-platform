import React from 'react';
import '../../styles/MemberProfile.css';

const MemberProfile = ({ member = {} }) => {
  // Provide default values to prevent errors if 'member' is undefined
  const {
    name = 'Unknown Member',
    role = 'N/A',
    expertise = [],
    projects = [],
    badges = [],
    contact = {},
    achievements = [],
  } = member;

  return (
    <div className="member-profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img
            src={`https://ui-avatars.com/api/?name=${name}&background=367162&color=fff&size=128`}
            alt={`${name}'s Avatar`}
          />
        </div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p className="role">{role}</p>
          <p className="expertise">
            <strong>Expertise:</strong> {expertise.length > 0 ? expertise.join(', ') : 'None'}
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <section className="projects-section">
        <h3>Ongoing Projects</h3>
        {projects.length > 0 ? (
          <ul className="project-list">
            {projects.map((project, index) => (
              <li key={index} className="project-item">
                {project}
              </li>
            ))}
          </ul>
        ) : (
          <p>No ongoing projects.</p>
        )}
      </section>

      {/* Badges Section */}
      <section className="badges-section">
        <h3>Badges Earned</h3>
        {badges.length > 0 ? (
          <div className="badge-list">
            {badges.map((badge, index) => (
              <div key={index} className="badge-card">
                🏅 <span>{badge}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>No badges earned yet.</p>
        )}
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h3>Achievements</h3>
        {achievements.length > 0 ? (
          <ul className="achievement-list">
            {achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">
                {achievement}
              </li>
            ))}
          </ul>
        ) : (
          <p>No achievements yet.</p>
        )}
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h3>Contact</h3>
        <div className="contact-links">
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className="contact-link">
              📧 Email
            </a>
          ) : (
            <p>No email provided.</p>
          )}
          {contact.linkedin ? (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              🔗 LinkedIn
            </a>
          ) : (
            <p>No LinkedIn profile provided.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MemberProfile;
