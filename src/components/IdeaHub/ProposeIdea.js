import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ProposeIdea.css";

const ProposeIdea = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    problem: "",
    solution: "",
    resources: "",
    alignment: "",
    tags: "",
    attachments: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachments: e.target.files[0] });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.problem) newErrors.problem = "Problem description is required";
    if (!formData.solution) newErrors.solution = "Solution is required";
    if (!formData.resources) newErrors.resources = "Resources are required";
    if (!formData.alignment) newErrors.alignment = "Alignment is required";
    if (!formData.tags) newErrors.tags = "At least one tag is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Mock submission process
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setTimeout(() => navigate("/idea-hub"), 2000);
    } else {
      setErrors(formErrors);
    }
  };

  if (submitted) {
    return (
      <div className="success-message">
        <h2>Thank you for your submission!</h2>
        <p>Redirecting to the Idea Hub Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="propose-idea-container">
      <h1>Propose a New Idea</h1>
      <p>
        Fill in the form below to propose your innovative idea. Provide as much
        detail as possible to help others understand and support your
        initiative.
      </p>
      <form className="idea-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Idea Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter a compelling title for your idea"
          />
          {errors.title && <small className="error">{errors.title}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="problem">Problem Addressed</label>
          <textarea
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleInputChange}
            placeholder="Describe the problem your idea aims to solve"
          />
          {errors.problem && <small className="error">{errors.problem}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="solution">Proposed Solution</label>
          <textarea
            id="solution"
            name="solution"
            value={formData.solution}
            onChange={handleInputChange}
            placeholder="Provide a detailed solution for the problem"
          />
          {errors.solution && (
            <small className="error">{errors.solution}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="resources">Estimated Resources Required</label>
          <textarea
            id="resources"
            name="resources"
            value={formData.resources}
            onChange={handleInputChange}
            placeholder="List the resources needed to implement your idea"
          />
          {errors.resources && (
            <small className="error">{errors.resources}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="alignment">Alignment with Lab4GPS Goals</label>
          <textarea
            id="alignment"
            name="alignment"
            value={formData.alignment}
            onChange={handleInputChange}
            placeholder="Explain how this idea aligns with Lab4GPS's mission"
          />
          {errors.alignment && (
            <small className="error">{errors.alignment}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="E.g., Environment, Health, Technology"
          />
          {errors.tags && <small className="error">{errors.tags}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="attachments">Attachments (optional)</label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Idea
        </button>
      </form>
    </div>
  );
};

export default ProposeIdea;
