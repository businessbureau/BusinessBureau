import React, { useState, useEffect } from "react";
import Header from "./Layouts/Header";
import HeroSection from "./Layouts/HeroSection";
import About from "./Layouts/About";
import Services from "./Layouts/Services";
import Amenities from "./Layouts/Amenities";
import Testimonials from "./Layouts/Testimonials";
import FAQ from "./Layouts/FAQ";
import Contact from "./Layouts/Contact";
import Footer from "./Layouts/Footer";
import Loader from "./Layouts/Utils/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate content loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // You can adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <HeroSection />
          <About />
          <Services />
          <Amenities />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
