import React from 'react';
import styles from '../styles/InfoImageSection.module.css';
import { Link } from 'react-router-dom';


const InfoImageSection = ({ imageSrc, title, text, links, imageOnLeft = true }) => {
  return (
    <section className={`${styles.section} ${imageOnLeft ? styles.left : styles.right}`}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subparagraph}>{text}</p>
        <div className={styles.links}>
          {links.map(link => (
  <Link key={link.to} to={link.to}>{link.label}</Link>
))}
        </div>
      </div>
    </section>
  );
};

export default InfoImageSection;
