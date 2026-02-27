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
                onMouseEnter={() => setActiveIndex(index)}
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
