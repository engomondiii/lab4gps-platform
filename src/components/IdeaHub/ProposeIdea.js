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
  const [expandedSection, setExpandedSection] = useState(null);

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
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setTimeout(() => navigate("/idea-hub"), 2000);
    } else {
      setErrors(formErrors);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  if (submitted) {
    return (
      <div className="success-message">
        <h2>Thank you for your submission!</h2>
        <p>Redirecting to the Idea Hub Dashboard...</p>
      </div>
    );
  }

  const sections = [
    {
      id: "title",
      label: "Idea Title",
      placeholder: "Enter a compelling title for your idea",
      value: formData.title,
      type: "text",
      error: errors.title,
    },
    {
      id: "problem",
      label: "Problem Addressed",
      placeholder: "Describe the problem your idea aims to solve",
      value: formData.problem,
      type: "textarea",
      error: errors.problem,
    },
    {
      id: "solution",
      label: "Proposed Solution",
      placeholder: "Provide a detailed solution for the problem",
      value: formData.solution,
      type: "textarea",
      error: errors.solution,
    },
    {
      id: "resources",
      label: "Estimated Resources Required",
      placeholder: "List the resources needed to implement your idea",
      value: formData.resources,
      type: "textarea",
      error: errors.resources,
    },
    {
      id: "alignment",
      label: "Alignment with Lab4GPS Goals",
      placeholder: "Explain how this idea aligns with Lab4GPS's mission",
      value: formData.alignment,
      type: "textarea",
      error: errors.alignment,
    },
    {
      id: "tags",
      label: "Tags (comma-separated)",
      placeholder: "E.g., Environment, Health, Technology",
      value: formData.tags,
      type: "text",
      error: errors.tags,
    },
  ];

  return (
    <div className="propose-idea">
      <h1 className="propose-idea-title">Propose a New Idea</h1>
      <p className="propose-idea-description">
        Drag and drop sections to reorder them. Click a section to expand and fill in the details.
      </p>
      <form className="idea-form" onSubmit={handleSubmit}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`form-section ${expandedSection === section.id ? "expanded" : "collapsed"}`}
          >
            <div
              className="form-section-header"
              onClick={() => toggleSection(section.id)}
            >
              <span>{section.label}</span>
              <span className="form-section-toggle">
                {expandedSection === section.id ? "▲" : "▼"}
              </span>
            </div>
            {expandedSection === section.id && (
              <div className="form-section-body">
                {section.type === "text" ? (
                  <input
                    type="text"
                    id={section.id}
                    name={section.id}
                    value={section.value}
                    onChange={handleInputChange}
                    placeholder={section.placeholder}
                  />
                ) : (
                  <textarea
                    id={section.id}
                    name={section.id}
                    value={section.value}
                    onChange={handleInputChange}
                    placeholder={section.placeholder}
                  />
                )}
                {section.error && <small className="error">{section.error}</small>}
              </div>
            )}
          </div>
        ))}

        <div className="form-section">
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
