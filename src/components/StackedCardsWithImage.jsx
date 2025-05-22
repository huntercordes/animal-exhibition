import React from 'react';
import styles from '../styles/StackedCardsWithImage.module.css';
import { Link } from 'react-router-dom';


const StackedCardsWithImage = ({ title, items, imageSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.cards}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.icon} alt="icon" className={styles.icon} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
  <Link to="/mobile">
    <img src={imageSrc} alt="section visual" className={styles.image} />
  </Link>
</div>
    </div>
  );
};

export default StackedCardsWithImage;
