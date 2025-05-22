// EventsRow.jsx
import React from 'react';
import Event from './Event';
import styles from '../styles/EventsRow.module.css';

const EventsRow = () => {
  const events = [
    {
      imageSrc: '/assets/event1.png',
      title: 'Night at the Museum',
      description: 'Experience the museum after dark with guided flashlight tours and activities.',
      link: { href: '#', label: 'Read more' },
    },
    {
      imageSrc: '/assets/event2.png',
      title: 'Beetle Discovery Day',
      description: 'Join us for a day of hands-on activities focused on insects and beetles.',
      link: { href: '#', label: 'Explore Event' },
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
            imageSrc={event.imageSrc}
            title={event.title}
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsRow;
