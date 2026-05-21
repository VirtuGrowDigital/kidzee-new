import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GalleryHero from "../components/GalleryHero";
import GalleryGrid from "../components/GalleryGrid";
import SpecialEvents from "../components/SpecialEvents";
import VideoSection from "../components/VideoSection";
import GalleryCTA from "../components/GalleryCTA";

const Gallery = () => {

  return (
    <div className="overflow-hidden bg-[#6D24A5]">

      <Navbar />

      <GalleryHero />

      <GalleryGrid />

      <SpecialEvents />
      <VideoSection/>
      <GalleryCTA/>

      <Footer />

    </div>
  );
};

export default Gallery;