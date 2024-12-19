import React, { useState } from 'react';
import '../../styles/Messaging.css';

// Dummy data for chats and message boards
const dummyData = {
    directMessages: [
        { id: 1, name: "John Doe", lastMessage: "Can you clarify the budget allocation for Phase 2?" },
        { id: 2, name: "Jane Smith", lastMessage: "Meeting confirmed for tomorrow." }
    ],
    groupChats: [
        { id: 1, name: "Renewable Energy Project", lastMessage: "Please confirm the deliverables before the presentation." }
    ],
    messageBoards: [
        { id: 1, category: "Feedback", posts: [{ message: "The new workflow is great!", author: "Tom" }] },
        { id: 2, category: "Resources", posts: [{ message: "Uploaded the latest project guidelines.", author: "Emily" }] }
    ]
};

const Messaging = () => {
    const [messages, setMessages] = useState(dummyData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
    };

    return (
        <div className="messaging-container-unique">
            <h1 className="messaging-title-unique">Messaging System</h1>
            <input
                type="text"
                placeholder="Search messages..."
                onChange={handleSearch}
                value={searchTerm}
                className="messaging-search-bar-unique"
            />

            <div className="messaging-direct-messages-unique">
                <h2 className="messaging-section-title-unique">Direct Messages</h2>
                {messages.directMessages.map(msg => (
                    <div key={msg.id} className="messaging-message-unique">
                        <h3 className="messaging-message-title-unique">{msg.name}</h3>
                        <p className="messaging-message-content-unique">{msg.lastMessage}</p>
                    </div>
                ))}
            </div>

            <div className="messaging-group-chats-unique">
                <h2 className="messaging-section-title-unique">Group Chats</h2>
                {messages.groupChats.map(chat => (
                    <div key={chat.id} className="messaging-message-unique">
                        <h3 className="messaging-message-title-unique">{chat.name}</h3>
                        <p className="messaging-message-content-unique">{chat.lastMessage}</p>
                    </div>
                ))}
            </div>

            <div className="messaging-message-boards-unique">
                <h2 className="messaging-section-title-unique">Message Boards</h2>
                {messages.messageBoards.map(board => (
                    <div key={board.id} className="messaging-board-unique">
                        <h3 className="messaging-board-title-unique">{board.category}</h3>
                        {board.posts.map((post, index) => (
                            <div key={index} className="messaging-post-unique">
                                <p className="messaging-post-content-unique">
                                    <strong className="messaging-post-author-unique">{post.author}:</strong> {post.message}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messaging;
