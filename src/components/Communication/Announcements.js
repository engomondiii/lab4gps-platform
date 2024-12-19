import React, { useState } from 'react';
import '../../styles/Announcements.css';

const dummyAnnouncements = [
    {
        id: 1,
        title: "Upcoming Team Meeting",
        message: "Thursday at 3 PM in the main conference room.",
        category: "General Updates",
        pinned: true,
        urgent: true,
    },
    {
        id: 2,
        title: "New HR Policies",
        message: "Please review the new HR policies by next Monday.",
        category: "General Updates",
        pinned: false,
        urgent: false,
    },
    {
        id: 3,
        title: "Grant Application Deadline Extended",
        message: "The deadline for the grant application has been extended to Dec. 15.",
        category: "Urgent Notices",
        pinned: true,
        urgent: true,
    },
    {
        id: 4,
        title: "Quarterly Team Outing Planned",
        message: "Our next quarterly outing is scheduled for the second week of January.",
        category: "Project-Specific News",
        pinned: false,
        urgent: false,
    }
];

const Announcements = () => {
    const [announcements, setAnnouncements] = useState(dummyAnnouncements);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        if (!value) {
            setAnnouncements(dummyAnnouncements);
            return;
        }

        const filtered = dummyAnnouncements.filter(announcement =>
            announcement.title.toLowerCase().includes(value) ||
            announcement.message.toLowerCase().includes(value)
        );
        setAnnouncements(filtered);
    };

    return (
        <div className="announcements-container-unique">
            <h1 className="announcements-title-unique">Announcements</h1>
            <input
                type="text"
                placeholder="Search announcements..."
                onChange={handleSearch}
                value={searchTerm}
                className="announcements-search-bar-unique"
            />
            {announcements.map((announcement) => (
                <div
                    key={announcement.id}
                    className={`announcement-unique ${
                        announcement.urgent ? 'announcement-urgent-unique' : ''
                    } ${announcement.pinned ? 'announcement-pinned-unique' : ''}`}
                >
                    <h3 className="announcement-title-unique">{announcement.title}</h3>
                    <p className="announcement-message-unique">{announcement.message}</p>
                    <span className="announcement-category-tag-unique">{announcement.category}</span>
                    {announcement.urgent && <span className="announcement-urgent-tag-unique">Urgent</span>}
                </div>
            ))}
        </div>
    );
};

export default Announcements;
