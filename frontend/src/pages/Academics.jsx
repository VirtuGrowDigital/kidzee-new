import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AcademicsHero from "../components/AcademicsHero";
import AcademicPhilosophy from "../components/AcademicPhilosophy";
import LearningAreas from "../components/LearningAreas";
import MilestonesTimeline from "../components/MilestonesTimeline";
import AcademicsCTA from "../components/AcademicsCTA";

const Academics = () => {
  return (
    <>
      <Navbar />

      <AcademicsHero />
      <AcademicPhilosophy />
      <LearningAreas />
      <MilestonesTimeline />
      <AcademicsCTA />

      <Footer />
    </>
  );
};

export default Academics;