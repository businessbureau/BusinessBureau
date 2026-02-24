import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import interiorImage from "../../assets/about/IMG_0534_0002_Color Lookup 3.jpg";

const About = () => {
  const [readmore, setReadMore] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <div
      ref={containerRef}
      data-section
      id="aboutRef"
      className="relative min-h-screen bg-white overflow-hidden flex items-center"
    >
      {/* Background Image with Scale Animation */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={interiorImage}
          alt="Business Bureau Reception"
          loading="lazy"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.6em] mb-4 block font-bold">
            Our Story
          </span>
          <h2 className="text-gray-900 text-5xl md:text-7xl font-light mb-8 leading-tight">
            Innovate. <br />
            <span className="text-primary italic font-serif">
              Collaborate.
            </span>{" "}
            <br />
            Succeed.
          </h2>

          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <p>
              Discover a vibrant and collaborative workspace designed for
              innovation, productivity, and community. Business Bureau is not
              just a place to work; it's a dynamic ecosystem where ideas
              flourish.
            </p>

            {readmore && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-gray-500"
              >
                Focusing on freelancers, ambitious entrepreneurs, and growing
                teams, our spaces go beyond desks, merging innovation with
                comfort. Join a community where every interaction sparks
                possibility.
              </motion.p>
            )}

            <button
              onClick={() => setReadMore(!readmore)}
              className="group flex items-center gap-4 text-gray-800 text-sm uppercase tracking-widest mt-8"
            >
              <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all" />
              {readmore ? "Less Information" : "Our Full Story"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
