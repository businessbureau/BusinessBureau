import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Seo from "./Seo";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import officeImage from "../assets/about/IMG_0534_0002_Color Lookup 3.jpg";
import leader1 from "../assets/about/Alen.JPG"; // Alen Jacob

const Counter = ({ value, title, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
    margin: "-50px",
  });

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
    } else {
      setCount(0);
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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-white scroll-smooth w-full">
      <Seo
        title="About Business Bureau | Coworking Space in Kerala"
        description="Learn about our coworking space in Kerala built to support collaboration, productivity, and sustainable business growth."
        url="https://www.businessbureau.in/about"
      />
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[80vh] md:h-[90vh] overflow-hidden flex items-center justify-center bg-black"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 bg-gray-900"
        >
          <img
            src={officeImage}
            alt="Business Bureau"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Enhanced black overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black" />
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[1.1] md:leading-none mb-8 md:mb-12"
          >
            A Legacy of <br />
            <span className="text-primary italic font-serif">Excellence.</span>
          </motion.h2>
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
        <div className="container mx-auto px-6 xl:max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20">
          <Counter value="5" title="Years of Passion" suffix="+" />
          <Counter value="500" title="Visionary Clients" suffix="+" />
          <Counter value="2" title="Prime Locations" />
          <Counter value="12" title="Premium Amenities" suffix="+" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-screen-2xl 3xl:max-w-[2000px] mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <h1 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              coworking space in Kochi
            </h1>
            <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-8 md:mb-12 leading-tight tracking-tighter">
              A workspace that <br />
              <span className="text-primary italic font-serif">
                inspires
              </span>{" "}
              change.
            </h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-xl">
              <p>
                With over 4+ years of proven experience, Business Bureau has
                established itself as a reliable and professionally managed
                coworking destination in Kochi and Ernakulam. Designed to
                support modern workstyles, the workspace offers a refined
                balance of flexibility, functionality, and operational
                excellence, making it a preferred choice for today’s dynamic
                professionals.
              </p>
              <p>
                Backed by strong expertise in Operations & Facilities
                Management, the workspace ensures seamless day-to-day
                functioning, consistent service quality, and a dependable
                professional environment. From infrastructure upkeep to member
                support systems, every operational detail is managed with
                precision.
              </p>
              <p className="font-medium text-gray-900 italic font-serif text-lg md:text-xl">
                "We enable individuals and teams to focus entirely on
                productivity without unnecessary distractions."
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-4 px-8 py-4 bg-primary overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:text-black transition-colors duration-300">
                    Connect Us
                  </span>
                  <span className="relative z-10 w-8 h-[1px] bg-white group-hover:bg-black group-hover:w-12 transition-all duration-300"></span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, margin: "-50px" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
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

      {/* Leadership Section - Premium Redesign */}
      <section className="py-20 md:py-32 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 xl:max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-gray-100"
              >
                <img
                  src={leader1}
                  alt="Alen Jacob"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative elements for premium feel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary/5 rounded-full -z-10 blur-3xl"
              />
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-[1px] bg-primary hidden lg:block" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold mb-6 block">
                  Leadership
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-light text-gray-900 tracking-tighter leading-none mb-10">
                  Alen <br />
                  <span className="text-primary italic font-serif">Jacob.</span>
                </h2>

                <div className="space-y-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-900 text-lg md:text-2xl font-light leading-snug"
                  >
                    Alan Sir, the owner, brings a hands-on leadership approach
                    backed by deep operational knowledge and industry
                    experience.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6 text-gray-500 font-light leading-relaxed text-base md:text-lg max-w-xl"
                  >
                    <p>
                      His vision focuses on creating professional work
                      environments that promote efficiency, collaboration, and
                      long-term business growth. Through consistent involvement
                      and attention to detail, he has shaped a workspace trusted
                      by diverse professionals across Kochi.
                    </p>
                    <p>
                      His leadership style emphasizes practical decision-making,
                      service consistency, and member satisfaction, ensuring
                      that every workspace operates to high professional
                      standards.
                    </p>
                    <p>
                      By actively overseeing operations and continuously
                      improving facilities, he has created an environment where
                      professionals feel supported, valued, and confident in
                      their daily work experience.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="h-[1px] bg-gray-100 mt-12"
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold"
                  >
                    Founder & Managing Director
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 lg:py-40 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 xl:max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px]">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[3rem] group hover:bg-white/10 transition-colors duration-500"
            >
              <div className="w-12 md:w-16 h-[1px] bg-primary mb-8 md:mb-12" />
              <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-light mb-6 md:mb-10 tracking-tighter">
                Our{" "}
                <span className="text-primary italic font-serif">Vision.</span>
              </h3>
              <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
                The vision focuses on fostering a supportive environment that
                encourages innovation, knowledge sharing, and meaningful
                professional relationships. By removing rigid structures and
                promoting flexibility, the workspace aims to empower individuals
                and businesses to adapt, scale, and thrive in a modern work
                culture.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[3rem] group hover:bg-white/10 transition-colors duration-500"
            >
              <div className="w-12 md:w-16 h-[1px] bg-primary mb-8 md:mb-12" />
              <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-light mb-6 md:mb-10 tracking-tighter">
                Our{" "}
                <span className="text-primary italic font-serif">Mission.</span>
              </h3>
              <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
                The mission is driven by a commitment to operational excellence,
                reliable infrastructure, and consistent service quality. By
                offering flexible workspace solutions and strategic locations,
                the workspace enables professionals and teams to focus on their
                goals while adapting easily to changing business needs.
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
