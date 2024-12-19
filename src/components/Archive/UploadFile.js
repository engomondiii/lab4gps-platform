import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import ArchiveService from "../../services/archiveService";
import "../../styles/UploadFile.css";

const UploadFile = ({ setFiles, setFilteredFiles }) => {
  const [categories, setCategories] = useState([
    "Research Materials",
    "Project Documentation",
    "Key Achievements",
  ]); // Static categories
  const [tags, setTags] = useState([
    "Sustainability",
    "Research",
    "AI",
    "Innovation",
    "Achievements",
    "Summary",
  ]); // Static tags
  const [showUploadForm, setShowUploadForm] = useState(false); // Toggle upload form visibility

  useEffect(() => {
    const fetchCategoriesAndTags = async () => {
      try {
        const categoriesResponse = await ArchiveService.getCategories();
        const tagsResponse = await ArchiveService.getTags();

        if (Array.isArray(categoriesResponse)) {
          setCategories(categoriesResponse.map((c) => c.name));
        } else {
          console.warn("Unexpected categories response:", categoriesResponse);
        }

        if (Array.isArray(tagsResponse)) {
          setTags(tagsResponse.map((t) => t.name));
        } else {
          console.warn("Unexpected tags response:", tagsResponse);
        }
      } catch (error) {
        console.error("Error fetching categories and tags:", error);
      }
    };

    fetchCategoriesAndTags();
  }, []);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const newFile = await ArchiveService.uploadFile(formData);

      setFiles((prev) => [newFile, ...prev]);
      setFilteredFiles((prev) => [newFile, ...prev]);

      event.target.reset();
      setShowUploadForm(false);

      setTimeout(() => {
        const fileList = document.querySelector(".file-list");
        if (fileList) {
          fileList.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="upload-file-container">
      {/* Add New File Button */}
      {!showUploadForm && (
        <div className="floating-add-button">
          <button
            onClick={() => {
              setShowUploadForm(true);
              setTimeout(() => {
                const uploadSection = document.querySelector(".upload-section");
                if (uploadSection) {
                  uploadSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            title="Click to add a new file"
          >
            <FaPlusCircle size={24} /> <span>Add File</span>
          </button>
        </div>
      )}

      {/* Upload Form */}
      {showUploadForm && (
        <div className="upload-section">
          <h3>Upload New File</h3>
          <form className="upload-form" onSubmit={handleFileUpload}>
            <input type="text" name="title" placeholder="File Title" required />
            <textarea
              name="description"
              placeholder="File Description"
              required
            ></textarea>
            <select name="category" required>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <fieldset className="tags-fieldset">
              <legend>Select Tags</legend>
              <div className="tags-container">
                {tags.map((tag, index) => (
                  <label key={index} className="tag-label">
                    <input
                      type="checkbox"
                      name="tags"
                      value={tag}
                      className="tag-checkbox"
                    />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <input
              type="number"
              name="version"
              placeholder="File Version"
              defaultValue={1}
              required
            />
            <input type="file" name="file" required />
            <button type="submit">
              <FaPlusCircle /> Upload
            </button>
            <button
              type="button"
              className="cancel-upload-btn"
              onClick={() => setShowUploadForm(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
