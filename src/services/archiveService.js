import api from './api';

/**
 * Fetch all files from the archive.
 * @returns {Promise} Promise resolving to the list of files.
 */
export const fetchAllFiles = async () => {
  try {
    const response = await api.get('/internal-archive/file_storage/');
    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};

/**
 * Fetch file categories for filtering.
 * @returns {Promise} Promise resolving to the list of categories.
 */
export const fetchCategories = async () => {
  try {
    const response = await api.get('/internal-archive/resource_categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

/**
 * Upload a new file to the archive.
 * @param {Object} fileData - FormData containing file details.
 * @returns {Promise} Promise resolving to the uploaded file's data.
 */
export const uploadFile = async (fileData) => {
  try {
    const response = await api.post('/internal-archive/file_storage/', fileData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

/**
 * Update file details in the archive.
 * @param {number} fileId - ID of the file to update.
 * @param {Object} updatedData - Data to update.
 * @returns {Promise} Promise resolving to the updated file's data.
 */
export const updateFile = async (fileId, updatedData) => {
  try {
    const response = await api.patch(`/internal-archive/file_storage/${fileId}/`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating file:', error);
    throw error;
  }
};

/**
 * Delete a file from the archive.
 * @param {number} fileId - ID of the file to delete.
 * @returns {Promise} Promise resolving to the deletion confirmation.
 */
export const deleteFile = async (fileId) => {
  try {
    await api.delete(`/internal-archive/file_storage/${fileId}/`);
    return { success: true, message: 'File deleted successfully.' };
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

/**
 * Fetch notifications related to file changes.
 * @returns {Promise} Promise resolving to the list of notifications.
 */
export const fetchNotifications = async () => {
  try {
    const response = await api.get('/internal-archive/notifications/');
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};
