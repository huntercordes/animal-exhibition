import InfoImageSection from '../components/InfoImageSection';
import styles from '../styles/DigitalJournal.module.css';
import ImageGridSection from '../components/ImageGridSection';
import forestgrid from '../assets/forestgrid.png';
import savannagrid from '../assets/savannagrid.png';
import oceangrid from '../assets/oceangrid.png';
import oceanframe from '../assets/oceanframe.png';
import junglegrid from '../assets/junglegrid.png';
import handholdphone from '../assets/handholdphone.png';
import forestsymbol from '../assets/forestsymbol.png';
import learnsymbol from '../assets/learnsymbol.png';
import exploresymbol from '../assets/exploresymbol.png';
import headermuseum from '../assets/headermuseum.Jpg';
import StackedCardsWithImage from '../components/StackedCardsWithImage';
import HeaderImageSection from '../components/HeaderImageSection';
import VerticalTimelineSection from '../components/VerticalTimelineSection';

const timelineItems = [
  {
    title: "Understanding the Users",
    description: "We gathered insights from interviews and observations to identify pain points.",
  },
  {
    title: "Defining the Values",
    description: "We refined a list of values that reflect what matters most to our users.",
  },
  {
    title: "Shaping the Solution",
    description: "We used this knowledge to guide the digital solution we are developing.",
  },
];
const items = [
  {
    icon: forestsymbol,
    title: "Creative Journey",
    description: "Explore how creativity can be sparked through unique museum experiences.",
  },
  {
    icon: learnsymbol,
    title: "Interactive Learning",
    description: "Understand how interactive elements increase engagement and learning.",
  },
  {
    icon: exploresymbol,
    title: "Connection to Nature",
    description: "Discover how users connect deeper with the natural world through exhibits.",
  },
];
const DigitalJournal = () => {
  return (
    <main>
    <HeaderImageSection
    imageSrc={headermuseum}
    headingText="Welcome to the Naturhistorisk Museum"/>
    <StackedCardsWithImage
  title="What We Learned"
  items={items}
  imageSrc={handholdphone}
/>
    <ImageGridSection
  title="Explore More"
  subtitle="These images reflect key moments and themes from our digital experience project."
  images={[forestgrid, savannagrid, junglegrid, oceangrid]}
/>
<InfoImageSection
      imageSrc={oceanframe}
      title="Explore the Wild"
      text="Dive into four unique biomes and discover the animals that live there. Tap to learn their stories, behaviors, and fun facts — all in one interactive journey."
      links={[{ label: 'Discover', href: '/animal-exhibition/mobile' }]}
      imageOnLeft={true}
    />
    <VerticalTimelineSection
  title="How We Got Here"
  items={timelineItems}
/>
    </main>
  );
};

export default DigitalJournal;
