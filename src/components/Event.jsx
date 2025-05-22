// Event.jsx
import React from 'react';
import styles from '../styles/Event.module.css';

const Event = ({ date, title, location, description, ticketsLeft, soldOut }) => {
  // date: { dayOfWeek, dayNumber, month, year }
  return (
    <div className={styles.eventCard}>
      {/* Date block on left (25%) */}
      <div className={styles.dateBlock}>
        <span className={styles.dayOfWeek}>{date.dayOfWeek}</span>
        <span className={styles.dayNumber}>{date.dayNumber}</span>
        <span className={styles.monthYear}>{date.month} {date.year}</span>
        <div className={styles.verticalLine} />
      </div>

      {/* Main content block (60%) */}
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.ticketsLeftBtn}>
            {ticketsLeft} Tickets Left
          </button>
        </div>
        <h4 className={styles.location}>{location}</h4>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Buy ticket / sold out button (15%) */}
      <div className={styles.buyButtonWrapper}>
        <button 
          className={styles.buyButton} 
          disabled={soldOut}
        >
          {soldOut ? 'Sold Out' : 'Buy Ticket'}
        </button>
      </div>
    </div>
  );
};

export default Event;
