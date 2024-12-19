import React, { useState, useEffect } from 'react';
import '../../styles/DiscussionForum.css';

const DiscussionForum = ({ decisionId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Simulate fetching comments from an API based on the decisionId
    const fetchComments = async () => {
      // Placeholder data to simulate an API response
      const fetchedComments = [
        { id: 1, text: "Can we consider adjusting the budget allocation?", author: "John Doe" },
        { id: 2, text: "I think it's vital we discuss potential risks in more detail.", author: "Jane Smith" }
      ];
      setComments(fetchedComments);
    };

    fetchComments();
  }, [decisionId]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!newComment.trim()) return;
    
    const newCommentEntry = {
      id: comments.length + 1,
      text: newComment,
      author: "CurrentUser"  // Replace "CurrentUser" with actual user data if available
    };

    setComments([...comments, newCommentEntry]);
    setNewComment('');
  };

  return (
    <div className="discussion-forum-container">
      <h3 className="discussion-forum-title">Discussion</h3>
      <ul className="discussion-forum-comments-list">
        {comments.map(comment => (
          <li key={comment.id} className="discussion-forum-comment-item">
            <p className="discussion-forum-comment-text">{comment.text}</p>
            <p className="discussion-forum-comment-author">{comment.author}</p>
          </li>
        ))}
      </ul>
      <form className="discussion-forum-comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          className="discussion-forum-comment-input"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          required
        />
        <button type="submit" className="discussion-forum-submit-comment">Post Comment</button>
      </form>
    </div>
  );
};

export default DiscussionForum;
