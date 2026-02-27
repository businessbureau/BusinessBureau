import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Modal from "./Utils/Modals";

// New Google Review Images
import vargheseImg from "../../assets/GoogleReview/Varghese_Nettikadan.png";
import praveenImg from "../../assets/GoogleReview/Praveen_Kumar.png";
import vigneshImg from "../../assets/GoogleReview/Vignesh_S_Kamath.png";
import vishalImg from "../../assets/GoogleReview/Vishal_V.png";

const testimonialsData = [
  {
    name: "Varghese Nettikadan",
    role: "Realtor",
    image: vargheseImg,
    text: "I had my realtor office at Business Bureau Coworking Space at Panampilly Nagar for the past one year and it has been a wonderful experience. The ambience is very welcoming and professional, which made it a pleasant place to work every day. My clients especially loved the location and found it convenient and accessible. The team here maintains the space very well, and the overall environment truly supports productivity and quality client interactions. I would happily recommend Business Bureau Coworking Space to anyone looking for a well-managed and premium workspace.",
  },
  {
    name: "Praveen Kumar",
    role: "Professional",
    image: praveenImg,
    text: "Exceptional Co-Working Space in Panampilly Nagar. I have been working at the Business Bureau co-working space in Panampilly Nagar for the past month, and I must say, it has been an amazing experience. The office ambience is truly outstanding – a perfect mix of professionalism and comfort, which enhances productivity. The customer support team is incredibly helpful, always ready to assist with any requirements, making the experience seamless and stress-free. The facilities are top-notch, and the location is convenient, adding to the overall appeal. If you are looking for a premium co-working space in Kochi, I highly recommend Business Bureau. It's a fantastic environment for work, networking, and growths.",
  },
  {
    name: "Vignesh S Kamath",
    role: "Business Owner",
    image: vigneshImg,
    text: "I recently relocated my office from Redmealon Kochi to Business Bureau in Panampilly and have been working here for the past month. I am thoroughly impressed with the facilities, the professionalism of the staff, and the vibrant coworking environment. The space is well-maintained, quiet yet collaborative, and offers all the amenities we need for daily operations. The management is incredibly supportive and responsive to any requirements or queries. I highly recommend Business Bureau to fellow business owners, startups, and freelancers looking for a productive and inspiring workspace. A great choice for anyone looking to elevate their work environment!",
  },
  {
    name: "Vishal V",
    role: "Video Editor",
    image: vishalImg,
    text: "Highly Recommended: Business Bureau Coworking, Panampilly Nagar, Kochi. As a video editor, finding the right workspace is essential, and I recently took an office at Business Bureau Coworking in Panampilly Nagar, Kochi. The experience has been nothing short of fantastic! The environment here is ideal for creativity and productivity, providing all the amenities I need to focus on my work. I’m so impressed with the office space that I highly recommend it to fellow editors, freelancers, and business owners. Whether you're in creative industries or running a business, this coworking space offers everything you need to thrive. If you're in Kochi and looking for a professional, well-equipped workspace, Business Bureau Coworking is the place to be.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [selectedReview, setSelectedReview] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const truncateText = (text, maxLength = 180) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div
      ref={containerRef}
      data-section
      id="testimonialsRef"
      className="relative min-h-screen bg-white py-32 border-t border-gray-50 overflow-hidden flex flex-col justify-center"
    >
      {/* Cinematic Background Text */}
      <motion.div
        style={{ x: backgroundX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[25rem] font-black text-gray-900/10 whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter"
      >
        Voices Voices Voices
      </motion.div>

      <div className="xl:container mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.6em] font-bold mb-6 block">
            The Bureau Echo
          </span>
          <h2 className="text-5xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tighter">
            Real Stories. <br />
            <span className="text-primary italic font-serif">Unfiltered.</span>
          </h2>
          <div className="w-24 h-[1px] bg-primary mt-12 opacity-30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="relative z-10 space-y-10">
                {/* Quote with Mask Reveal feel */}
                <div className="relative">
                  <span className="absolute -top-10 -left-6 text-9xl text-primary/10 font-serif pointer-events-none group-hover:text-primary/20 transition-colors duration-700 leading-none">
                    “
                  </span>
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl text-gray-800 font-light leading-tight italic font-serif relative z-10 pr-10">
                      {truncateText(item.text)}
                    </p>
                    {item.text.length > 180 && (
                      <button
                        onClick={() => setSelectedReview(item)}
                        className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold hover:tracking-[0.4em] transition-all duration-300 flex items-center gap-2 group/read"
                      >
                        Read Full Review
                        <span className="w-6 h-[1px] bg-primary/30 group-hover/read:w-10 transition-all duration-300" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <div className="relative w-16 h-16 shrink-0">
                    <motion.div className="absolute inset-0 bg-primary ring-2 ring-primary/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
                    <img
                      className="relative z-10 h-full w-full rounded-full object-cover transition-all duration-700 border-2 border-white"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h6 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-1">
                      {item.name}
                    </h6>
                    <p className="text-[10px] text-primary uppercase tracking-[0.3em] font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sophisticated Animated Border */}
              <div className="absolute -bottom-12 left-0 w-0 h-[1px] bg-gray-100 group-hover:w-full transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      <Modal
        isOpen={!!selectedReview}
        onRequestClose={() => setSelectedReview(null)}
      >
        {selectedReview && (
          <div className="space-y-8 py-4">
            <div className="flex items-center gap-6">
              <img
                className="h-16 w-16 rounded-full object-cover border-2 border-primary/20"
                src={selectedReview.image}
                alt={selectedReview.name}
              />
              <div>
                <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-1">
                  {selectedReview.name}
                </h6>
                <p className="text-[10px] text-primary uppercase tracking-[0.3em] font-medium">
                  {selectedReview.role}
                </p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-8 -left-4 text-7xl text-primary/10 font-serif leading-none">
                “
              </span>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed italic font-serif relative z-10">
                {selectedReview.text}
              </p>
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedReview(null)}
                className="text-white/50 hover:text-white text-[10px] uppercase tracking-[0.3em] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Testimonials;
