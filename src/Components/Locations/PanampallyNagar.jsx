import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import officeImage from "../../assets/office pics/first slide.webp";
import parkingImage from "../../assets/about/IMG_0534_0002_Color Lookup 3.jpg";
import FAQ from "../Layouts/FAQ";
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

const PanampallyNagar = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const cabinPricing = [
    {
      title: "6-Seat Room",
      price: "42,000",
      details:
        "Spicious and professionally designed for growing teams seeking a focused environment.",
    },
    {
      title: "Manager Cabin",
      price: "20,000",
      details:
        "Exclusive 2-seat cabin designed for luxury and executive privacy.",
    },
    {
      title: "4-Seat Room",
      price: "30,000",
      details:
        "The perfect balance of collaboration and privacy for small teams.",
    },
    {
      title: "Coworking Seat",
      price: "7,000",
      details:
        "1-seat dedicated coworking space in our vibrant community area.",
    },
    {
      title: "Meeting Room",
      price: "800",
      details:
        "State-of-the-art facility available per hour for impactful presentations.",
    },
    {
      title: "Day Pass",
      price: "800",
      details: "Total flexibility for solo visionaries. No fixed commitment.",
    },
  ];

  const faqs = [
    {
      question: "Is parking available at Panampally Nagar?",
      answer:
        "Yes, we provide dedicated parking facilities for both cars and bikes.",
    },
    {
      question: "What are the office timings?",
      answer:
        "Members enjoy flexible access to their workspaces with standard support from 9 AM to 8 PM.",
    },
    {
      question: "Are the meeting rooms soundproof?",
      answer:
        "Yes, our meeting rooms are designed with sound insulation to ensure high-level privacy.",
    },
    {
      question: "Is high-speed internet included?",
      answer:
        "Absolutely. We provide enterprise-grade redundant high-speed internet connection.",
    },
    {
      question: "Can I book a day pass online?",
      answer:
        "Yes, you can book a day pass through our website or contact us directly.",
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
            alt="Panampally Nagar Interior"
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
            Premier Hub
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-5xl md:text-8xl font-light tracking-tighter leading-none mb-12"
          >
            Panampally <br />
            <span className="text-primary italic font-serif text-6xl md:text-9xl">
              Nagar.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-900 text-3xl md:text-5xl font-light mb-12 tracking-tight"
          >
            Kochi's most{" "}
            <span className="text-primary italic font-serif">
              elite workspace.
            </span>
          </motion.h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Nestled in the upscale Panampally Nagar district, Business Bureau
            provides a prestigious address for established firms and scaling
            startups alike. Our workspace in Panampally Nagar, Kochi, is
            designed for those who demand a sophisticated ecosystem with easy
            access to high-end boutiques, cafes, and corporate hubs. Elevate
            your professional presence with our bespoke private cabins and
            flexible coworking solutions tailored for the elite.
          </p>
        </div>
      </section>

      {/* Cabin Details & Pricing */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block text-center">
              Flexible Options
            </span>
            <h3 className="text-4xl md:text-6xl font-light text-center tracking-tighter">
              Pricing &{" "}
              <span className="text-primary italic font-serif">Cabins.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                src={parkingImage}
                alt="Parking at Panampally Nagar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
              Convenience Built-in
            </span>
            <h3 className="text-4xl md:text-6xl font-light mb-8 tracking-tighter">
              Hassle-free <br />
              <span className="text-primary italic font-serif">Parking.</span>
            </h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
              We understand that accessibility is key. Our Panampally Nagar
              center provides dedicated and secure parking for both
              <span className="font-medium text-gray-900"> cars and bikes</span>
              , ensuring that your commute is as smooth as your workflow.
            </p>
            <ul className="space-y-4">
              {[
                "Secure car parking",
                "Dedicated bike spots",
                "CCTV surveillance",
                "Easy road access",
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

export default PanampallyNagar;
