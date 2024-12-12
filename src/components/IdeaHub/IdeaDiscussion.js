import React, { useState, useEffect } from "react";
import "../../styles/IdeaDiscussion.css";

const IdeaDiscussion = () => {
  const [ideas, setIdeas] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentIdea, setCurrentIdea] = useState(null);

  useEffect(() => {
    // Simulate fetching ideas from an API
    const fetchIdeas = () => {
      const dummyIdeas = [
        {
          id: "1",
          title: "Community Solar Lighting Program",
          description:
            "A project to bring sustainable solar lighting to underserved communities.",
        },
        {
          id: "2",
          title: "Mobile Health Clinic",
          description:
            "A mobile solution to provide healthcare services to remote areas.",
        },
        {
          id: "3",
          title: "AI-Powered Education Platform",
          description:
            "An AI-driven platform to revolutionize the way students learn.",
        },
      ];
      setIdeas(dummyIdeas);
      setLoading(false);
    };

    fetchIdeas();
  }, []);

  useEffect(() => {
    // Simulate fetching messages for the selected idea
    if (currentIdea) {
      const fetchMessages = () => {
        const dummyMessages = [
          {
            id: 1,
            user: "Alice Johnson",
            profilePhoto: "https://via.placeholder.com/40",
            timestamp: "2023-12-10 12:45",
            content: `Discussion about ${currentIdea.title}.`,
          },
          {
            id: 2,
            user: "Bob Smith",
            profilePhoto: "https://via.placeholder.com/40",
            timestamp: "2023-12-10 13:00",
            content: "This idea has great potential for real-world impact.",
          },
        ];
        setMessages(dummyMessages);
      };

      fetchMessages();
    }
  }, [currentIdea]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        id: messages.length + 1,
        user: "You",
        profilePhoto: "https://via.placeholder.com/40",
        timestamp: new Date().toISOString().slice(0, 16).replace("T", " "),
        content: newMessage,
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  if (loading) {
    return <div className="loading">Loading ideas...</div>;
  }

  return (
    <div className="discussion-container">
      {!currentIdea && (
        <div className="idea-list">
          <header className="discussion-header">
            <h1>Idea Discussions</h1>
            <p>Select an idea to join its discussion.</p>
          </header>
          <div className="ideas-grid">
            {ideas.map((idea) => (
              <div key={idea.id} className="idea-card">
                <h3 className="idea-title">{idea.title}</h3>
                <p className="idea-description">{idea.description}</p>
                <button
                  className="join-discussion-btn"
                  onClick={() => setCurrentIdea(idea)}
                >
                  Join Discussion
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentIdea && (
        <div className="chat-room">
          <button
            className="back-button"
            onClick={() => setCurrentIdea(null)}
          >
            ← Back to Idea List
          </button>
          <header className="discussion-header">
            <h1>Discussion: {currentIdea.title}</h1>
            <p>{currentIdea.description}</p>
          </header>
          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className="message">
                <img
                  src={message.profilePhoto}
                  alt={`${message.user}'s profile`}
                  className="profile-photo"
                />
                <div className="message-content">
                  <div className="message-header">
                    <strong>{message.user}</strong>
                    <span className="timestamp">{message.timestamp}</span>
                  </div>
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="message-input-container">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="message-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaDiscussion;
