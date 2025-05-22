import React from 'react';
import styles from '../styles/ReviewRow.module.css';
import trustpilotLogo from '../assets/trustpilotlogo.png'; // Save the Trustpilot logo image in assets
import reviewerImage from '../assets/profilepic.jpg';     // Save a reviewer profile picture in assets

const ReviewRow = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.stars}>★★★★★</div>

      <p className={styles.reviewText}>
        "Visiting the Naturhistorisk Museum was a captivating experience for my family.
        The exhibits were not only informative but also beautifully presented, making learning fun!"
      </p>

      <div className={styles.reviewerInfo}>
        <img src={reviewerImage} alt="Reviewer" className={styles.avatar} />
        <div className={styles.reviewerDetails}>
          <strong>Anne Johnson</strong>
          <span>Recent Local Visitor</span>
        </div>
        <img src={trustpilotLogo} alt="Trustpilot" className={styles.trustpilotLogo} />
      </div>
    </section>
  );
};

export default ReviewRow;
