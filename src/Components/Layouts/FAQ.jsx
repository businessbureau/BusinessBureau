import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What types of workspaces are available?",
    answer:
      "The Business Bureau offers shared work areas, dedicated desks, private office cabins, and meeting rooms. These options are designed to support freelancers, startups, consultants, and small teams with flexible workspace requirements.",
    category: "WORKSPACE TYPES",
  },
  {
    question: "Is short-term access possible?",
    answer:
      "Yes, short-term access is available through flexible day-based options. This allows professionals, remote workers, and business travelers to use the workspace without long-term commitments or contractual obligations.",
    category: "FLEXIBILITY",
  },
  {
    question: "Do you provide meeting room rentals?",
    answer:
      "Meeting rooms are available for client discussions, internal meetings, presentations, and workshops. Each space is professionally set up to ensure a productive environment with reliable connectivity and essential meeting infrastructure.",
    category: "MEETING ROOMS",
  },
  {
    question: "Are private cabins fully furnished?",
    answer:
      "All private cabins are fully furnished with work-ready furniture, lighting, and essential infrastructure. These cabins provide a secure, distraction-free environment suitable for focused work and confidential business operations.",
    category: "PRIVATE CABINS",
  },
  {
    question: "Is internet speed suitable for IT work?",
    answer:
      "The workspace is equipped with high-speed, stable internet connectivity suitable for IT professionals, developers, and remote teams. This ensures smooth video conferencing, cloud-based work, and uninterrupted daily operations.",
    category: "CONNECTIVITY",
  },
  {
    question: "Can small teams scale easily?",
    answer:
      "Small teams can easily scale by upgrading workspace plans or moving into larger private offices. The flexible model allows businesses to grow without the limitations of long-term leases or relocation challenges.",
    category: "SCALABILITY",
  },
  {
    question: "Is parking available?",
    answer:
      "Parking facilities are available for members and visitors, depending on location. This ensures convenient access for professionals commuting by personal vehicles and supports hassle-free daily workspace usage.",
    category: "AMENITIES",
  },
  {
    question: "Are utilities included?",
    answer:
      "Yes, essential utilities such as electricity, internet, and maintenance are included in the workspace plans. This helps businesses manage predictable costs without worrying about separate operational expenses.",
    category: "UTILITIES",
  },
  {
    question: "Can freelancers join?",
    answer:
      "Freelancers are welcome and benefit from a professional environment, reliable infrastructure, and a collaborative atmosphere. The workspace supports independent professionals seeking focus, networking opportunities, and work-life balance.",
    category: "COMMUNITY",
  },
  {
    question: "Do you offer professional address services?",
    answer:
      "Professional address services are available for businesses needing a credible office address. This supports registrations, official correspondence, and client communication while enhancing the company’s professional presence.",
    category: "VIRTUAL OFFICE",
  },
];

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
        onMouseEnter={onClick}
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqRef" data-section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
              Common Questions
            </span>
            <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight mb-8">
              Every <br />
              <span className="text-primary italic font-serif">Detail.</span>
            </h3>
            <p className="text-gray-400 text-base font-light max-w-xs leading-relaxed">
              Find answers to common questions about our corporate-ready
              ecosystem and flexible workspace solutions.
            </p>
          </motion.div>
        </div>
        <div className="lg:col-span-8 border-t border-gray-200">
          {faqData.map((faq, i) => (
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
  );
};

export default FAQ;
