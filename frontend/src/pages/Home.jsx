import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Curriculum from "../components/Curriculum";
import CTA from "../components/CTA";
import CampusLife from "../components/CampusLife";
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <Curriculum />
      <CTA />
      <CampusLife />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;