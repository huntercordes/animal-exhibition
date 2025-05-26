import React from 'react';
import InfoImageSection from '../components/InfoImageSection';
import outsideImage from '../assets/outsidemuseum.png';
import placeholder from '../assets/placeholder.png'; 
import InfoCardsRow from '../components/InfoCardsRow';
import EventsRow from '../components/EventsRow';
import ReviewRow from '../components/ReviewRow';
import styles from '../styles/InfoImageSection.module.css';
const MainPage = () => {
  return (
    <main>
      <InfoImageSection
        imageSrc={outsideImage}
        title={
    <>
      Discover the <span className={styles.highlight}>Wonders of Nature </span> 
 Today
    </>
  }
        text="Explore our latest exhibition showcasing the beauty and diversity of the natural world. Join us for an unforgettable journey through our collections and interactive displays."
        links={[{ label: 'Learn More', href: '/beetles' }]}
        imageOnLeft={false}
      />
        <InfoCardsRow />
        <EventsRow />
      <InfoImageSection
    imageSrc={placeholder}
        title="Explore Our Digital Journal"
        text="Stay informed with the latest research, discoveries, and natural science insights from the Naturhistorisk Museum. Dive into peer reviewed articles, fieldwork reports, and expert contributions all in one accessible digital platform."
        links={[{ label: 'Learn More', href: '/animal-exhibition/mobile' }]}
        imageOnLeft={true}
      />
      <ReviewRow />
    </main>
  );
};

export default MainPage;
/*another comment to test the code snippet*/