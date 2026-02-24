import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Business Bureau?",
    answer:
      "Business Bureau is a premium coworking space and business ecosystem designed to foster innovation and productivity for freelancers, entrepreneurs, and teams.",
    category: "BUSINESS BUREAU",
  },
  {
    question: "What coworking space options are available?",
    answer:
      "We offer flexible coworking options including dedicated desks, day passes, and hot desking in a vibrant community environment.",
    category: "COWORKING SPACE",
  },
  {
    question: "Are there meeting rooms available for rent?",
    answer:
      "Yes, we have state-of-the-art meeting rooms equipped with modern amenities and high-speed internet available for both members and non-members.",
    category: "MEETING ROOMS",
  },
  {
    question: "Do you offer private office spaces?",
    answer:
      "Absolutely! We provide fully furnished private office cabins for teams that require a more exclusive and secluded work environment.",
    category: "PRIVATE OFFICE",
  },
  {
    question: "What amenities are included with a membership?",
    answer:
      "Members enjoy perks like high-speed WIFI, power backup, refreshments, lockers, video conferencing facilities, and 24/7 surveillance.",
    category: "AMENITIES",
  },
  {
    question: "Where are your locations?",
    answer:
      "We are proudly located in Petta and Panampally Nagar, providing convenient access to key business hubs in Kochi.",
    category: "LOCATIONS",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqRef" data-section className="bg-white py-24 px-6 md:px-12">
      <div className="xl:container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            Frequently Asked{" "}
            <span className="text-primary italic font-serif">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <div className="space-y-1">
                  <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
                    {faq.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? "bg-primary border-primary rotate-45" : "group-hover:border-primary"}`}
                >
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-gray-400 group-hover:text-primary"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 font-light leading-relaxed pb-6 text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
