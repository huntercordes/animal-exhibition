import React from 'react';
import styles from '../styles/ImageGridSection.module.css';

const ImageGridSection = ({ title, subtitle, images }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.imageGrid}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`grid-img-${index}`} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGridSection;
