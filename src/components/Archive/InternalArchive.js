import React, { useState, useEffect } from "react";
import "../../styles/InternalArchive.css";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaTag,
  FaUserCircle,
  FaChartLine,
  FaTrashAlt,
  FaEdit,
  FaEye,
  FaClock,
  FaThumbsUp,
  FaCommentDots,
  FaShareAlt,
  FaPlusCircle,
} from "react-icons/fa";
import ArchiveService from "../../services/archiveService"; // Import the service

const InternalArchive = ({ userRole, user }) => {
  const [files, setFiles] = useState([]); // All files
  const [filteredFiles, setFilteredFiles] = useState([]); // Filtered files
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
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category
  const [selectedTags, setSelectedTags] = useState([]); // Selected tags
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const [likes, setLikes] = useState({}); // File likes
  const [comments, setComments] = useState({}); // File comments
  const [viewingDocument, setViewingDocument] = useState(null); // Document viewer
  const [showComments, setShowComments] = useState({}); // Toggle comments visibility
  const [editFile, setEditFile] = useState(null); // File being edited
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const filesPerPage = 5; // Pagination limit

  // Fetch initial data (categories, tags, and files)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetch dynamic categories and tags from API
        const categoriesResponse = await ArchiveService.getCategories();
        const tagsResponse = await ArchiveService.getTags();

        if (Array.isArray(categoriesResponse)) {
          setCategories((prev) => [...prev, ...categoriesResponse.map((c) => c.name)]);
        } else {
          console.warn("Unexpected categories response:", categoriesResponse);
        }

        if (Array.isArray(tagsResponse)) {
          setTags((prev) => [...prev, ...tagsResponse.map((t) => t.name)]);
        } else {
          console.warn("Unexpected tags response:", tagsResponse);
        }

        // Fetch files
        fetchFiles();
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch files with filters
  const fetchFiles = async () => {
    try {
      const filters = {
        category: selectedCategory,
        tags: selectedTags,
        search: searchQuery,
        page: currentPage,
      };
      const data = await ArchiveService.getFiles(filters);
      setFiles(data.files || []);
      setFilteredFiles(data.files || []);
      setTotalPages(data.total_pages || 1);
      initializeFileStats(data.files || []);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Initialize file stats (likes, comments, and visibility toggles)
  const initializeFileStats = (files) => {
    const initialLikes = {};
    const initialComments = {};
    const initialShowComments = {};
    files.forEach((file) => {
      initialLikes[file.id] = file.likes_count || 0;
      initialComments[file.id] = [];
      initialShowComments[file.id] = false;
    });
    setLikes(initialLikes);
    setComments(initialComments);
    setShowComments(initialShowComments);
  };

  // Handle like action
  const handleLike = async (fileId) => {
    try {
      await ArchiveService.toggleLike(fileId);
      setLikes((prev) => ({
        ...prev,
        [fileId]: prev[fileId] + 1,
      }));
    } catch (error) {
      console.error("Error liking file:", error);
    }
  };

  // Handle comment submission
  const handleComment = async (fileId, comment) => {
    if (comment.trim() !== "") {
      try {
        const newComment = await ArchiveService.addComment(fileId, comment);
        setComments((prev) => ({
          ...prev,
          [fileId]: [...prev[fileId], newComment],
        }));
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  // Handle file upload
  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const newFile = await ArchiveService.uploadFile(formData);
      setFiles((prev) => [...prev, newFile]);
      setFilteredFiles((prev) => [...prev, newFile]);
      event.target.reset();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Handle file edit
  const handleFileEdit = (fileId) => {
    const fileToEdit = files.find((file) => file.id === fileId);
    setEditFile(fileToEdit);
  };

  // Handle file update
  const handleFileUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const updatedData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      tags: formData.getAll("tags"),
      version: parseInt(formData.get("version"), 10),
    };

    try {
      const updatedFile = await ArchiveService.updateFile(editFile.id, updatedData);
      setFiles((prev) =>
        prev.map((file) => (file.id === editFile.id ? updatedFile : file))
      );
      setFilteredFiles((prev) =>
        prev.map((file) => (file.id === editFile.id ? updatedFile : file))
      );
      setEditFile(null);
    } catch (error) {
      console.error("Error updating file:", error);
    }
  };

  // Handle file delete
  const handleFileDelete = async (fileId) => {
    try {
      await ArchiveService.deleteFile(fileId);
      setFiles((prev) => prev.filter((file) => file.id !== fileId));
      setFilteredFiles((prev) => prev.filter((file) => file.id !== fileId));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  // Toggle comments visibility
  const toggleComments = (fileId) => {
    setShowComments((prev) => ({
      ...prev,
      [fileId]: !prev[fileId],
    }));
  };

  // Fetch files when filters change
  useEffect(() => {
    fetchFiles();
  }, [searchQuery, selectedCategory, selectedTags, currentPage]);

  // Pagination logic
  const paginatedFiles = (filteredFiles || []).slice(
    (currentPage - 1) * filesPerPage,
    currentPage * filesPerPage
  );

  const renderFiles = () =>
    paginatedFiles.map((file) => (
      <div key={file.id} className="file-card">
        <h3>{file.title}</h3>
        <p>{file.description}</p>
        <div className="file-details">
          <span>
            <FaTag /> {file.category}
          </span>
          <span>
            <FaUserCircle /> {file.author}
          </span>
          <span>
            <FaClock /> {file.upload_date}
          </span>
          <span>Version: {file.version}</span>
        </div>
        {file.media && (
          <div className="file-media">
            {file.media.includes("youtube.com") ? (
              <iframe
                src={file.media}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={file.title}
              ></iframe>
            ) : (
              <img src={file.media} alt={file.title} />
            )}
          </div>
        )}
        <button
          className="view-document-btn"
          onClick={() => setViewingDocument(file.file_url)}
        >
          <FaEye /> View Document
        </button>
        <div className="file-actions">
          <button className="like-btn" onClick={() => handleLike(file.id)}>
            <FaThumbsUp /> {likes[file.id]} Likes
          </button>
          <button className="share-btn">
            <FaShareAlt /> Share
          </button>
          <button className="download-btn">
            <FaDownload /> {file.downloads_count} Downloads
          </button>
          <button
            className="toggle-comments-btn"
            onClick={() => toggleComments(file.id)}
          >
            <FaCommentDots /> {showComments[file.id] ? "Hide Comments" : "View Comments"}
          </button>
          {userRole === "Administrator" && (
            <>
              <button
                className="edit-btn"
                onClick={() => handleFileEdit(file.id)}
              >
                <FaEdit /> Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleFileDelete(file.id)}
              >
                <FaTrashAlt /> Delete
              </button>
            </>
          )}
        </div>
        {showComments[file.id] && (
          <div className="file-comments">
            <h4>Comments:</h4>
            <ul>
              {comments[file.id].map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
            </ul>
            <div className="comment-input">
              <input
                type="text"
                placeholder="Add a comment..."
                id={`comment-input-${file.id}`}
              />
              <button
                onClick={() => {
                  const input = document.getElementById(`comment-input-${file.id}`);
                  handleComment(file.id, input.value);
                  input.value = "";
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
        <div className="file-stats">
          <FaChartLine /> {file.views} Views
        </div>
      </div>
    ));

  return (
    <div className="internal-archive">
      <header className="archive-header">
        <h1>Internal Archive</h1>
        <p>Centralized hub for research materials, project outcomes, and documentation.</p>
      </header>

      {viewingDocument && (
        <div className="document-viewer">
          <iframe src={viewingDocument} title="Document Viewer" frameBorder="0"></iframe>
          <button onClick={() => setViewingDocument(null)}>Close</button>
        </div>
      )}

      <div className="archive-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </div>

        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="tag-filter">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`tag-btn ${selectedTags.includes(tag) ? "active" : ""}`}
              onClick={() =>
                setSelectedTags((prev) =>
                  prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
                )
              }
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="file-list">
        {paginatedFiles.length > 0 ? renderFiles() : <p>No files found for the selected criteria.</p>}
      </div>

      <div className="pagination-controls">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`pagination-btn ${page === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {editFile ? (
        <div className="upload-section">
          <h3>Edit File</h3>
          <form className="upload-form" onSubmit={handleFileUpdate}>
            <input
              type="text"
              name="title"
              placeholder="File Title"
              defaultValue={editFile.title}
              required
            />
            <textarea
              name="description"
              placeholder="File Description"
              defaultValue={editFile.description}
              required
            ></textarea>
            <select name="category" defaultValue={editFile.category} required>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <fieldset>
              <legend>Select Tags</legend>
              {tags.map((tag, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag}
                    defaultChecked={editFile.tags.includes(tag)}
                  />
                  {tag}
                </label>
              ))}
            </fieldset>
            <input
              type="number"
              name="version"
              placeholder="File Version"
              defaultValue={editFile.version}
              required
            />
            <button type="submit">
              <FaPlusCircle /> Update
            </button>
          </form>
        </div>
      ) : (
        <div className="upload-section">
          <h3>Upload New File</h3>
          <form className="upload-form" onSubmit={handleFileUpload}>
            <input type="text" name="title" placeholder="File Title" required />
            <textarea name="description" placeholder="File Description" required></textarea>
            <select name="category" required>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <fieldset>
              <legend>Select Tags</legend>
              {tags.map((tag, index) => (
                <label key={index}>
                  <input type="checkbox" name="tags" value={tag} />
                  {tag}
                </label>
              ))}
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
          </form>
        </div>
      )}
    </div>
  );
};

export default InternalArchive;
