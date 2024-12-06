import React, { useState } from 'react';
import '../../styles/InternalArchive.css';

// Dummy Data
const dummyFiles = [
  {
    id: 1,
    fileName: '2023 Training Manual.pdf',
    fileType: 'PDF',
    fileSize: '2.3 MB',
    uploadDate: '2023-10-10',
    uploadedBy: 'John Doe',
    description: 'Comprehensive training material for new employees.',
    tags: ['Training', '2023', 'Manual'],
    category: 'Educational > Training Materials',
  },
  {
    id: 2,
    fileName: 'Water Sanitation Research.docx',
    fileType: 'DOCX',
    fileSize: '1.5 MB',
    uploadDate: '2023-09-15',
    uploadedBy: 'Jane Smith',
    description: 'Detailed research paper on water sanitation.',
    tags: ['Research', 'Water Sanitation', 'Environmental'],
    category: 'Environmental > Reports',
  },
  {
    id: 3,
    fileName: 'Fundraising Presentation.pptx',
    fileType: 'PPTX',
    fileSize: '3.2 MB',
    uploadDate: '2023-08-01',
    uploadedBy: 'Alice Johnson',
    description: 'Presentation for potential sponsors.',
    tags: ['Fundraising', 'Presentation', 'Sponsorship'],
    category: 'Sponsorship > Presentations',
  },
];

const dummyCategories = [
  'Educational > Training Materials',
  'Environmental > Reports',
  'Sponsorship > Presentations',
  'Health > Videos',
];

const InternalArchive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredFiles, setFilteredFiles] = useState(dummyFiles);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = dummyFiles.filter(
      (file) =>
        file.fileName.toLowerCase().includes(query) ||
        file.description.toLowerCase().includes(query) ||
        file.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredFiles(filtered);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    const filtered = dummyFiles.filter((file) =>
      file.category.includes(category)
    );

    setFilteredFiles(category ? filtered : dummyFiles);
  };

  return (
    <div className="internal-archive">
      <header className="archive-header">
        <h1>Internal Archive and Resource Library</h1>
        <p>
          Easily search, filter, and access essential documents and resources
          across Lab4GPS projects.
        </p>
      </header>

      <div className="archive-controls">
        <input
          type="text"
          placeholder="Search by keyword or tag..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-dropdown"
        >
          <option value="">All Categories</option>
          {dummyCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="file-list">
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file) => (
            <div className="file-card" key={file.id}>
              <div className="file-info">
                <h3>{file.fileName}</h3>
                <p>
                  <strong>Type:</strong> {file.fileType} |{' '}
                  <strong>Size:</strong> {file.fileSize}
                </p>
                <p>
                  <strong>Uploaded By:</strong> {file.uploadedBy} |{' '}
                  <strong>Upload Date:</strong> {file.uploadDate}
                </p>
                <p>
                  <strong>Description:</strong> {file.description}
                </p>
                <p>
                  <strong>Tags:</strong> {file.tags.join(', ')}
                </p>
                <p>
                  <strong>Category:</strong> {file.category}
                </p>
              </div>
              <div className="file-actions">
                <button className="download-btn">Download</button>
                <button className="view-btn">View</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-files-message">No files found.</p>
        )}
      </div>
    </div>
  );
};

export default InternalArchive;
