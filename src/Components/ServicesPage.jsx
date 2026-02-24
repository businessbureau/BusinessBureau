import React from "react";
import { motion } from "framer-motion";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import officeImage from "../assets/service page/IMG_0534_0000_Color Lookup 1.jpg";

const ServiceCard = ({ title, description, price, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
      <i className={`fa-solid ${icon} text-8xl text-primary`}></i>
    </div>
    <div className="relative z-10">
      <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
        {title}
      </span>
      <p className="text-gray-600 text-lg font-light leading-relaxed mb-8 pr-12">
        {description}
      </p>
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-4xl font-light text-gray-900">{price}</span>
        <span className="text-gray-400 text-xs uppercase tracking-widest">
          + Tax
        </span>
      </div>
      <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
    </div>
  </motion.div>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Coworking Space",
      description:
        "A vibrant, collaborative environment designed for solo visionaries and agile teams. Professional desks with ergonomic comfort.",
      price: "₹7,000",
      icon: "fa-users-viewfinder",
    },
    {
      title: "Private Offices",
      description:
        "Secure, fully-equipped suites tailored for focused productivity. Perfect for established firms and growing teams.",
      price: "Starting ₹20,000",
      icon: "fa-building-shield",
    },
    {
      title: "Meeting Rooms",
      description:
        "State-of-the-art facilities for impactful presentations, interviews, and deep-focus sessions. High-speed connectivity included.",
      price: "₹800 / hr",
      icon: "fa-handshake",
    },
    {
      title: "Day Pass",
      description:
        "Total flexibility for the mobile professional. Access our premium facilities for a single day with no long-term commitment.",
      price: "₹800",
      icon: "fa-ticket",
    },
    {
      title: "Office Functions",
      description:
        "Customizable event and workshop spaces designed to facilitate innovation and professional networking.",
      price: "On Request",
      icon: "fa-calendar-check",
    },
  ];

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={officeImage}
            alt="Business Bureau Services"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[10px] uppercase tracking-[1em] font-bold mb-8 block"
          >
            Capabilities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-6xl md:text-9xl font-light tracking-tighter leading-none"
          >
            Bespoke <br />
            <span className="text-primary italic font-serif text-5xl md:text-8xl">
              Solutions.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-40 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Office Functioning Policies */}
      <section className="py-40 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">
                Policy & Standards
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-light text-gray-900 mb-12 tracking-tighter leading-tight"
              >
                Flawless <br />
                <span className="text-primary italic font-serif">
                  Operations.
                </span>
              </motion.h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <i className="fa-solid fa-clock text-primary group-hover:text-white transition-colors duration-500"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-3">
                      Operating Hours
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Monday to Saturday: 09:00 AM – 09:00 PM <br />
                      Sundays: Rest & Recharge (Holiday)
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <i className="fa-solid fa-file-contract text-primary group-hover:text-white transition-colors duration-500"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-3">
                      Terms & GST
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Virtual offices are not provided. Business & GST
                      documentation is exclusively available for physical space
                      clients with a minimum 1-year commitment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <i className="fa-solid fa-shield-halved text-primary group-hover:text-white transition-colors duration-500"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-3">
                      Security & Access
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Biometric entry to the facility. Room keys are provided
                      for private suites. 2-month refundable security deposit
                      and 2-month notice period apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white rounded-[3rem] shadow-2xl border border-gray-100"
            >
              <h3 className="text-3xl font-light mb-8 italic font-serif">
                Why Choose Us?
              </h3>
              <ul className="space-y-6">
                {[
                  "High-speed primary & backup WiFi",
                  "Enterprise-grade redundant internet",
                  "Professional community of visionaries",
                  "Prime business district locations",
                  "Biometric-secured facilities",
                  "Fully managed operational friction",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-600 font-light"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-primary text-sm font-medium leading-relaxed">
                  Looking for free meeting room credits? <br />
                  <span className="text-gray-400 font-light uppercase tracking-widest text-[10px] block mt-2">
                    Speak with our Hub Manager
                  </span>
                  <a
                    href="tel:9567299942"
                    className="text-lg font-bold block mt-1"
                  >
                    +91 9567299942
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.6em] font-bold mb-6 block font-serif italic text-2xl uppercase">
              Questions
            </span>
            <h3 className="text-5xl md:text-8xl font-light tracking-tighter uppercase leading-none">
              Transparency.
            </h3>
          </motion.div>
          <div className="space-y-8">
            {[
              {
                q: "Is internet included in the pricing?",
                a: "Yes, enterprise-grade high-speed internet and a backup WiFi connection are included in all our plans.",
              },
              {
                q: "Do you provide virtual office services?",
                a: "No, we strictly provide physical workspaces to ensure a high-quality, professional community environment.",
              },
              {
                q: "Can I get GST documentation?",
                a: "GST and business legal documentation are provided for clients taking physical rooms with a minimum one-year lock-in period.",
              },
              {
                q: "What is the security deposit?",
                a: "A refundable security deposit equivalent to 2 months' rent is required at the time of onboarding.",
              },
              {
                q: "Is there a notice period?",
                a: "Yes, we require a 2-month notice period for existing clients.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-10 bg-gray-50 rounded-3xl border border-transparent hover:border-primary/20 transition-all duration-500 group"
              >
                <h4 className="text-gray-900 font-medium mb-4 text-lg">
                  {faq.q}
                </h4>
                <p className="text-gray-500 font-light leading-relaxed">
                  {faq.a}
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

export default ServicesPage;
