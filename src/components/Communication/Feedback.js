import React, { useState } from 'react';
import '../../styles/Feedback.css';

const dummyFeedback = [
    {
        id: 1,
        topic: "Workshop Experience",
        detail: "The session was insightful, but the materials could have been distributed earlier.",
        votes: 5,
        anonymous: false
    },
    {
        id: 2,
        topic: "Training Materials",
        detail: "Need improvement in the training materials provided during onboarding.",
        votes: 3,
        anonymous: true
    },
    {
        id: 3,
        topic: "Meeting Duration",
        detail: "Suggest extending the weekly meeting duration to accommodate more Q&A.",
        votes: 12,
        anonymous: false
    }
];

const Feedback = () => {
    const [feedbackList, setFeedbackList] = useState(dummyFeedback);
    const [feedbackInput, setFeedbackInput] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleInputChange = (event) => {
        setFeedbackInput(event.target.value);
    };

    const handleCheckboxChange = () => {
        setIsAnonymous(!isAnonymous);
    };

    const submitFeedback = () => {
        if (feedbackInput.trim() !== '') {
            const newFeedback = {
                id: feedbackList.length + 1,
                topic: "New Feedback",
                detail: feedbackInput,
                votes: 0,
                anonymous: isAnonymous
            };
            setFeedbackList([...feedbackList, newFeedback]);
            setFeedbackInput('');
            setIsAnonymous(false);
        }
    };

    const incrementVote = (id) => {
        const updatedFeedback = feedbackList.map(feedback => {
            if (feedback.id === id) {
                return { ...feedback, votes: feedback.votes + 1 };
            }
            return feedback;
        });
        setFeedbackList(updatedFeedback);
    };

    return (
        <div className="feedback-container-unique">
            <h1 className="feedback-title-unique">Feedback and Suggestions</h1>
            <div className="feedback-form-unique">
                <textarea
                    value={feedbackInput}
                    onChange={handleInputChange}
                    placeholder="Your feedback..."
                    className="feedback-input-unique"
                />
                <div className="feedback-options-unique">
                    <label className="feedback-checkbox-label-unique">
                        <input
                            type="checkbox"
                            checked={isAnonymous}
                            onChange={handleCheckboxChange}
                            className="feedback-checkbox-unique"
                        /> Submit anonymously
                    </label>
                    <button onClick={submitFeedback} className="feedback-submit-button-unique">Submit Feedback</button>
                </div>
            </div>

            <div className="feedback-list-unique">
                {feedbackList.map(feedback => (
                    <div key={feedback.id} className={`feedback-item-unique ${feedback.anonymous ? 'feedback-anonymous-unique' : ''}`}>
                        <h3 className="feedback-topic-unique">{feedback.topic}</h3>
                        <p className="feedback-detail-unique">{feedback.detail}</p>
                        <div className="feedback-actions-unique">
                            <button onClick={() => incrementVote(feedback.id)} className="feedback-vote-button-unique">Vote ({feedback.votes})</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;
