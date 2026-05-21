
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import EnquiryForm from "../components/EnquiryForm";
import EventEnrollment from "../components/EventEnrollment";
import MapSection from "../components/MapSection";
import ContactCTA from "../components/ContactCTA";

const Contact = () => {
    return (
      <div className="overflow-hidden bg-white">
  
        <Navbar />
  
        <ContactHero />
  
        <ContactInfo />
  
        <EnquiryForm />
  
        <EventEnrollment />
  
        <MapSection />
  
        <ContactCTA />
  
        <Footer />
  
      </div>
    );
  };
  
  export default Contact;