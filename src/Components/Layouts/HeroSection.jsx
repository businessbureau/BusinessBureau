import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import officeImage from "../../assets/office pics/first slide.webp";
import dedicatedDesks from "../../assets/office pics/services/Dedicated desks.webp";
import privateCabins from "../../assets/office pics/services/Private Cabins.webp";
import virtualOffice from "../../assets/office pics/services/Meeting Rooms.webp";
import cafeteria from "../../assets/office pics/services/Cafeteria.webp";
import VideoPlayer from "./VideoPlayer";
import Modal from "./Utils/Modals";
import Forms from "./Utils/Forms";

const servicesData = [
  {
    title: "Coworking Space",
    img: dedicatedDesks,
    description:
      "Elevate your productivity with our dedicated desks, providing a personalized workspace for focused and efficient work.",
    key: "dedicatedDesks",
  },
  {
    title: "Private Offices",
    img: privateCabins,
    description:
      "Experience privacy and exclusivity in our private cabins, tailored for those who value a dedicated and secluded office environment.",
    key: "privateCabins",
  },
  {
    title: "Meeting Rooms",
    img: virtualOffice,
    description:
      "Foster collaboration and make impactful presentations in our state-of-the-art meeting rooms.",
    key: "virtualOffice",
  },
  {
    title: "Day Pass",
    img: cafeteria,
    description:
      "Recharge and socialize in our vibrant cafeteria, offering a welcoming space for networking and casual meetings.",
    key: "cafeteria",
  },
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 2 Slide-in (Petta Video)
  const section2X = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
  const section2Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const section2Scale = useTransform(scrollYProgress, [0.3, 0.45], [0.9, 1]);

  // Global Scroll Hint Fade
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section 1: Hero Image (Base Layer) */}
        <div className="absolute inset-0 z-10">
          <img
            src={officeImage}
            alt="Business Bureau"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center items-end p-8 md:p-24 text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-end"
            >
              <img
                src="https://res.cloudinary.com/dtwcgfmar/image/upload/v1764996691/Business_Bureau_logo_l8enkr.png"
                alt="logo"
                className="w-64 md:w-80 mb-6"
              />
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight uppercase"
              >
                A Smart Place <br />
                <span className="text-primary italic font-serif lowercase">
                  to
                </span>{" "}
                <span className="font-bold">Work</span>
              </motion.h1>
              <div className="mt-8 flex gap-4 justify-end">
                <button
                  onClick={openModal}
                  className="group relative px-10 py-4 bg-primary overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:text-black">
                    Start Now
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Petta Video (Slides in) */}
        <motion.div
          style={{ x: section2X }}
          className="absolute inset-0 z-20 overflow-hidden bg-black shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
        >
          <VideoPlayer
            src="https://res.cloudinary.com/dtwcgfmar/video/upload/v1764757961/19.11.25_petta__M_kvggiw.mp4"
            poster="/assets/office-poster.jpg"
            className="w-full h-full object-cover opacity-80"
            isMuted={true}
            controls={false}
          />

          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-6">
            <motion.div
              style={{ opacity: section2Opacity, scale: section2Scale }}
            >
              <h2 className="text-white text-5xl md:text-8xl font-serif italic tracking-tighter mb-4">
                Now at <span className="text-primary">Petta</span> <br /> &{" "}
                <span className="text-primary">Panampilly Nagar</span>
              </h2>
              <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
              <p className="text-white/70 max-w-md text-sm md:text-base tracking-widest uppercase font-light">
                Expanding our vision to new horizons
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Global Scroll Hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] rotate-90 translate-x-1">
            Scroll
          </span>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <Forms />
      </Modal>
    </section>
  );
}
