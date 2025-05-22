import React from 'react';
import styles from '../styles/HeaderImageSection.module.css';

const HeaderImageSection = ({ imageSrc, headingText }) => {
  return (
    <div className={styles.headerSection} style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className={styles.overlay}>
        <h1>{headingText}</h1>
      </div>
    </div>
  );
};

export default HeaderImageSection;
