import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Header from "../Layouts/Header";
import Seo from "../Seo";
import Footer from "../Layouts/Footer";
import officeImage from "../../assets/office pics/second slide.webp";
import aboutImage from "../../assets/office pics/third slide.webp";
import basementImage from "../../assets/about/IMG_0534_0002_Color Lookup 3.jpg";
import Testimonials from "../Layouts/Testimonials";

const PricingCard = ({ title, price, details, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 1,
      delay: index * 0.1,
      ease: [0.19, 1, 0.22, 1],
    }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="relative group bg-white hover:bg-primary pt-16 pb-12 px-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-3xl transition-all duration-700 overflow-hidden"
  >
    {/* Background Numerals */}
    <div className="absolute top-[-2rem] right-[-1rem] pointer-events-none select-none opacity-[0.03] group-hover:opacity-0 transition-all duration-700">
      <span className="text-[12rem] font-black leading-none tracking-tighter">
        0{index + 1}
      </span>
    </div>

    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-[1px] bg-primary/40 group-hover:bg-white/40 transition-colors duration-700" />
        <h4 className="text-primary group-hover:text-white text-[10px] uppercase tracking-[0.5em] font-bold transition-colors duration-700">
          {title}
        </h4>
      </div>

      <div className="flex items-baseline gap-2 mb-8 text-gray-900 group-hover:text-white transition-colors duration-700">
        <span className="text-5xl font-light tracking-tighter">₹{price}</span>
        <span className="text-gray-400 group-hover:text-white/60 text-[10px] font-light uppercase tracking-widest transition-colors duration-700">
          {" "}
          + tax
        </span>
      </div>

      <p className="text-gray-500 group-hover:text-white/90 text-sm font-light leading-relaxed mb-12 h-16 transition-colors duration-700">
        {details}
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center gap-4 text-primary group-hover:text-white font-bold tracking-[0.2em] text-[10px] uppercase group/btn transition-colors duration-700"
      >
        <span>Enquire Now</span>
        <div className="relative w-8 h-[1px] bg-primary/30 group-hover:bg-white/30 overflow-hidden transition-colors duration-700">
          <div className="absolute inset-0 bg-primary group-hover:bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
        </div>
      </Link>
    </div>
  </motion.div>
);

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
      title: "10-Seat Private Cabin",
      price: "60,000",
      details:
        "Expansive suite for larger teams needing a collaborative and exclusive hub.",
    },
    {
      title: "9-Seat Private Cabin",
      price: "54,000",
      details:
        "High-performance space designed for productivity and team synergy.",
    },
    {
      title: "6-Seat Private Cabin",
      price: "36,000",
      details:
        "Balanced workspace for medium-sized teams with professional finish.",
    },
    {
      title: "4-Seat Cabin — Office for Small Business Teams",
      price: "24,000",
      details:
        "Compact and efficient, ideal for startups and active collaborators.",
    },
    {
      title: "3-Seat Private Cabin",
      price: "19,500",
      details:
        "Focused environment for small units seeking privacy and comfort.",
    },
    {
      title: "1-Seat Coworking Desk",
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
      question: "How close is the metro station?",
      answer:
        "The metro station is located within very close walking distance, making daily commuting quick and convenient. This easy access significantly reduces travel time for professionals, clients, and visiting team members.",
    },
    {
      question: "Is this suitable for remote workers?",
      answer:
        "Yes, this workspace is highly suitable for remote workers who need a reliable, professional environment. It offers quiet work areas, strong connectivity, and flexible options that support remote and hybrid work models.",
    },
    {
      question: "Are meeting rooms available here?",
      answer:
        "Yes, fully equipped meeting rooms are available and designed for professional discussions, presentations, and client meetings, providing privacy, modern facilities, and a comfortable setting for productive collaboration.",
    },
    {
      question: "Can I book short-term access?",
      answer:
        "Short-term access options are available, making it ideal for freelancers, consultants, and teams needing temporary workspace solutions without long-term commitments, while still enjoying full professional amenities.",
    },
    {
      question: "Is internet reliability high?",
      answer:
        "Internet reliability is very high, with stable, high-speed connectivity that supports video calls, cloud-based work, and daily business operations without interruptions or performance issues.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div ref={containerRef} className="bg-white">
      <Seo
        title="Coworking Space in Petta | Professional Workspaces"
        description="Discover a coworking space in Petta near Petta Metro Station, offering professional workspaces, shared offices, and meeting rooms for startups and teams."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 bg-gray-900"
        >
          <img
            src={officeImage}
            alt="Petta Kochi"
            fetchpriority="high"
            decoding="async"
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
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
                coworking space in petta
              </h1>
              <h2 className="text-gray-900 text-4xl md:text-6xl font-light mb-10 tracking-tight leading-none">
                Thrive in Kochi's <br />
                <span className="text-primary italic font-serif">
                  emerging hub.
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                <p>
                  The Petta workspace offers unmatched convenience for
                  professionals relying on public transport. Its proximity to
                  the metro station makes it a preferred choice for consultants,
                  freelancers, and remote teams seeking easy accessibility.
                </p>
                <p>
                  The surrounding area provides quick access to key parts of the
                  city, making it ideal for professionals with frequent meetings
                  or flexible schedules. The ease of commuting helps reduce
                  daily travel stress and supports a more balanced work routine.
                </p>
                <p>
                  The workspace is also convenient for those travelling between
                  business districts. Being coworking near Vytilla makes it easy
                  to reach clients across the southern part of Ernakulam without
                  long commutes. Parking is available in the basement, ensuring
                  hassle-free daily access for commuters.
                </p>
              </div>
              <div className="flex mt-12">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-4 px-8 py-4 bg-primary overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 rounded-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:text-black transition-colors duration-300">
                    Contact Us
                  </span>
                  <span className="relative z-10 w-8 h-[1px] bg-white group-hover:bg-black group-hover:w-12 transition-all duration-300"></span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 bg-gray-100">
                <img
                  src={aboutImage}
                  alt="Petta Office Interior"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cabin Details & Pricing */}
      <section className="py-32 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
                Value & Growth
              </span>
              <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                Pricing & <br />
                <span className="text-primary italic font-serif">Spaces.</span>
              </h3>
            </div>
            <p className="text-gray-400 text-lg font-light max-w-xs leading-relaxed border-l border-gray-200 pl-8">
              Transparent pricing for professionals who demand excellence in
              Kochi's prime locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cabinPricing.map((item, i) => (
              <PricingCard key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Parking Highlights */}
      <section className="py-12 overflow-hidden bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={basementImage}
                alt="Parking at Petta"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10" />
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
              We understand that accessibility is key. Our Petta location
              provides dedicated and secure
              <span className="font-medium text-gray-900">
                {" "}
                basement parking for both cars and bikes
              </span>
              , ensuring that your commute is as smooth as your workflow.
            </p>
            <ul className="space-y-4">
              {[
                "Secure car parking",
                "Dedicated bike spots",
                "CCTV surveillance",
                "Easy metro access",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-gray-500 text-sm"
                >
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

      {/* FAQs Redesign */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
              FAQ
            </span>
            <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight mb-8">
              Every <br />
              <span className="text-primary italic font-serif">Detail.</span>
            </h3>
            <p className="text-gray-400 text-base font-light max-w-xs leading-relaxed">
              Find answers to common questions about our corporate-ready
              ecosystem in Petta.
            </p>
          </div>
          <div className="lg:col-span-8 border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
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

export default Petta;
