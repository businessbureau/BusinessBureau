import React, { useState, useEffect } from "react";
import Header from "./Layouts/Header";
import Hero from "./Layouts/Hero";
import About from "./Layouts/About";
import Services from "./Layouts/Services";
import Amenities from "./Layouts/Amenities";
import Testimonials from "./Layouts/Testimonials";
import Contact from "./Layouts/Contact";
import Footer from "./Layouts/Footer";
import Loader from "./Layouts/Utils/Loader";
import VideoPlayer from "./Layouts/VideoPlayer";

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
          {/* <Hero /> */}
           <div className="w-screen bg-black bg-opacity-20 overflow-hidden">
            <div className="relative w-screen">
              <VideoPlayer
                src={"https://res.cloudinary.com/dtwcgfmar/video/upload/v1764757961/19.11.25_petta__M_kvggiw.mp4"}
                poster={"/assets/office-poster.jpg"}
                className="w-screen block shadow-lg"
                isMuted={true}
                controls={false}
              />

             <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start pointer-events-none">
  
  <div className="ml-10"> 
    <img 
      src="https://res.cloudinary.com/dtwcgfmar/image/upload/v1764996691/Business_Bureau_logo_l8enkr.png" 
      alt="logo" 
      className="w-80 p-0 m-0"
    />

    <p className="text-white px-0 text-3xl font-semibold pointer-events-auto text-left mt-5">
      Now at <span className="text-primary">Petta</span>
    </p>
  </div>

</div>

            </div>
          </div>
          <About />
          <Services /> 
          <Amenities />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
