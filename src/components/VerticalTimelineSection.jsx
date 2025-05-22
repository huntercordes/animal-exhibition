import React from 'react';
import styles from '../styles/VerticalTimelineSection.module.css';

const VerticalTimelineSection = ({ title, items }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            {index !== 0 && <div className={styles.verticalLine} />}
            <div className={styles.content}>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimelineSection;
