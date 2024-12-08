import api from "./api";

// Archive Service for managing files, categories, tags, likes, comments, and downloads
const archiveService = {
  /**
   * Upload a new file to the archive.
   * @param {FormData} fileData - FormData object containing file details.
   * @returns {Promise} - Axios response promise.
   */
  uploadFile(fileData) {
    return api.post("/archive/files/upload/", fileData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  /**
   * Fetch all files with optional filters.
   * @param {Object} params - Query parameters (e.g., category, tags, search).
   * @returns {Promise} - Axios response promise.
   */
  fetchFiles(params = {}) {
    return api.get("/archive/files/", { params });
  },

  /**
   * Fetch details of a specific file by ID.
   * @param {number} fileId - ID of the file.
   * @returns {Promise} - Axios response promise.
   */
  fetchFileDetails(fileId) {
    return api.get(`/archive/files/${fileId}/`);
  },

  /**
   * Delete a file by ID.
   * @param {number} fileId - ID of the file.
   * @returns {Promise} - Axios response promise.
   */
  deleteFile(fileId) {
    return api.delete(`/archive/files/${fileId}/`);
  },

  /**
   * Like or unlike a file.
   * @param {number} fileId - ID of the file.
   * @returns {Promise} - Axios response promise.
   */
  toggleLike(fileId) {
    return api.post(`/archive/files/${fileId}/like/`);
  },

  /**
   * Add a comment to a file.
   * @param {number} fileId - ID of the file.
   * @param {Object} commentData - Comment data (e.g., text).
   * @returns {Promise} - Axios response promise.
   */
  addComment(fileId, commentData) {
    return api.post(`/archive/files/${fileId}/comments/`, commentData);
  },

  /**
   * Increment the download count for a file.
   * @param {number} fileId - ID of the file.
   * @returns {Promise} - Axios response promise.
   */
  incrementDownloadCount(fileId) {
    return api.post(`/archive/files/${fileId}/increment-download/`);
  },

  /**
   * Fetch all categories.
   * @returns {Promise} - Axios response promise.
   */
  fetchCategories() {
    return api.get("/archive/categories/");
  },

  /**
   * Fetch all tags.
   * @returns {Promise} - Axios response promise.
   */
  fetchTags() {
    return api.get("/archive/tags/");
  },
};

export default archiveService;
