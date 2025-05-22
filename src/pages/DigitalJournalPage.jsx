import InfoImageSection from '../components/InfoImageSection';
import styles from '../styles/DigitalJournal.module.css';
import ImageGridSection from '../components/ImageGridSection';
import forestgrid from '../assets/forestgrid.png';
import savannagrid from '../assets/savannagrid.png';
import oceangrid from '../assets/oceangrid.png';
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
      imageSrc="/assets/some-image.png"
      title="Engagement Discovery"
      text="We identified what draws visitors in—and what doesn’t."
      links={[{ label: 'Read more', href: '/some-link' }]}
      imageOnLeft={true}
    />
    <VerticalTimelineSection
  title="How We Got Here"
  items={timelineItems}
/>
    </main>
    
    // <div className={styles.digitalJournal}>
      
    //   {/* Row 1: Full-width header image with centered heading */}
    //   <section className={styles.headerImageSection}>
    //     <div className={styles.headerOverlay}>
    //       <h1 className={styles.headerText}>Digital Journal</h1>
    //     </div>
    //   </section>

    //   {/* Row 2: Title + 3 stacked cards on left, image on right */}
    //   <section className={styles.stackedCardsRow}>
    //     <div className={styles.leftContent}>
    //       <h2>Behind the Process</h2>
    //       <div className={styles.card}>Card 1 Content</div>
    //       <div className={styles.card}>Card 2 Content</div>
    //       <div className={styles.card}>Card 3 Content</div>
    //     </div>
    //     <div className={styles.rightImage}>
    //       <img src="/assets/your-image.png" alt="Process Visual" />
    //     </div>
    //   </section>

    //   {/* Row 3: Centered title + paragraph + 4 images */}
    //   <section className={styles.gallerySection}>
    //     <h2>Our Visual Story</h2>
    //     <p>Explore the journey through key images from the project.</p>
    //     <div className={styles.imageGrid}>
    //       <img src="/assets/image1.png" alt="1" />
    //       <img src="/assets/image2.png" alt="2" />
    //       <img src="/assets/image3.png" alt="3" />
    //       <img src="/assets/image4.png" alt="4" />
    //     </div>
    //   </section>

    //   {/* Row 4: InfoImageSection component */}
    //   <InfoImageSection
    //     imageSrc="/assets/some-image.png"
    //     title="Engagement Discovery"
    //     text="We identified what draws visitors in—and what doesn’t."
    //     linkText="Read more"
    //     linkHref="/some-link"
    //   />

    //   {/* Row 5: Centered text block with down arrows and subsections */}
    //   <section className={styles.textFlowSection}>
    //     <h2>The Flow of Insight</h2>

    //     <div className={styles.subsection}>
    //       <h3>Understanding the Visitor</h3>
    //       <p>We dove into the behaviors, motivations, and pain points of our target audience.</p>
    //       <div className={styles.arrow}>↓</div>
    //     </div>

    //     <div className={styles.subsection}>
    //       <h3>Shaping the Experience</h3>
    //       <p>Based on our findings, we sketched out meaningful and interactive touchpoints.</p>
    //       <div className={styles.arrow}>↓</div>
    //     </div>

    //     <div className={styles.subsection}>
    //       <h3>Crafting the Solution</h3>
    //       <p>The result: a digital experience designed to enhance engagement after the museum visit.</p>
    //     </div>
    //   </section>
    // </div> 
  );
};

export default DigitalJournal;
