import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./Layouts/Header";
import Seo from "./Seo";
import Footer from "./Layouts/Footer";
import dedicatedDesks from "../assets/office pics/services/Dedicated desks.webp";
import privateCabins from "../assets/office pics/services/Private Cabins.webp";
import meetingRooms from "../assets/office pics/services/Meeting Rooms.webp";
import dayPass from "../assets/office pics/services/Cafeteria.webp";

const ServiceRow = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`py-24 border-b border-gray-100 last:border-0 ${isEven ? "bg-white" : "bg-gray-50/50"}`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative group"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            {/* Abstract Overlay Element */}
            <div
              className={`absolute -bottom-10 ${isEven ? "-right-10" : "-left-10"} w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none`}
            />
          </motion.div>

          {/* Content Side */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.6em] font-bold mb-8 block">
                Workspace Solution {index + 1}
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tighter leading-none">
                {service.title.split(" ")[0]} <br />
                <span className="text-primary italic font-serif">
                  {service.title.split(" ").slice(1).join(" ")}
                </span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                {service.description}
              </p>

              <div className="flex items-center gap-6">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gray-900 text-white rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary transition-all duration-500 transform hover:scale-105"
                >
                  Inquire Now
                </Link>
                <div className="h-[1px] w-20 bg-gray-200" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StackingReason = ({ reason, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sticky top-0 h-screen flex items-center bg-gray-50 border-t border-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-end py-20">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-gray-400 text-sm font-medium tracking-widest">
              0{index + 1}
            </span>
            <div className="w-12 h-[1px] bg-gray-200" />
          </div>
          <h2 className="text-gray-900 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
            {reason.title.split(" ")[0]} <br />
            <span className="text-primary">
              {reason.title.split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-8">
            {reason.text}
          </p>
          <div className="flex items-center gap-4 text-primary font-bold tracking-[0.2em] text-[10px] uppercase">
            <span>Business Bureau Standard</span>
            <div className="w-8 h-[1px] bg-primary/30" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20rem] font-black leading-none">
          {index + 1}
        </span>
      </div>
    </motion.div>
  );
};
const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-primary transition-colors duration-300 pr-8">
          {question}
        </span>
        <div className="relative w-6 h-6 flex-shrink-0">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300"
            animate={{ rotate: isOpen ? 0 : 0 }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300"
            animate={{ rotate: isOpen ? 0 : 90 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-8 pr-12">
              <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const services = [
    {
      title: "Coworking Space",
      description:
        "Our coworking model fosters a collaborative work environment while maintaining professional standards. It supports freelancers, digital nomads, and small teams seeking flexibility, networking opportunities, and a community-driven workspace. The shared workspace is thoughtfully designed to balance openness and focus, allowing members to work productively without distractions.",
      img: dedicatedDesks,
    },
    {
      title: "Private Offices",
      description:
        "Private cabins offer controlled access, dedicated infrastructure, and a distraction-free setup. Ideal for startups and growing teams needing privacy with scalable office solutions. Each private office is fully furnished and designed to support confidentiality, focused work, and team collaboration without the burden of managing utilities.",
      img: privateCabins,
    },
    {
      title: "Meeting Rooms",
      description:
        "Our meeting rooms support client presentations, internal discussions, and workshops. Equipped with modern facilities and designed to reflect professionalism and efficiency. Suitable for both short discussions and extended sessions, offering a comfortable environment for productive conversations with presentation-ready setups.",
      img: meetingRooms,
    },
    {
      title: "Day Pass",
      description:
        "Day access options allow professionals to work without long-term commitments. Ideal for consultants, remote workers, and professionals who need occasional access to a professional workspace. It offers full use of essential amenities during working hours without ongoing obligations, combining flexibility with a managed environment.",
      img: dayPass,
    },
  ];

  return (
    <div className="bg-white">
      <Seo
        title="Coworking Space in Kochi | Workspace Services"
        description="Looking for a coworking space in Kochi? Explore workspace services including shared offices, desks, meeting rooms, and a productive business environment."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={privateCabins}
            alt="Workspace Solutions"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
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

      {/* Services Breakdown Redesign */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-24 text-center">
          <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
            Core Offerings
          </span>
          <h2 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-8">
            Workspace <br />
            <span className="text-primary italic font-serif">Solutions.</span>
          </h2>
        </div>

        {services.map((service, i) => (
          <ServiceRow key={i} service={service} index={i} />
        ))}
      </section>

      {/* Why Choose Us - Immersive Stacking Redesign */}
      <section className="bg-gray-50 relative">
        <div className="bg-white py-32 px-6 border-b border-gray-100">
          <div className="container mx-auto text-center">
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">
              The Distinction
            </span>
            <h2 className="text-5xl md:text-8xl font-light text-gray-900 tracking-tighter leading-tight mb-8">
              Why <br />
              <span className="text-primary italic font-serif">Choose Us.</span>
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              We are proud to be the coworking space in Kerala that
              professionals across industries choose when they want both quality
              and community.
            </p>
          </div>
        </div>

        {[
          {
            title: "Strategic Locations",
            text: "Our workspaces are located in well-connected areas across Kochi and Ernakulam, offering easy access to major business zones, public transport, and essential services. This ensures daily convenience, reduced commute time, and smoother client interactions.",
          },
          {
            title: "Operational Expertise",
            text: "Strong expertise in operations and facilities management ensures seamless daily functioning, consistent service quality, and well-maintained infrastructure. Proactive management minimizes disruptions, allowing professionals to focus fully on productivity and business growth.",
          },
          {
            title: "Flexible Models",
            text: "Flexible workspace models remove the pressure of long-term leases and high upfront costs. Businesses can easily upgrade, scale, or adjust their workspace requirements as needs evolve, without facing relocation challenges or contractual limitations.",
          },
          {
            title: "Professional Infrastructure",
            text: "All workspaces are fully furnished and equipped with reliable internet, modern amenities, and secure access systems. The professional setup supports focused work, client meetings, and team collaboration in a comfortable, business-ready environment.",
          },
          {
            title: "Community Focus",
            text: "Our spaces attract a diverse mix of professionals from across Kerala which means every day offers the chance to connect, collaborate, and grow. We believe a great workspace is one where the people around you make you better.",
          },
        ].map((reason, i, arr) => (
          <StackingReason
            key={i}
            reason={reason}
            index={i}
            total={arr.length}
          />
        ))}

        {/* Closing "Choose Us" segment */}
        <div className="h-[50vh] bg-white flex items-center justify-center px-6 border-t border-gray-100">
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">
              Ready to{" "}
              <span className="text-primary italic font-serif">Elevate?</span>
            </h3>
            <p className="text-gray-400 text-lg font-light mb-12">
              Join Kochi's most sophisticated professional ecosystem.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 md:px-12 md:py-5 bg-gray-900 text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary transition-all duration-500 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Service FAQs Redesign */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
              POLICY Q&A
            </span>
            <h3 className="text-5xl md:text-8xl font-light tracking-tighter leading-none mb-8">
              Every <br />
              <span className="text-primary italic font-serif">Detail.</span>
            </h3>
            <p className="text-gray-400 text-base font-light max-w-xs leading-relaxed">
              Clear answers for professional teams exploring our Kochi network.
            </p>
          </div>
          <div className="lg:col-span-8 border-t border-gray-200">
            {[
              {
                q: "What services does your coworking space offer?",
                a: "Our coworking space offers flexible workspace solutions including meeting rooms, day pass access, and private offices. These options are designed for startups, freelancers, remote workers, and businesses looking for professional work environments without long-term commitments.",
              },
              {
                q: "How does the coworking day pass work?",
                a: "A coworking day pass allows you to access our shared workspace for a full day. It includes high-speed internet, comfortable seating, power backup, and common amenities—ideal for remote workers, travelers, and short-term professionals.",
              },
              {
                q: "Can I book a meeting room in advance?",
                a: "Yes, our meeting rooms can be booked in advance for client meetings, team discussions, interviews, or presentations. Each meeting room is equipped with high-speed Wi-Fi, presentation screens, and a professional setup to ensure productive sessions.",
              },
              {
                q: "What are the benefits of choosing a private office in your coworking space?",
                a: "Our private offices provide a secure, fully furnished workspace with dedicated access, privacy, and flexibility. They are ideal for growing teams, startups, and businesses that need a professional office environment without the cost of traditional office leasing.",
              },
              {
                q: "Who should choose a coworking space instead of a traditional office?",
                a: "A coworking space is perfect for freelancers, startups, remote teams, and consultants who want flexible office solutions, cost efficiency, and networking opportunities without long-term contracts or high overhead costs.",
              },
            ].map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
