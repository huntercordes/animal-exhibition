import React from 'react';
import InfoImageSection from '../components/InfoImageSection';
import outsideImage from '../assets/outsidemuseum.png';
import fox from '../assets/fox.png';
import InfoCardsRow from '../components/InfoCardsRow';
import EventsRow from '../components/EventsRow';
import ReviewRow from '../components/ReviewRow';

const MainPage = () => {
  return (
    <main>
      <InfoImageSection
        imageSrc={outsideImage}
        title="Explore the Beetle Exhibit"
        text="Dive into the world of insects with our unique beetle showcase."
        links={[{ label: 'Learn More', href: '/beetles' }]}
        imageOnLeft={false}
      />
        <InfoCardsRow />
        <EventsRow />
      <InfoImageSection
    imageSrc={fox}
        title="Discover Prehistoric Life"
        text="Uncover fossils and stories from millions of years ago."
        links={[{ label: 'Explore Fossils', href: '/fossils' }]}
        imageOnLeft={true}
      />
      <InfoImageSection
    imageSrc={fox}
        title="Discover Prehistoric Life"
        text="Uncover fossils and stories from millions of years ago."
        links={[{ label: 'Explore Fossils', href: '/fossils' }]}
        imageOnLeft={false}
      />
      <ReviewRow />
    </main>
  );
};

export default MainPage;
