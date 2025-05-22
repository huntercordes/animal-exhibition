// Event.jsx
import React from 'react';
import styles from '../styles/Event.module.css';

const Event = ({ imageSrc, title, description, link }) => {
  return (
    <div className={styles.eventCard}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link.href}>{link.label}</a>
      </div>
    </div>
  );
};

export default Event;
