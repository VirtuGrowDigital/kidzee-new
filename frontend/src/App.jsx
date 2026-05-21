// App.jsx

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div className="overflow-hidden bg-white">

      {/* SCROLL TO TOP */}

      <ScrollToTop />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ACADEMICS */}

        <Route
          path="/academics"
          element={<Academics />}
        />

        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={<Contact />}
        />
     <Route
          path="/gallery"
          element={<Gallery/>}
        />
      </Routes>
      

    </div>
  );
};

export default App;