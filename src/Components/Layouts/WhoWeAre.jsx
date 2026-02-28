import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const whoWeAreImg =
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/f_auto,q_auto/v1772275472/WhatsApp_Image_2026-01-23_at_6.22.55_PM_1_-_Copy_vv7jfv.webp";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto xl:max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group bg-gray-100"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
            <img
              src={whoWeAreImg}
              alt="Business Bureau Workspace"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-50 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h1 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
                coworking space in Kerala
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-light text-gray-900 leading-tight">
                Short Business Bureau <br className="hidden md:block" />
                <span className="text-primary italic font-serif">Summary</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 font-light leading-relaxed text-lg 2xl:text-xl 3xl:text-2xl">
                Business Bureau is a professionally managed workspace provider
                designed to support modern workstyles across Kerala. We offer
                flexible office solutions for entrepreneurs, freelancers,
                startups, and growing teams seeking a reliable and professional
                work environment.
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-lg 2xl:text-xl 3xl:text-2xl">
                With thoughtfully designed interiors, enterprise-grade
                infrastructure, and a community-driven approach, we enable
                businesses to operate efficiently without long-term lease
                commitments.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-10 flex items-center gap-4 group cursor-pointer w-max"
            >
              <span className="w-12 h-[1px] bg-primary group-hover:w-16 transition-all duration-300"></span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-900 group-hover:text-primary transition-colors">
                Discover More
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
