// EventsRow.jsx
import React from 'react';
import Event from './Event';
import styles from '../styles/EventsRow.module.css';

const EventsRow = () => {
  const events = [
  {
    date: {
      dayOfWeek: 'Sat',
      dayNumber: '25',
      month: 'May',
      year: '2025',
    },
    title: 'Night at the Museum',
    location: 'Museum Hall A',
    description: 'Experience the museum after dark with guided flashlight tours and activities.',
    ticketsLeft: 34,
    soldOut: false,
  },
  {
    date: {
      dayOfWeek: 'Sun',
      dayNumber: '26',
      month: 'May',
      year: '2025',
    },
    title: 'Beetle Discovery Day',
    location: 'Museum Garden',
    description: 'Join us for a day of hands-on activities focused on insects and beetles.',
    ticketsLeft: 0,
    soldOut: true,
  },
];

  return (
    <section className={styles.eventsSection}>
      <div className={styles.header}>
        <h2>Events</h2>
        <p>Don't miss out on what's happening at the museum.</p>
      </div>
      <div className={styles.eventsContainer}>
        {events.map((event, index) => (
          <Event
            key={index}
            date={event.date}
            dayNumber={event.date.dayNumber}
            dayOfWeek={event.date.dayOfWeek}
            month={event.date.month}
            year={event.date.year}
            title={event.title}
            ticketsLeft={event.ticketsLeft}
            soldOut={event.soldOut}
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsRow;
