import React from 'react';
import styles from '../styles/InfoImageSection.module.css';

const InfoImageSection = ({ imageSrc, title, text, links, imageOnLeft = true }) => {
  return (
    <section className={`${styles.section} ${imageOnLeft ? styles.left : styles.right}`}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.links}>
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoImageSection;
