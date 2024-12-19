import React, { useState } from 'react';
import '../../styles/ProposalForm.css';

const ProposalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    resourcesNeeded: '',
    benefits: '',
    risks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      setFormData({
        title: '',
        description: '',
        resourcesNeeded: '',
        benefits: '',
        risks: ''
      });
    }
  };

  return (
    <form className="proposal-form-container" onSubmit={handleSubmit}>
      <h2 className="proposal-form-title">Submit New Proposal</h2>
      <div className="proposal-form-field">
        <label htmlFor="title" className="proposal-form-label">Project Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="proposal-form-input"
          required
        />
      </div>
      <div className="proposal-form-field">
        <label htmlFor="description" className="proposal-form-label">Detailed Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="proposal-form-textarea"
          required
        />
      </div>
      <div className="proposal-form-field">
        <label htmlFor="resourcesNeeded" className="proposal-form-label">Resources Needed:</label>
        <textarea
          id="resourcesNeeded"
          name="resourcesNeeded"
          value={formData.resourcesNeeded}
          onChange={handleChange}
          className="proposal-form-textarea"
          required
        />
      </div>
      <div className="proposal-form-field">
        <label htmlFor="benefits" className="proposal-form-label">Potential Benefits:</label>
        <textarea
          id="benefits"
          name="benefits"
          value={formData.benefits}
          onChange={handleChange}
          className="proposal-form-textarea"
          required
        />
      </div>
      <div className="proposal-form-field">
        <label htmlFor="risks" className="proposal-form-label">Identified Risks:</label>
        <textarea
          id="risks"
          name="risks"
          value={formData.risks}
          onChange={handleChange}
          className="proposal-form-textarea"
          required
        />
      </div>
      <button type="submit" className="proposal-form-submit-btn">Submit Proposal</button>
    </form>
  );
};

export default ProposalForm;
