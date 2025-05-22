// InfoCardsRow.jsx
import React from 'react';
import InfoCards from './InfoCards';
import styles from '../styles/InfoCardsRow.module.css';
import curiousicon from '../assets/curiousicon.png';
import eyeicon from '../assets/eyeicon.png';
import fileicon from '../assets/fileicon.png';

const InfoCardsRow = () => {
  const cardsData = [
    {
      icon: eyeicon,
      title: 'Explore the Wonders of Nature Through Our Engaging Displays ',
      text: 'Dive into our latest exhibitions that celebrate the beauty and diversity of nature.',
      link: { label: 'Learn More', href: '#' },
    },
    {
      icon: fileicon,
      title: 'Experience the Magic of Our Permanent Collections',
      text: "Our permanent collections offer a captivating journey through Earth's history.",
      link: { label: 'Explore', href: '#' },
    },
    {
      icon: curiousicon,
      title: 'Join Us for Upcoming Exhibitions That Inspire Curiosity and Learning',
      text: 'Stay tuned for our upcoming exhibitions that will ignite your passion for nature.',
      link: { label: 'Discover', href: '#' },
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Discover Our Fascinating Current Exhibitions at Naturhistorisk Museum Aarhus</h2>
    <div className={styles.cardRow}>
      {cardsData.map((card, index) => (
        <InfoCards
          key={index}
          icon={card.icon}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
    </div>
  );
};

export default InfoCardsRow;
