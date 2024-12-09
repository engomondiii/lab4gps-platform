// src/components/Problem&Solution/AddProblemSolution.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import styles from '../../styles/AddProblemSolution.module.css';

const AddProblemSolution = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    authorName: '',
    authorTitle: '',
    authorImage: '',
    mainImage: '',
    overlayText: '',
    type: 'Problem',
    shortTitle: '',
    detailedDescription: '',
    location: '',
    lat: '',
    lng: '',
    donationAmount: '',
    donationGoal: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle ReactQuill changes
  const handleQuillChange = (value) => {
    setFormData({ ...formData, detailedDescription: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.authorName || !formData.authorTitle || !formData.type || !formData.location) {
      alert('Please fill in all required fields.');
      return;
    }

    // Convert donation amounts to numbers
    const donationAmount = parseFloat(formData.donationAmount) || 0;
    const donationGoal = parseFloat(formData.donationGoal) || 1000;

    // Create new entry
    const newEntry = {
      id: Date.now(), // Simple unique ID
      ...formData,
      donationAmount,
      donationGoal,
      comments: [],
      lat: parseFloat(formData.lat) || 0,
      lng: parseFloat(formData.lng) || 0,
    };

    // In a real application, you'd send this data to a backend.
    // For demonstration, we'll save it to localStorage.
    const existingData = JSON.parse(localStorage.getItem('mockData')) || [];
    existingData.push(newEntry);
    localStorage.setItem('mockData', JSON.stringify(existingData));

    alert('New entry added successfully!');
    navigate('/'); // Navigate back to the main page
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add a New {formData.type}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Author Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Author Information</h3>
          <label className={styles.label}>
            Name<span className={styles.required}>*</span>:
            <input 
              type="text" 
              name="authorName" 
              value={formData.authorName} 
              onChange={handleChange} 
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Title<span className={styles.required}>*</span>:
            <input 
              type="text" 
              name="authorTitle" 
              value={formData.authorTitle} 
              onChange={handleChange} 
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Author Image URL:
            <input 
              type="url" 
              name="authorImage" 
              value={formData.authorImage} 
              onChange={handleChange} 
              className={styles.input}
              placeholder="https://example.com/image.jpg"
            />
          </label>
        </div>

        {/* Content Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Content Information</h3>
          <label className={styles.label}>
            Main Image URL:
            <input 
              type="url" 
              name="mainImage" 
              value={formData.mainImage} 
              onChange={handleChange} 
              className={styles.input}
              placeholder="https://example.com/main-image.jpg"
            />
          </label>
          <label className={styles.label}>
            Overlay Text:
            <textarea 
              name="overlayText" 
              value={formData.overlayText} 
              onChange={handleChange} 
              className={styles.textarea}
              rows="3"
              placeholder="Brief description or overlay text..."
            ></textarea>
          </label>
          <label className={styles.label}>
            Type<span className={styles.required}>*</span>:
            <select 
              name="type" 
              value={formData.type} 
              onChange={handleChange} 
              className={styles.select}
              required
            >
              <option value="Problem">Problem</option>
              <option value="Solution">Solution</option>
            </select>
          </label>
          <label className={styles.label}>
            Short Title<span className={styles.required}>*</span>:
            <input 
              type="text" 
              name="shortTitle" 
              value={formData.shortTitle} 
              onChange={handleChange} 
              className={styles.input}
              placeholder="e.g., Problem Statement:"
              required
            />
          </label>
          <label className={styles.label}>
            Detailed Description<span className={styles.required}>*</span>:
            <ReactQuill 
              theme="snow" 
              value={formData.detailedDescription} 
              onChange={handleQuillChange} 
              className={styles.richText}
              placeholder="Enter detailed description with headings and bold subtitles..."
            />
          </label>
        </div>

        {/* Location Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Location Information</h3>
          <label className={styles.label}>
            Location<span className={styles.required}>*</span>:
            <input 
              type="text" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              className={styles.input}
              placeholder="e.g., Nairobi, Kenya"
              required
            />
          </label>
          <label className={styles.label}>
            Latitude:
            <input 
              type="number" 
              name="lat" 
              value={formData.lat} 
              onChange={handleChange} 
              className={styles.input}
              placeholder="e.g., -0.3213"
              step="0.0001"
            />
          </label>
          <label className={styles.label}>
            Longitude:
            <input 
              type="number" 
              name="lng" 
              value={formData.lng} 
              onChange={handleChange} 
              className={styles.input}
              placeholder="e.g., 36.8270"
              step="0.0001"
            />
          </label>
        </div>

        {/* Donation Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Donation Information</h3>
          <label className={styles.label}>
            Current Donation Amount ($):
            <input 
              type="number" 
              name="donationAmount" 
              value={formData.donationAmount} 
              onChange={handleChange} 
              className={styles.input}
              min="0"
              step="10"
            />
          </label>
          <label className={styles.label}>
            Donation Goal ($):
            <input 
              type="number" 
              name="donationGoal" 
              value={formData.donationGoal} 
              onChange={handleChange} 
              className={styles.input}
              min="100"
              step="50"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>Add {formData.type}</button>
          <button 
            type="button" 
            className={styles.cancelButton} 
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProblemSolution;
