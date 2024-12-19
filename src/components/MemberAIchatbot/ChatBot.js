import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaUserFriends, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import '../../styles/Chatbot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAI, setIsAI] = useState(true);
    const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", isBot: true }]);
    const [userInput, setUserInput] = useState('');
    const [chatbotSize, setChatbotSize] = useState({ width: 350, height: 500 });
    const messageEndRef = useRef(null);

    // Scroll to the bottom of messages container every time messages update
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Event data - potentially fetched from a backend or defined here
    const events = [
        { name: "Lab4GPS Hackathon", date: "2024-01-15", link: "https://example.com/register-hackathon" },
        { name: "AI Conference", date: "2024-01-22", link: "https://example.com/register-ai-conference" }
    ];

    const documents = [
        { name: "Climate Change Research", link: "https://example.com/climate-change" },
        { name: "Renewable Energy Whitepaper", link: "https://example.com/renewable-energy" }
    ];

    useEffect(() => {
        if (isAI && isOpen) {
            scheduleReminders();
            sendEventReminders();
        }
    }, [isAI, isOpen]);

    const scheduleReminders = () => {
        setTimeout(() => {
            sendMessage("Reminder: Don't forget the team meeting tomorrow at 10 AM.", true);
        }, 10000);
    };

    const sendEventReminders = () => {
        setTimeout(() => {
            sendMessage("Upcoming events: " + events.map(e => `${e.name} on ${e.date}`).join(", ") + ". Want to sign up?", true);
        }, 20000);
    };

    const toggleChat = () => setIsOpen(!isOpen);
    const toggleSupportType = () => setIsAI(!isAI);

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const sendMessage = (text, isBot = false) => {
        const newMessages = [...messages, { text, isBot }];
        setMessages(newMessages);
        if (!isBot) setUserInput('');
    };

    const simulateBotResponse = (input) => {
        let response = "";
        if (input.toLowerCase().includes("meeting")) {
            response = "The next meeting is scheduled for tomorrow at 10 AM on Zoom.";
        } else if (input.toLowerCase().includes("document") || input.toLowerCase().includes("research")) {
            response = documents.map(doc => `Document: ${doc.name}. Access it here: ${doc.link}`).join("\n");
        } else if (input.toLowerCase().includes("help")) {
            response = "I can help with document retrieval, scheduling, or connecting with team members.";
        } else {
            response = `I'm not sure how to respond to that. Would you like to connect with a human support agent?`;
        }
        setTimeout(() => {
            sendMessage(response, true);
        }, 1500);
    };

    const handleSend = () => {
        sendMessage(userInput);
        if (isAI) {
            simulateBotResponse(userInput);
        }
    };

    const expandChatbot = () => {
        setChatbotSize(prevSize => ({
            width: Math.min(prevSize.width + 75, 800), // Maximum width of 800px
            height: Math.min(prevSize.height + 25, 700) // Maximum height of 700px
        }));
    };

    const minimizeChatbot = () => {
        setChatbotSize(prevSize => ({
            width: Math.max(prevSize.width - 75, 350), // Minimum width of 350px
            height: Math.max(prevSize.height - 25, 500) // Minimum height of 500px
        }));
    };

    return (
        <div className="chatbot-container">
            <button onClick={toggleChat} className="chatbot-toggle">
                {isOpen ? <FaTimes size={24} /> : <FaRobot size={30} />}
            </button>

            {isOpen && (
                <div
                    className="chatbot-interface"
                    style={{ width: `${chatbotSize.width}px`, height: `${chatbotSize.height}px` }}
                >
                    <div className="chatbot-header">
                        <button onClick={toggleSupportType} className="support-toggle">
                            {isAI ? <FaUserFriends title="Switch to Human Support" /> : <FaRobot title="Switch to AI Support" />}
                        </button>
                        <div className="resize-buttons">
                            <button onClick={expandChatbot} className="resize-button">
                                <FaPlus title="Expand" />
                            </button>
                            <button onClick={minimizeChatbot} className="resize-button">
                                <FaMinus title="Minimize" />
                            </button>
                        </div>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                                {message.text}
                            </div>
                        ))}
                        <div ref={messageEndRef} />
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleUserInput}
                            placeholder={isAI ? "Type here to chat with AI..." : "Type here to chat with support..."}
                        />
                        <button onClick={handleSend} disabled={!userInput.trim()}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
