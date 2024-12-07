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
import archiveService from "../../services/archiveService";

const InternalArchive = () => {
  const [files, setFiles] = useState([]); // All files
  const [filteredFiles, setFilteredFiles] = useState([]); // Filtered files
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [categories, setCategories] = useState([]); // Categories from backend
  const [tags, setTags] = useState([]); // Tags from backend
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category
  const [selectedTags, setSelectedTags] = useState([]); // Selected tags
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const [likes, setLikes] = useState({}); // File likes
  const [comments, setComments] = useState({}); // File comments
  const [viewingDocument, setViewingDocument] = useState(null); // Document viewer
  const [showComments, setShowComments] = useState({}); // Toggle comments visibility
  const filesPerPage = 5; // Pagination limit

  // Fetch categories, tags, and files on component mount
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const [categoriesResponse, tagsResponse] = await Promise.all([
          archiveService.fetchCategories(),
          archiveService.fetchTags(),
        ]);

        setCategories(
          Array.isArray(categoriesResponse.data)
            ? categoriesResponse.data
            : ["Research Materials", "Project Documentation", "Key Achievements"]
        );
        setTags(
          Array.isArray(tagsResponse.data)
            ? tagsResponse.data
            : ["Sustainability", "Research", "AI", "Innovation", "Achievements", "Summary"]
        );
      } catch (error) {
        console.error("Error fetching metadata:", error);
        setCategories(["Research Materials", "Project Documentation", "Key Achievements"]);
        setTags(["Sustainability", "Research", "AI", "Innovation", "Achievements", "Summary"]);
      }
    };

    fetchMetadata();
  }, []);

  // Fetch files with filters
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const params = {
          category: selectedCategory !== "All" ? selectedCategory : undefined,
          tags: selectedTags.length > 0 ? selectedTags : undefined,
          search: searchQuery || undefined,
        };
        const response = await archiveService.fetchFiles(params);

        const fetchedFiles = Array.isArray(response.data) ? response.data : [];
        setFiles(fetchedFiles);
        setFilteredFiles(fetchedFiles);

        // Initialize likes, comments, and visibility
        const initialLikes = {};
        const initialComments = {};
        const initialShowComments = {};
        fetchedFiles.forEach((file) => {
          initialLikes[file.id] = file.likes_count || 0;
          initialComments[file.id] = file.comments || [];
          initialShowComments[file.id] = false;
        });
        setLikes(initialLikes);
        setComments(initialComments);
        setShowComments(initialShowComments);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, [selectedCategory, selectedTags, searchQuery]);

  // Handle filtering and searching
  useEffect(() => {
    let updatedFiles = files;

    if (selectedCategory !== "All") {
      updatedFiles = updatedFiles.filter((file) => file.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      updatedFiles = updatedFiles.filter((file) =>
        file.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    if (searchQuery) {
      updatedFiles = updatedFiles.filter(
        (file) =>
          file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          file.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredFiles(updatedFiles);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTags, files]);

  // Handle like action
  const handleLike = async (fileId) => {
    try {
      await archiveService.toggleLike(fileId);
      setLikes((prev) => ({
        ...prev,
        [fileId]: prev[fileId] + 1,
      }));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  // Handle comment submission
  const handleComment = async (fileId, comment) => {
    if (comment.trim() !== "") {
      try {
        const response = await archiveService.addComment(fileId, { text: comment });
        setComments((prev) => ({
          ...prev,
          [fileId]: [...prev[fileId], response.data],
        }));
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  // Handle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Handle comments visibility toggle
  const toggleComments = (fileId) => {
    setShowComments((prev) => ({
      ...prev,
      [fileId]: !prev[fileId],
    }));
  };

  // Handle file upload
  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await archiveService.uploadFile(formData);
      setFiles((prev) => [...prev, response.data]);
      setFilteredFiles((prev) => [...prev, response.data]);
      event.target.reset();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Pagination logic
  const paginatedFiles = filteredFiles.slice(
    (currentPage - 1) * filesPerPage,
    currentPage * filesPerPage
  );

  const totalPages = Math.ceil(filteredFiles.length / filesPerPage);

  // Render file cards
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
            <FaClock /> {file.uploadDate}
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
          onClick={() => setViewingDocument(file.link)}
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
            <FaDownload /> {file.downloads} Downloads
          </button>
          <button
            className="toggle-comments-btn"
            onClick={() => toggleComments(file.id)}
          >
            <FaCommentDots /> {showComments[file.id] ? "Hide Comments" : "View Comments"}
          </button>
        </div>
        {showComments[file.id] && (
          <div className="file-comments">
            <h4>Comments:</h4>
            <ul>
              {comments[file.id].map((comment, index) => (
                <li key={index}>{comment}</li>
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
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="file-list">
        {paginatedFiles.length > 0 ? (
          renderFiles()
        ) : (
          <p>No files found for the selected criteria.</p>
        )}
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

      {/* Allow all users to upload files */}
      <div className="upload-section">
        <h3>Upload New File</h3>
        <form className="upload-form" onSubmit={handleFileUpload}>
          <input type="text" name="title" placeholder="File Title" required />
          <textarea name="description" placeholder="File Description" required></textarea>
          <input type="file" name="file" required />
          <button type="submit">
            <FaPlusCircle /> Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default InternalArchive;
