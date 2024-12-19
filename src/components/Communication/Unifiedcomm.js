import React, { useState } from 'react';
import Announcements from './Announcements';
import Messaging from './Messaging';
import Feedback from './Feedback';
import '../../styles/Unifiedcomm.css';

const Unifiedcomm = () => {
    const [activeTab, setActiveTab] = useState('announcements');

    return (
        <div className="unifiedcomm-container-unique">
            <div className="unifiedcomm-tabs-unique">
                <button
                    className={`unifiedcomm-tab-button-unique ${activeTab === 'announcements' ? 'unifiedcomm-active-unique' : ''}`}
                    onClick={() => setActiveTab('announcements')}
                >
                    Announcements
                </button>
                <button
                    className={`unifiedcomm-tab-button-unique ${activeTab === 'messaging' ? 'unifiedcomm-active-unique' : ''}`}
                    onClick={() => setActiveTab('messaging')}
                >
                    Messaging
                </button>
                <button
                    className={`unifiedcomm-tab-button-unique ${activeTab === 'feedback' ? 'unifiedcomm-active-unique' : ''}`}
                    onClick={() => setActiveTab('feedback')}
                >
                    Feedback
                </button>
            </div>
            <div className="unifiedcomm-tab-content-unique">
                {activeTab === 'announcements' && <Announcements />}
                {activeTab === 'messaging' && <Messaging />}
                {activeTab === 'feedback' && <Feedback />}
            </div>
        </div>
    );
};

export default Unifiedcomm;
