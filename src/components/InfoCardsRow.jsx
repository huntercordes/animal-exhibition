// InfoCardsRow.jsx
import React from 'react';
import InfoCards from './InfoCards';
import styles from '../styles/InfoCardsRow.module.css';

const InfoCardsRow = () => {
  const cardsData = [
    {
      title: 'Explore the Museum',
      text: 'Take a deep dive into our permanent collections.',
      link: { label: 'View Collection', href: '#' },
    },
    {
      title: 'Upcoming Exhibits',
      text: 'See what’s coming to the museum soon.',
      link: { label: 'See What’s Next', href: '#' },
    },
    {
      title: 'Join Our Community',
      text: 'Become a member and enjoy exclusive perks.',
      link: { label: 'Sign Up', href: '#' },
    },
  ];

  return (
    <div className={styles.cardRow}>
      {cardsData.map((card, index) => (
        <InfoCards
          key={index}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default InfoCardsRow;
