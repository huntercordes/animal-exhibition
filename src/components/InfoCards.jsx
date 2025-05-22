// InfoCards.jsx
import React from 'react';
import styles from '../styles/InfoCards.module.css';

const InfoCards = ({ title, text, link }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link.href}>{link.label}</a>
    </div>
  );
};

export default InfoCards;
