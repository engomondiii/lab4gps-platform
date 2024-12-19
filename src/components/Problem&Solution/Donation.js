// src/components/Problem&Solution/Donation.js
import React from "react"; 
import {FaDonate } from 'react-icons/fa';
import styles from "./Donation.module.css"; // Rename style.css to Donation.module.css and adjust imports

export const Donation = () => {
    return (
        <div className={styles.donation}>
            <div className={styles.frame}>
                <div className={styles["donate-text"]}>
                    <div className={styles["text-wrapper"]}>Donate to this cause</div>
                    <FaDonate className={styles.donationIcon} />
                </div>
                <p className={styles.div}>$ 800 raised of $ 3,000</p>
            </div>

            <div className={styles["frame-2"]}>
                <div className={styles.progressbar}>
                    <div className={styles["progressbar-2"]} />
                </div>
                <div className={styles.div}>27%</div>
            </div>

            <button className={styles.button}>
                <button className={styles["button-2"]}>Donate Now</button>
            </button>
        </div>
    );
};
