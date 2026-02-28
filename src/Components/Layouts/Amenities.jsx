import React from "react";
import { motion } from "framer-motion";
import amen1 from "../../assets/amenities/wifi-sign.png";
import amen2 from "../../assets/amenities/coffee-machine.png";
import amen3 from "../../assets/amenities/drawer.png";
import amen4 from "../../assets/amenities/generator.png";
import amen5 from "../../assets/amenities/locker.png";
import amen6 from "../../assets/amenities/video-conferencing.png";
import amen7 from "../../assets/amenities/identification.png";
import amen8 from "../../assets/amenities/cctv-camera.png";

const amenitiesData = [
  {
    icon: amen1,
    title: "Free WIFI",
    desc: "Enjoy high-speed internet connectivity throughout our co-working space.",
  },
  {
    icon: amen2,
    title: "Refreshment",
    desc: "Stay energized with complimentary refreshments in our communal areas.",
  },
  {
    icon: amen3,
    title: "Shelf & Drawers",
    desc: "Personalize your workspace with convenient storage options.",
  },
  {
    icon: amen4,
    title: "Power Backups",
    desc: "Experience uninterrupted productivity with reliable power backups.",
  },
  {
    icon: amen5,
    title: "Lockers",
    desc: "Safeguard your belongings in our secure lockers for peace of mind.",
  },
  {
    icon: amen6,
    title: "Video Conferencing",
    desc: "Conduct virtual meetings effortlessly in our well-equipped spaces.",
  },
  {
    icon: amen7,
    title: "Finger Print Access",
    desc: "Ensure top-notch security with a personalized entry system.",
  },
  {
    icon: amen8,
    title: "24/7 Surveillance",
    desc: "Rest assured with continuous surveillance for a safe environment.",
  },
];

const Amenities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      data-section
      id="amenitiesRef"
      className="bg-white py-24 px-6 md:px-12"
    >
      <div className="xl:container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
            Elevated Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            Premium{" "}
            <span className="text-primary italic font-serif">Amenities</span>
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto mt-8 opacity-50" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 overflow-hidden rounded-3xl"
        >
          {amenitiesData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-10 hover:bg-gray-50 transition-colors duration-500"
            >
              <div className="relative z-10 space-y-8">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <img
                    src={item.icon}
                    loading="lazy"
                    decoding="async"
                    className="w-6 h-6 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                    alt={item.title}
                  />
                </div>
                <div className="space-y-3">
                  <h5 className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Subtle hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Amenities;
