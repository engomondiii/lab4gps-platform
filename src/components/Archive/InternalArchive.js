import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/InternalArchive.css";
import {
  FaSearch,
  FaFileAlt,
  FaFolder,
  FaTag,
  FaUserCircle,
  FaTrashAlt,
  FaEdit,
  FaThumbsUp,
  FaShareAlt,
  FaDownload,
  FaClock,
  FaChevronDown,
  FaPlusCircle,
} from "react-icons/fa";
import ArchiveService from "../../services/archiveService";

const InternalArchive = ({ userRole, user }) => {
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [categories, setCategories] = useState([
    "Research Materials",
    "Project Documentation",
    "Key Achievements",
  ]);
  const [tags, setTags] = useState([
    "Sustainability",
    "Research",
    "AI",
    "Innovation",
    "Achievements",
    "Summary",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [likes, setLikes] = useState({});
  const [editFile, setEditFile] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [filesPerPage] = useState(5);
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);
  const [viewingFile, setViewingFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const categoriesResponse = await ArchiveService.getCategories();
        const tagsResponse = await ArchiveService.getTags();
        setCategories(categoriesResponse.map((c) => c.name));
        setTags(tagsResponse.map((t) => t.name));
        fetchFiles();
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [searchQuery, selectedCategory, selectedTags, currentPage]);

  const fetchFiles = async () => {
    const filters = {
      category: selectedCategory,
      tags: selectedTags,
      search: searchQuery,
      page: currentPage,
    };
    try {
      const data = await ArchiveService.getFiles(filters);
      setFiles(data.files || []);
      setFilteredFiles(data.files || []);
      setTotalPages(data.total_pages || 1);
      initializeLikes(data.files || []);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const initializeLikes = (files) => {
    const initialLikes = {};
    files.forEach((file) => {
      initialLikes[file.id] = file.likes_count || 0;
    });
    setLikes(initialLikes);
  };

  const handleLike = async (fileId) => {
    try {
      await ArchiveService.toggleLike(fileId);
      setLikes((prevLikes) => ({
        ...prevLikes,
        [fileId]: prevLikes[fileId] + 1,
      }));
    } catch (error) {
      console.error("Error liking file:", error);
    }
  };

  const handleFileEdit = (fileId) => {
    const fileToEdit = files.find((file) => file.id === fileId);
    setEditFile(fileToEdit);
  };

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
      setFiles((prevFiles) =>
        prevFiles.map((file) => (file.id === editFile.id ? updatedFile : file))
      );
      setFilteredFiles((prevFiles) =>
        prevFiles.map((file) => (file.id === editFile.id ? updatedFile : file))
      );
      setEditFile(null);
    } catch (error) {
      console.error("Error updating file:", error);
    }
  };

  const handleFileDelete = async (fileId) => {
    try {
      await ArchiveService.deleteFile(fileId);
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
      setFilteredFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const toggleTagDropdown = () => {
    setTagDropdownOpen((prev) => !prev);
  };

  const handleTagSelection = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const renderFiles = () =>
    filteredFiles
      .slice((currentPage - 1) * filesPerPage, currentPage * filesPerPage)
      .map((file) => (
        <div key={file.id} className="file-card">
          <div className="file-info" onClick={() => setViewingFile(file)}>
            <div className="file-icon">
              {file.type === "file" ? <FaFileAlt /> : <FaFolder />}
            </div>
            <div className="file-details">
              <h3>{file.title}</h3>
              <p>{file.description}</p>
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
          </div>
          <div className="file-actions">
            <button
              className="action-btn"
              onClick={() => handleLike(file.id)}
            >
              <FaThumbsUp /> {likes[file.id]} Likes
            </button>
            <button className="action-btn">
              <FaShareAlt /> Share
            </button>
            <a
              className="action-btn"
              href={file.download_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Download
            </a>
            {userRole === "Administrator" && (
              <>
                <button
                  className="action-btn"
                  onClick={() => handleFileEdit(file.id)}
                >
                  <FaEdit /> Edit
                </button>
                <button
                  className="action-btn"
                  onClick={() => handleFileDelete(file.id)}
                >
                  <FaTrashAlt /> Delete
                </button>
              </>
            )}
          </div>
        </div>
      ));

  return (
    <div className="internal-archive">
      <header className="archive-header">
        <h1>Internal Archive</h1>
        <p>Centralized hub for research materials, project outcomes, and documentation.</p>
      </header>

      {viewingFile && (
        <div className="file-viewer">
          <button
            className="close-viewer"
            onClick={() => setViewingFile(null)}
          >
            &times;
          </button>
          <h2>{viewingFile.title}</h2>
          <p>{viewingFile.description}</p>
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
          <div className="tag-dropdown">
            <button className="tag-dropdown-toggle" onClick={toggleTagDropdown}>
              Tags <FaChevronDown />
            </button>
            {tagDropdownOpen && (
              <div className="tag-dropdown-content">
                {tags.map((tag, index) => (
                  <label key={index} className="tag-dropdown-item">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagSelection(tag)}
                    />
                    {tag}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="file-list">
        {filteredFiles.length > 0 ? (
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

      <div
        className="floating-upload-button"
        onClick={() => navigate("/member-portal/upload")}
      >
        <FaPlusCircle size={40} />
      </div>
    </div>
  );
};

export default InternalArchive;
