import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import officeImage from "../assets/about/IMG_0534_0002_Color Lookup 3.jpg";
import leader1 from "../assets/about/Alen.JPG"; // Alen Jacob
import leader2 from "../assets/about/Sham.JPG"; // Sham

const Counter = ({ value, title, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = 2000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl md:text-7xl font-light text-primary mb-4 tracking-tighter">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </div>
    </div>
  );
};

const AboutPage = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  return (
    <div ref={scrollRef} className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={officeImage}
            alt="Business Bureau"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-primary text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.8em] font-bold mb-6 md:mb-8 block"
          >
            Since 2019
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[1.1] md:leading-none mb-8 md:mb-12"
          >
            A Legacy of <br />
            <span className="text-primary italic font-serif">Excellence.</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] bg-primary mx-auto md:w-24"
          />
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20">
          <Counter value="5" title="Years of Passion" suffix="+" />
          <Counter value="500" title="Visionary Clients" suffix="+" />
          <Counter value="2" title="Prime Locations" />
          <Counter value="12" title="Premium Amenities" suffix="+" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold mb-6 block">
              The Genesis
            </span>
            <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-8 md:mb-12 leading-tight tracking-tighter">
              A workspace that <br />
              <span className="text-primary italic font-serif">
                inspires
              </span>{" "}
              change.
            </h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-xl">
              <p>
                Business Bureau was born from a simple yet powerful realization:
                workspace is not just a physical location, but a catalyst for
                innovation. We set out to create more than just offices; we
                built a dynamic ecosystem.
              </p>
              <p>
                With half a decade of expertise in managing high-end business
                environments, our team combines operational excellence with a
                deep understanding of what ambitious entrepreneurs truly need.
              </p>
              <p className="font-medium text-gray-900 italic font-serif text-lg md:text-xl">
                "We don't just provide desks; we provide the foundation for your
                next big breakthrough."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={officeImage}
                alt="Office Story"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-2xl md:blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-gray-200 rounded-2xl md:rounded-3xl -z-10 rotate-12" />
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-32">
            <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold mb-6 block">
              The Architects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-900 tracking-tighter">
              Meet our{" "}
              <span className="text-primary italic font-serif">
                Visionaries.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto">
            {/* Leader 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="group space-y-6 md:space-y-8"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl transition-all duration-700">
                <img
                  src={leader1}
                  alt="Alen Jacob"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-light text-gray-900 mb-1 md:mb-2">
                  Alen Jacob
                </h4>
                <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold">
                  Founder & CEO
                </p>
                <p className="mt-3 md:mt-4 text-gray-500 font-light leading-relaxed text-sm md:text-base">
                  A visionary strategist with a passion for building cohesive
                  business communities that thrive on collaboration.
                </p>
              </div>
            </motion.div>

            {/* Leader 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="group space-y-6 md:space-y-8"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl transition-all duration-700">
                <img
                  src={leader2}
                  alt="Sham"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-light text-gray-900 mb-1 md:mb-2">
                  Sham SK
                </h4>
                <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold">
                  Managing Director
                </p>
                <p className="mt-3 md:mt-4 text-gray-500 font-light leading-relaxed text-sm md:text-base">
                  Driving operational excellence and ensuring that every member
                  experiences the highest standard of service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 lg:py-40 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[3rem] group hover:bg-white/10 transition-colors duration-500"
            >
              <div className="w-12 md:w-16 h-[1px] bg-primary mb-8 md:mb-12" />
              <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-light mb-6 md:mb-10 tracking-tighter">
                Our{" "}
                <span className="text-primary italic font-serif">Vision.</span>
              </h3>
              <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
                To be the global benchmark for creative workspaces, empowering
                the next generation of innovators through design-led
                environments and a vibrant community.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[3rem] group hover:bg-white/10 transition-colors duration-500"
            >
              <div className="w-12 md:w-16 h-[1px] bg-primary mb-8 md:mb-12" />
              <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-light mb-6 md:mb-10 tracking-tighter">
                Our{" "}
                <span className="text-primary italic font-serif">Mission.</span>
              </h3>
              <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
                To provide flawlessly managed, community-focused workspaces that
                eliminate operational friction, allowing businesses to focus
                entirely on their mission and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
