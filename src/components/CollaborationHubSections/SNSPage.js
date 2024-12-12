// SNSPage.js
import React, { useState } from 'react';
import SNSSection from './SNSSection';
import SNSBodyContent from '../Problem&Solution/SNSBodyContent';
import mockData from '../Problem&Solution/mockData';
import styles from './SNSPage.module.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DetailView from '../Problem&Solution/DetailView'; // Ensure correct path

const SNSPage = ({ selectedCard }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalItems = mockData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mockData.slice(startIndex, endIndex);

  const showPagination = totalItems > itemsPerPage;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSeeMore = (cardId) => {
    navigate(`/collaboration-hub/sns4.0/${cardId}`);
  };

  const handleBackToList = () => {
    navigate(`/collaboration-hub/sns4.0`, { replace: true });
  };

  return (
    <div className={styles.pageContainer}>
      <SNSSection />

      {selectedCard ? (
        // Render DetailView, replacing SNSBodyContent
        <DetailView cardData={selectedCard} onBack={handleBackToList} />
      ) : (
        <>
          <section className={styles.filterSection}>
            <h1 className={styles.problemsTitle}>Problems</h1>
            <div className={styles.filterBar}>
              <div className={styles.filterButtons}>
                <button className={`${styles.filterButton} ${styles.active}`}>All</button>
                <button className={styles.filterButton}>Problems</button>
                <button className={styles.filterButton}>Solutions</button>
              </div>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search..." />
                <div className={styles.searchIcon}><FaSearch/></div>
              </div>
            </div>
          </section>

          <section className={styles.listSection}>
            <SNSBodyContent items={currentItems} onSeeMore={handleSeeMore} />
          </section>

          {showPagination && (
            <section className={styles.paginationSection}>
              <div className={styles.paginationControls}>
                <button className={styles.arrowButton} onClick={handlePrev} disabled={currentPage === 1}>&lt;</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <button
                    key={pageNumber}
                    className={`${styles.pageNumber} ${currentPage === pageNumber ? styles.currentPage : ''}`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button className={styles.arrowButton} onClick={handleNext} disabled={currentPage === totalPages}>&gt;</button>
              </div>
              <button className={styles.seeMoreBtn}>See More</button>
            </section>
          )}

          <section className={styles.writeProblemSection}>
            <div className={styles.writeProblemContent}>
              <div className={styles.problemIcon}></div>
              <div>
                <h2>Have you Identified a problem?</h2>
                <p>Adding a problem or giving a solution is open for all members. Take part in expressing your love in action.</p>
              </div>
            </div>
            <button className={styles.writeProblemButton}>Write a problem</button>
          </section>
        </>
      )}
    </div>
  );
};

export default SNSPage;
