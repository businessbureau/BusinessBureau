import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/Layouts/Utils/PageNotFound";
import SpeedDial from "./Components/Layouts/Utils/SpeedDial";
import ScrollToTop from "./Components/Layouts/Utils/ScrollToTop";
import Loader from "./Components/Layouts/Utils/Loader";
import Lenis from "lenis";

// Lazy-loaded components
const Home = lazy(() => import("./Components/Home"));
const AboutPage = lazy(() => import("./Components/AboutPage"));
const PanampillyNagar = lazy(
  () => import("./Components/Locations/PanampillyNagar"),
);
const Petta = lazy(() => import("./Components/Locations/Petta"));
const ServicesPage = lazy(() => import("./Components/ServicesPage"));
const GalleryPage = lazy(() => import("./Components/GalleryPage"));
const ContactPage = lazy(() => import("./Components/ContactPage"));
const PrivacyPolicy = lazy(() => import("./Components/PrivacyPolicy"));
const TermsAndCondition = lazy(() => import("./Components/TermsAndCondition"));

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
          <Suspense fallback={<Loader />}>
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
          </Suspense>
          <SpeedDial />
        </LenisScroll>
      </Router>
    </div>
  );
}

export default App;
