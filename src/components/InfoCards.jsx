import React from 'react';
import styles from '../styles/InfoCards.module.css';
import { ArrowRight } from 'lucide-react';

const InfoCards = ({ icon, title, text, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link.href}>
        {link.label} <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default InfoCards;

