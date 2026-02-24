import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import officeImage from "../../assets/office pics/second slide.webp";
import basementImage from "../../assets/about/IMG_0534_0002_Color Lookup 3.jpg";
import Testimonials from "../Layouts/Testimonials";

const PricingCard = ({ title, price, details }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
  >
    <h4 className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-6">
      {title}
    </h4>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-light text-gray-900">₹{price}</span>
      <span className="text-gray-400 text-sm font-light"> + tax</span>
    </div>
    <p className="text-gray-600 text-sm font-light leading-relaxed mb-8">
      {details}
    </p>
    <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
  </motion.div>
);

const Petta = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const cabinPricing = [
    {
      title: "10-Seat Suite",
      price: "60,000",
      details:
        "Expansive suite for larger teams needing a collaborative and exclusive hub.",
    },
    {
      title: "9-Seat Cabin",
      price: "54,000",
      details:
        "High-performance space designed for productivity and team synergy.",
    },
    {
      title: "6-Seat Cabin",
      price: "36,000",
      details:
        "Balanced workspace for medium-sized teams with professional finish.",
    },
    {
      title: "4-Seat Room",
      price: "24,000",
      details:
        "Compact and efficient, ideal for startups and active collaborators.",
    },
    {
      title: "3-Seat Room",
      price: "19,500",
      details:
        "Focused environment for small units seeking privacy and comfort.",
    },
    {
      title: "1-Seat Dedicated",
      price: "6,000",
      details: "Personalized coworking seat in a thriving business ecosystem.",
    },
    {
      title: "Meeting Room",
      price: "500",
      details: "Affordable state-of-the-art facility available per hour.",
    },
    {
      title: "Day Pass",
      price: "500",
      details: "Flexible daily access for professionals on the move.",
    },
  ];

  const faqs = [
    {
      question: "Is parking available at Petta?",
      answer: "We provide dedicated basement parking exclusively for bikes.",
    },
    {
      question: "What are the timings for Petta center?",
      answer:
        "Our Petta center is open for members from 9 AM to 8 PM with professional support.",
    },
    {
      question: "Are there coworking seats available?",
      answer: "Yes, we offer dedicated seats starting at ₹6,000 + tax.",
    },
    {
      question: "What amenities are included?",
      answer:
        "WIFI, power backup, refreshments, and communal areas are all part of the experience.",
    },
    {
      question: "Where in Petta is the center located?",
      answer:
        "We are situated in a prime business hub with easy access to public transport.",
    },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={officeImage}
            alt="Petta Kochi"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </motion.div>
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[10px] uppercase tracking-[0.8em] font-bold mb-8 block"
          >
            Strategic Hub
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-5xl md:text-8xl font-light tracking-tighter leading-none mb-12"
          >
            Petta <br />
            <span className="text-primary italic font-serif text-6xl md:text-9xl">
              Kochi.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="py-32 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-900 text-3xl md:text-5xl font-light mb-12 tracking-tight">
            Thrive in Kochi's{" "}
            <span className="text-primary italic font-serif">
              emerging hub.
            </span>
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Our Petta location strategically connects you to the growing
            business corridors of Kochi. Designed for agility and high-speed
            collaboration, Business Bureau Petta caters to freelancers and teams
            seeking a vibrant, community-focused workspace. With seamless
            connectivity to major transit points and a focus on operational
            efficiency, it's the perfect launchpad for Kochi's next big
            innovators.
          </p>
        </div>
      </motion.section>

      {/* Cabin Details & Pricing */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block text-center">
              Value & Growth
            </span>
            <h3 className="text-4xl md:text-6xl font-light text-center tracking-tighter">
              Pricing &{" "}
              <span className="text-primary italic font-serif">Spaces.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cabinPricing.map((item, i) => (
              <PricingCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Parking Highlights */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={basementImage}
                alt="Parking at Petta"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
              Biker's Paradise
            </span>
            <h3 className="text-4xl md:text-6xl font-light mb-8 tracking-tighter">
              Secure <br />
              <span className="text-primary italic font-serif">Basement.</span>
            </h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
              Convenience is paramount for agile teams. Our Petta location
              offers dedicated and secure
              <span className="font-medium text-gray-900">
                {" "}
                basement parking specifically for bikes
              </span>
              , making your daily commute effortless and safe.
            </p>
            <ul className="space-y-4">
              {[
                "Basement bike parking",
                "CCTV coverage",
                "Protected from weather",
                "Quick in-out access",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block font-serif italic text-2xl">
              FAQ
            </span>
            <h3 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">
              Specifics.
            </h3>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h4 className="text-gray-900 font-medium mb-4">
                  {faq.question}
                </h4>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Petta;
