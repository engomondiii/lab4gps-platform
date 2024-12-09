// SearchBar.js
import React from 'react';
import styles from '../../styles/SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search..." />
      <div className={styles.searchIcon}></div>
    </div>
  );
};

export default SearchBar;
