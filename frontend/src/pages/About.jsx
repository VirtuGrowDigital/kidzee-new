// src/pages/About.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MissionVision from "../components/MissionVision";
import Beliefs from "../components/Beliefs";
import Team from "../components/Team";
import WhyParentsTrust from "../components/WhyParentsTrust";
import AboutCTA from "../components/AboutCTA";

const About = () => {
  return (
    <div className="overflow-hidden bg-white">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <AboutHero />

      {/* OUR STORY */}

      <OurStory />

      {/* MISSION & VISION */}

      <MissionVision />

      {/* BELIEFS */}

      <Beliefs />

      {/* TEAM */}

      <Team />

      {/* TRUST SECTION */}

      <WhyParentsTrust />

      {/* CTA */}

      <AboutCTA />

      {/* FOOTER */}

      <Footer />

    </div>
  );
};

export default About;