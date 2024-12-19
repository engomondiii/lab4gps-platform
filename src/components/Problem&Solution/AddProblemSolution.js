// src/components/Problem&Solution/AddProblemSolutionForm.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// Removed ReactQuill imports
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import styles from '../../styles/AddProblemSolution.module.css';
import { useNavigate } from 'react-router-dom';
import cities from 'cities.json'; // Ensure correct import path

// Validation schema as defined above

const schema = yup.object().shape({
  type: yup.string().oneOf(['Problem', 'Solution']).required('Type is required'),

  // Common Fields
  authorName: yup.string().required('Author name is required'),
  authorTitle: yup.string().required('Author title is required'),
  authorImage: yup
    .mixed()
    .required('Author image is required')
    .test('fileType', 'Unsupported File Format', (value) => {
      return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    })
    .test('fileSize', 'File too large. Max size is 5MB', (value) => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB
    }),
  mainImage: yup
    .mixed()
    .required('Main image is required')
    .test('fileType', 'Unsupported File Format', (value) => {
      return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    })
    .test('fileSize', 'File too large. Max size is 10MB', (value) => {
      return value && value.size <= 10 * 1024 * 1024; // 10MB
    }),
  overlayText: yup.string().required('Overlay text is required'),
  shortTitle: yup.string().required('Short title is required'),
  location: yup.string().required('Location is required'),
  donationAmount: yup
    .number()
    .typeError('Donation amount must be a number')
    .required('Donation amount is required')
    .min(0, 'Donation amount cannot be negative'),
  donationGoal: yup
    .number()
    .typeError('Donation goal must be a number')
    .required('Donation goal is required')
    .min(1, 'Donation goal must be at least 1'),

  // Conditional Fields for Problem
  problemStatement: yup.string().when('type', {
    is: 'Problem',
    then: yup.string().required('Problem Statement is required'),
    otherwise: yup.string().notRequired(),
  }),
  problemDescription: yup.string().when('type', {
    is: 'Problem',
    then: yup.string().required('Problem Description is required'),
    otherwise: yup.string().notRequired(),
  }),

  // Conditional Fields for Solution
  solutionStatement: yup.string().when('type', {
    is: 'Solution',
    then: yup.string().required('Solution Statement is required'),
    otherwise: yup.string().notRequired(),
  }),
  solutionDescription: yup.string().when('type', {
    is: 'Solution',
    then: yup.string().required('Solution Description is required'),
    otherwise: yup.string().notRequired(),
  }),
});

const AddProblemSolutionForm = ({ onSubmit, onCancel }) => {
  const navigate = useNavigate();
  const [authorImagePreview, setAuthorImagePreview] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state
  const [submitError, setSubmitError] = useState(null); // To handle submission errors
  const [currentStep, setCurrentStep] = useState(1); // Step management
  const [selectedType, setSelectedType] = useState(null); // Selected type

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchType = watch('type', selectedType);

  // Handle author image change and preview
  const handleAuthorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAuthorImagePreview(URL.createObjectURL(file));
    } else {
      setAuthorImagePreview(null);
    }
  };

  // Handle main image change and preview
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImagePreview(URL.createObjectURL(file));
    } else {
      setMainImagePreview(null);
    }
  };

  // Function to find city in cities.json
  const findCityCoordinates = (locationInput) => {
    // Split the location into city and country
    const parts = locationInput.split(',').map((part) => part.trim());
    if (parts.length < 2) {
      return null; // Not enough information
    }
    const cityName = parts[0].toLowerCase();
    const countryName = parts[1].toLowerCase();

    // Find matching city and country
    const matchedCity = cities.find(
      (city) =>
        city.name.toLowerCase() === cityName &&
        city.country.toLowerCase() === countryName
    );

    if (matchedCity) {
      return {
        lat: matchedCity.lat,
        lng: matchedCity.lon,
      };
    }

    return null; // City not found
  };

  // Handle form submission
  const onFormSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    clearErrors('location'); // Clear previous location errors

    try {
      // Find coordinates based on location input
      const coordinates = findCityCoordinates(data.location);

      if (!coordinates) {
        setError('location', {
          type: 'manual',
          message: 'Location not found. Please enter a valid city and country.',
        });
        setIsSubmitting(false);
        return;
      }

      // Convert images to Base64
      const convertToBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

      const authorImageBase64 = await convertToBase64(data.authorImage);
      const mainImageBase64 = await convertToBase64(data.mainImage);

      const newEntry = {
        id: uuidv4(), // Generate a unique ID
        authorName: data.authorName,
        authorTitle: data.authorTitle,
        authorImage: authorImageBase64,
        mainImage: mainImageBase64,
        overlayText: data.overlayText,
        type: data.type,
        shortTitle: data.shortTitle,
        // Replace detailedDescription with conditional descriptions
        problemStatement: data.problemStatement || '',
        problemDescription: data.problemDescription || '',
        solutionStatement: data.solutionStatement || '',
        solutionDescription: data.solutionDescription || '',
        location: data.location,
        lat: coordinates.lat,
        lng: coordinates.lng,
        donationAmount: data.donationAmount,
        donationGoal: data.donationGoal,
        comments: [], // Initialize with empty comments
      };

      onSubmit(newEntry);
      reset();
      setAuthorImagePreview(null);
      setMainImagePreview(null);
      setCurrentStep(1); // Reset to first step
      setSelectedType(null);
    } catch (error) {
      console.error('Form Submission Error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    setValue('type', type);
    setCurrentStep(2);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <h2 className={styles.title}>
        {currentStep === 1 ? 'Select Contribution Type' : 'Add New Problem/Solution'}
      </h2>

      {currentStep === 1 && (
        <div className={styles.typeSelection}>
          <button
            type="button"
            className={`${styles.typeButton} ${selectedType === 'Problem' ? styles.selected : ''}`}
            onClick={() => handleTypeSelection('Problem')}
          >
            Problem
          </button>
          <button
            type="button"
            className={`${styles.typeButton} ${selectedType === 'Solution' ? styles.selected : ''}`}
            onClick={() => handleTypeSelection('Solution')}
          >
            Solution
          </button>
          {errors.type && <p className={styles.errorMessage}>{errors.type.message}</p>}
        </div>
      )}

      {currentStep === 2 && (
        <>
          {/* Author Name */}
          <div className={styles.formGroup}>
            <label htmlFor="authorName">Author Name</label>
            <input
              id="authorName"
              type="text"
              placeholder="Enter the author's name"
              {...register('authorName')}
              className={errors.authorName ? styles.errorInput : ''}
            />
            {errors.authorName && <p className={styles.errorMessage}>{errors.authorName.message}</p>}
          </div>

          {/* Author Title */}
          <div className={styles.formGroup}>
            <label htmlFor="authorTitle">Author Title</label>
            <input
              id="authorTitle"
              type="text"
              placeholder="Enter the author's title"
              {...register('authorTitle')}
              className={errors.authorTitle ? styles.errorInput : ''}
            />
            {errors.authorTitle && <p className={styles.errorMessage}>{errors.authorTitle.message}</p>}
          </div>

          {/* Author Image */}
          <div className={styles.formGroup}>
            <label htmlFor="authorImage">Author Image</label>
            <input
              id="authorImage"
              type="file"
              accept="image/*"
              {...register('authorImage')}
              onChange={handleAuthorImageChange}
              className={errors.authorImage ? styles.errorInput : ''}
            />
            {authorImagePreview && (
              <img src={authorImagePreview} alt="Author Preview" className={styles.imagePreview} />
            )}
            {errors.authorImage && <p className={styles.errorMessage}>{errors.authorImage.message}</p>}
          </div>

          {/* Main Image */}
          <div className={styles.formGroup}>
            <label htmlFor="mainImage">Main Image</label>
            <input
              id="mainImage"
              type="file"
              accept="image/*"
              {...register('mainImage')}
              onChange={handleMainImageChange}
              className={errors.mainImage ? styles.errorInput : ''}
            />
            {mainImagePreview && (
              <img src={mainImagePreview} alt="Main Preview" className={styles.imagePreview} />
            )}
            {errors.mainImage && <p className={styles.errorMessage}>{errors.mainImage.message}</p>}
          </div>

          {/* Overlay Text */}
          <div className={styles.formGroup}>
            <label htmlFor="overlayText">Overlay Text</label>
            <textarea
              id="overlayText"
              placeholder="Enter overlay text"
              {...register('overlayText')}
              className={errors.overlayText ? styles.errorInput : ''}
              rows="3"
            ></textarea>
            {errors.overlayText && <p className={styles.errorMessage}>{errors.overlayText.message}</p>}
          </div>

          {/* Type - Hidden since it's selected in step 1 */}
          <input type="hidden" {...register('type')} />

          {/* Short Title */}
          <div className={styles.formGroup}>
            <label htmlFor="shortTitle">Short Title</label>
            <input
              id="shortTitle"
              type="text"
              placeholder="Enter a short title"
              {...register('shortTitle')}
              className={errors.shortTitle ? styles.errorInput : ''}
            />
            {errors.shortTitle && <p className={styles.errorMessage}>{errors.shortTitle.message}</p>}
          </div>

          {/* Conditional Sections based on Type */}
          {watchType === 'Problem' && (
            <>
              {/* Problem Statement */}
              <div className={styles.formGroup}>
                <label htmlFor="problemStatement">Problem Statement</label>
                <textarea
                  id="problemStatement"
                  placeholder="Enter the problem statement"
                  {...register('problemStatement')}
                  className={errors.problemStatement ? styles.errorInput : ''}
                  rows="3"
                ></textarea>
                {errors.problemStatement && (
                  <p className={styles.errorMessage}>{errors.problemStatement.message}</p>
                )}
              </div>

              {/* Problem Description */}
              <div className={styles.formGroup}>
                <label htmlFor="problemDescription">Problem Description</label>
                <textarea
                  id="problemDescription"
                  placeholder="Enter the problem description"
                  {...register('problemDescription')}
                  className={errors.problemDescription ? styles.errorInput : ''}
                  rows="5"
                ></textarea>
                {errors.problemDescription && (
                  <p className={styles.errorMessage}>{errors.problemDescription.message}</p>
                )}
                <small className={styles.helperText}>
                  Use <strong>**bold**</strong> for bold text and <strong>##</strong> for subtitles. Example:
                  <br />
                  <code>
                    ## Subtitle
                    <br />
                    This is a **bold** statement.
                  </code>
                </small>
              </div>
            </>
          )}

          {watchType === 'Solution' && (
            <>
              {/* Solution Statement */}
              <div className={styles.formGroup}>
                <label htmlFor="solutionStatement">Solution Statement</label>
                <textarea
                  id="solutionStatement"
                  placeholder="Enter the solution statement"
                  {...register('solutionStatement')}
                  className={errors.solutionStatement ? styles.errorInput : ''}
                  rows="3"
                ></textarea>
                {errors.solutionStatement && (
                  <p className={styles.errorMessage}>{errors.solutionStatement.message}</p>
                )}
              </div>

              {/* Solution Description */}
              <div className={styles.formGroup}>
                <label htmlFor="solutionDescription">Solution Description</label>
                <textarea
                  id="solutionDescription"
                  placeholder="Enter the solution description"
                  {...register('solutionDescription')}
                  className={errors.solutionDescription ? styles.errorInput : ''}
                  rows="5"
                ></textarea>
                {errors.solutionDescription && (
                  <p className={styles.errorMessage}>{errors.solutionDescription.message}</p>
                )}
                <small className={styles.helperText}>
                  Use <strong>**bold**</strong> for bold text and <strong>##</strong> for subtitles. Example:
                  <br />
                  <code>
                    ## Subtitle
                    <br />
                    This is a **bold** statement.
                  </code>
                </small>
              </div>
            </>
          )}

          {/* Location */}
          <div className={styles.formGroup}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter location (e.g., City, Country)"
              {...register('location')}
              className={errors.location ? styles.errorInput : ''}
            />
            {errors.location && <p className={styles.errorMessage}>{errors.location.message}</p>}
          </div>

          {/* Donation Amount */}
          <div className={styles.formGroup}>
            <label htmlFor="donationAmount">Donation Amount</label>
            <input
              id="donationAmount"
              type="number"
              placeholder="Enter current donation amount"
              {...register('donationAmount')}
              className={errors.donationAmount ? styles.errorInput : ''}
            />
            {errors.donationAmount && (
              <p className={styles.errorMessage}>{errors.donationAmount.message}</p>
            )}
          </div>

          {/* Donation Goal */}
          <div className={styles.formGroup}>
            <label htmlFor="donationGoal">Donation Goal</label>
            <input
              id="donationGoal"
              type="number"
              placeholder="Enter donation goal"
              {...register('donationGoal')}
              className={errors.donationGoal ? styles.errorInput : ''}
            />
            {errors.donationGoal && (
              <p className={styles.errorMessage}>{errors.donationGoal.message}</p>
            )}
          </div>

          {/* Submission Error */}
          {submitError && <p className={styles.submitError}>{submitError}</p>}

          {/* Form Actions */}
          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default AddProblemSolutionForm;
