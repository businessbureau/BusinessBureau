import React, { useEffect } from "react";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";
import PanampillyNagar from "./Components/Locations/PanampillyNagar";
import Petta from "./Components/Locations/Petta";
import ServicesPage from "./Components/ServicesPage";
import GalleryPage from "./Components/GalleryPage";
import ContactPage from "./Components/ContactPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PageNotFound from "./Components/Layouts/Utils/PageNotFound";
import SpeedDial from "./Components/Layouts/Utils/SpeedDial";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";
import ScrollToTop from "./Components/Layouts/Utils/ScrollToTop";
import Lenis from "lenis";

const LenisScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Attach to window so ScrollToTop can access the persistent instance
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []); // Run only once on mount

  return children;
};

function App() {
  return (
    <div className="App">
      <Router>
        <LenisScroll>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/locations/panampilly-nagar"
              element={<PanampillyNagar />}
            />
            <Route path="/locations/petta" element={<Petta />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndCondition />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <SpeedDial />
        </LenisScroll>
      </Router>
    </div>
  );
}

export default App;
