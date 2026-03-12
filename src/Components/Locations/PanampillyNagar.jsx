import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Header from "../Layouts/Header";
import Seo from "../Seo";
import Footer from "../Layouts/Footer";
import officeImage from "../../assets/office pics/first slide.webp";
import aboutImage from "../../assets/office pics/forth slide.webp";
import parkingImage from "../../assets/about/IMG_0534_0002_Color Lookup 3.jpg";
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

      <a
        href="https://wa.me/917907556090"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 text-primary group-hover:text-white font-bold tracking-[0.2em] text-[10px] uppercase group/btn transition-colors duration-700"
      >
        <span>Enquire Now</span>
        <div className="relative w-8 h-[1px] bg-primary/30 group-hover:bg-white/30 overflow-hidden transition-colors duration-700">
          <div className="absolute inset-0 bg-primary group-hover:bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
        </div>
      </a>
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

const PanampillyNagar = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const cabinPricing = [
    {
      title: "6-Seat Private Cabin",
      price: "42,000",
      details:
        "Spacious and professionally designed for growing teams seeking a focused environment.",
    },
    {
      title: "4-Seat Private Cabin",
      price: "30,000",
      details:
        "The perfect balance of collaboration and privacy for small teams.",
    },
    {
      title: "2-Seat Manager Cabin",
      price: "20,000",
      details:
        "Exclusive 2-seat cabin designed for luxury and executive privacy.",
    },
    {
      title: "1-Seat Coworking Desk",
      price: "7,000",
      details:
        "Dedicated desk for professionals who require a consistent workspace.",
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
      details:
        "Total flexibility for travelers, consultants, or remote workers.",
    },
  ];

  const faqs = [
    {
      question: "Is this location suitable for corporate teams?",
      answer:
        "Yes, this location is highly suitable for corporate teams, offering a professional environment, scalable workspace options, strong infrastructure, and a setting that supports collaboration, productivity, and long-term business operations.",
    },
    {
      question: "Are dedicated desks available?",
      answer:
        "Yes, dedicated desks are available for professionals and teams who require a consistent, personalized workspace, providing comfort, security, and the flexibility needed for daily use and focused work.",
    },
    {
      question: "What are the operating hours?",
      answer:
        "The workspace operates during extended business hours to accommodate different work schedules, ensuring teams can work efficiently while maintaining a secure, well-managed, and professionally supervised environment.",
    },
    {
      question: "Is this workspace fully furnished?",
      answer:
        "Yes, the workspace is fully furnished with modern desks, ergonomic seating, meeting rooms, and essential office amenities, allowing teams to move in and begin working immediately without additional setup.",
    },
    {
      question: "How accessible is the area?",
      answer:
        "The area is highly accessible, with excellent connectivity via major roads and public transport, making daily commuting convenient for teams and ensuring clients can reach the location with ease.",
    },
  ];

  const panampillyFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this location suitable for corporate teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this location is highly suitable for corporate teams, offering a professional environment, scalable workspace options, strong infrastructure, and a setting that supports collaboration, productivity, and long-term business operations.",
        },
      },
      {
        "@type": "Question",
        name: "Are dedicated desks available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, dedicated desks are available for professionals and teams who require a consistent, personalized workspace, providing comfort, security, and the flexibility needed for daily use and focused work.",
        },
      },
      {
        "@type": "Question",
        name: "What are the operating hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The workspace operates during extended business hours to accommodate different work schedules, ensuring teams can work efficiently while maintaining a secure, well-managed, and professionally supervised environment.",
        },
      },
      {
        "@type": "Question",
        name: "Is this workspace fully furnished?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the workspace is fully furnished with modern desks, ergonomic seating, meeting rooms, and essential office amenities, allowing teams to move in and begin working immediately without additional setup.",
        },
      },
      {
        "@type": "Question",
        name: "How accessible is the area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The area is highly accessible, with excellent connectivity via major roads and public transport, making daily commuting convenient for teams and ensuring clients can reach the location with ease.",
        },
      },
    ],
  };

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <Seo
        title="Coworking Space in Panampilly Nagar | Business Bureau"
        description="Premium coworking space in Panampilly Nagar, Kochi. Managed offices, meeting rooms, and dedicated desks in a prime business location."
        url="https://www.businessbureau.in/panampilly-nagar/coworking-space-in-panampillynagar"
        jsonLd={panampillyFaqSchema}
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
            alt="Panampilly Nagar Interior"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-70 transition-transform duration-[2s] group-hover:scale-110"
          />
          <a
            href="https://wa.me/917907556090"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 cursor-pointer"
          >
            <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase border-b border-primary/30 pb-1">
              coworkingspacein panampillynagar
            </span>
          </a>
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-5xl md:text-8xl font-light tracking-tighter leading-none mb-12"
          >
            Panampilly <br />
            <span className="text-primary italic font-serif text-6xl md:text-9xl">
              Nagar.
            </span>
          </motion.h2>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Side (Reversed for visual rhythm compared to Petta) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 bg-gray-100 group">
                <img
                  src={aboutImage}
                  alt="Panampilly Nagar Interior"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <a
                  href="https://wa.me/917907556090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 cursor-pointer"
                >
                  <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase border-b border-primary/30 pb-1">
                    coworkingspacein panampillynagar
                  </span>
                </a>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
                coworking space in panampilly nagar
              </h1>
              <h2 className="text-gray-900 text-4xl md:text-6xl font-light mb-10 tracking-tight leading-none">
                About Panampilly Nagar <br />
                <span className="text-primary italic font-serif">
                  Business Bureau.
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed mb-12">
                <p>
                  Our Panampilly Nagar workspace is designed for professionals
                  who value premium surroundings and efficient infrastructure.
                  With thoughtfully planned layouts, dedicated desk options, and
                  business lounge facilities, it supports focused work and
                  long-term growth.
                </p>
                <p>
                  With a flexible desk space for rent near Kadavanthara, this
                  location is easy to reach from the broader Ernakulam district
                  and sits close to major corporate offices, banks, restaurants,
                  and essential services. The ambience here is calm and focused
                  — ideal for professionals who need to concentrate and for
                  teams that regularly host clients.
                </p>
                <p>
                  The workspace includes premium office infrastructure across
                  all its cabin and desk configurations, along with business
                  lounge facilities for informal meetings and focused solo work.
                  Every detail — from lighting and seating to internet and
                  security — is managed to a high standard.
                </p>
              </div>
              <div className="flex">
                <a
                  href="https://wa.me/917907556090"
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cabin Details & Pricing */}
      <section className="py-32 bg-white overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
                Flexible Options
              </span>
              <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                Pricing & <br />
                <span className="text-primary italic font-serif">Cabins.</span>
              </h3>
            </div>
            <p className="text-gray-400 text-lg font-light max-w-xs leading-relaxed border-l border-gray-200 pl-8">
              Bespoke workspace solutions tailored for corporate excellence in
              Panampilly Nagar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabinPricing.map((item, i) => (
              <PricingCard key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Parking Highlights */}
      <section className="py-20 overflow-hidden bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={parkingImage}
                alt="Parking at Panampilly Nagar"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <a
                href="https://wa.me/917907556090"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 cursor-pointer"
              >
                <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase border-b border-primary/30 pb-1">
                  coworkingspacein panampillynagar
                </span>
              </a>
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
              We understand that accessibility is key. Our Panampilly Nagar
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
      <section className="py-20 bg-white">
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
              ecosystem in Panampilly Nagar.
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

export default PanampillyNagar;
