// src/components/CollaborationHubSections/StartupCard.js
import React from 'react';
import styles from './StartupCard.module.css';
import LikeButton from '../common/LikeButton';
import { FaEye, FaComments } from 'react-icons/fa'; // Import icons from react-icons

/**
 * Reusable Startup Card Component
 * Props:
 *  - title: Name of the startup (e.g. "ChackanCha", "Herring")
 *  - description: Text describing the startup's mission and model
 *  - imageSrc: URL or import of the main image
 *  - logoComponent: A React component or an image for the startup logo (e.g. <ChackanCha />, <HerringLogo />)
 *  - views, comments, likes: Numeric stats
 */
export const StartupCard = ({
    title,
    description,
    imageSrc,
    logoComponent,
    views = 0,
    comments = 0,
    likes = 0
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                {/* Image Section */}
                <div className={styles.imageWrapper}>
                    <img src={imageSrc} alt={title} className={styles.mainImage} />
                </div>
                <div className={styles.title}>{title}</div>
                <p className={styles.description}>{description}</p>
                {/* Logo Overlay if needed */}
                <div className={styles.logoWrapper}>
                    {logoComponent}
                </div>
            </div>

            {/* Stats Section */}
            <div className={styles.statsRow}>
                <div className={styles.statItem}>
                    <FaEye className={styles.icon} /> {/* Replaced view image with FaEye icon */}
                    <div className={styles.statLabel}>Views</div>
                    <div className={styles.statCount}>{views}</div>
                </div>
                <div className={styles.statItem}>
                    <FaComments className={styles.icon} /> {/* Replaced comment image with FaComments icon */}
                    <div className={styles.statLabel}>Comments</div>
                    <div className={styles.statCount}>{comments}</div>
                </div>
                <div className={styles.statItem}>
                    <LikeButton initialLiked={false} onToggle={(newState) => console.log("Liked:", newState)} />
                    <div>Likes</div>
                    <div>{likes}</div>
                </div>
            </div>
        </div>
    );
};
