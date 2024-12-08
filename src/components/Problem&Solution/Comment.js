// Comment.js
import React from 'react';
import styles from './DetailView.module.css'; // Reuse the same CSS module or create a separate one
import { FaComment, FaHeart } from 'react-icons/fa';

const Comment = ({ comment }) => {
  const { authorName, time, text, likes, replies, commenterImage } = comment;

  return (
    <div className={styles.commentsSection}>
      <div className={styles.comment}>
        <div className={styles.commenterImageWrapper}>
          <img src={commenterImage || "https://via.placeholder.com/80x90"} alt="commenter" className={styles.commenterImage} />
        </div>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <div className={styles.commentAuthor}>{authorName}</div>
            <div className={styles.commentTime}>{time}</div>
          </div>
          <div className={styles.commentText}>
            {text}
          </div>
          <div className={styles.commentActions}>
            <div className={styles.actionItem}>
            <FaHeart style={{width:16, height:16}}/>
              <span>Like</span>
              <span>{likes}</span>
            </div>
            <div className={styles.separator}>|</div>
            <div className={styles.actionItem}>
            <FaComment style={{width:16, height:16}}/>
              <span>Reply</span>
              <span>{replies}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
