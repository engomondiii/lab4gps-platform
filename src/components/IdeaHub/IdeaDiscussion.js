import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/IdeaDiscussion.css";

const IdeaDiscussion = () => {
  const { id } = useParams(); // Retrieve idea ID from the URL
  const navigate = useNavigate();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Simulate fetching idea details and existing comments
  useEffect(() => {
    // Replace with API calls
    const fetchIdeaDetails = () => {
      const dummyIdeas = [
        {
          id: "1",
          title: "Community Solar Lighting Program",
          problem:
            "Energy access is a significant issue in rural areas, leaving many communities without reliable lighting solutions.",
        },
        {
          id: "2",
          title: "Mobile Health Clinic",
          problem:
            "Lack of access to medical facilities in remote areas results in preventable health issues.",
        },
      ];
      const selectedIdea = dummyIdeas.find((idea) => idea.id === id);
      setIdea(selectedIdea);

      // Dummy comments
      const dummyComments = [
        {
          id: 1,
          user: "Alice",
          text: "This is a great initiative! Have you considered integrating community training?",
        },
        {
          id: 2,
          user: "Bob",
          text: "I suggest adding solar battery storage for reliability.",
        },
      ];
      setComments(dummyComments);

      setLoading(false);
    };

    fetchIdeaDetails();
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, user: "You", text: newComment.trim() },
      ]);
      setNewComment("");
    }
  };

  if (loading) {
    return <div className="loading">Loading discussion...</div>;
  }

  if (!idea) {
    return <div className="error">Idea not found.</div>;
  }

  return (
    <div className="discussion-container">
      <header className="discussion-header">
        <h1>Discussion: {idea.title}</h1>
        <p>
          <strong>Problem:</strong> {idea.problem}
        </p>
        <button
          className="back-to-details"
          onClick={() => navigate(`/idea-hub/idea/${id}`)}
        >
          Back to Idea Details
        </button>
      </header>

      <section className="comments-section">
        <h2>Discussion Thread</h2>
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <strong>{comment.user}</strong>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="add-comment-section">
        <h2>Add Your Comment</h2>
        <textarea
          placeholder="Share your thoughts, suggestions, or feedback..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="add-comment-btn" onClick={handleAddComment}>
          Post Comment
        </button>
      </section>
    </div>
  );
};

export default IdeaDiscussion;
