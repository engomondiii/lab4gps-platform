// src/components/ImageUpload/ImageUpload.js

import React, { useState } from 'react';
import styles from './ImageUpload.module.css';

const ImageUpload = ({ label, register, required, accept, onChange, error }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.imageUploadGroup}>
      <label>{label}</label>
      <input
        type="file"
        accept={accept}
        {...register}
        onChange={handleChange}
        className={error ? styles.errorInput : ''}
      />
      {preview && <img src={preview} alt="Preview" className={styles.imagePreview} />}
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
};

export default ImageUpload;
