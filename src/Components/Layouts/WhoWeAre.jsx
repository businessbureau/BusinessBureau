import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getOptimizedImageUrl, IMAGE_WIDTHS } from "../../utils/imgUtils";

const whoWeAreImg = getOptimizedImageUrl(
  "https://res.cloudinary.com/dpfpenhqc/image/upload/v1777360094/yclzds8rqm8fx9i0qjdi_uvupy8.jpg",
  IMAGE_WIDTHS.TABLET,
);

const WhoWeAre = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="xl:container mx-auto max-w-6xl relative z-10">
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
            {/* Hover Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
              <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase border-b border-primary/30 pb-1">
                Coworking space in kochi
              </span>
            </div>
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
                coworking space in Kochi
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Short Business Bureau <br className="hidden md:block" />
                <span className="text-primary italic font-serif">Summary</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Business Bureau is a professionally managed workspace provider
                designed to support modern workstyles across Kerala. We offer
                flexible office solutions for entrepreneurs, freelancers,
                startups, and growing teams seeking a reliable and professional
                work environment.
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                With thoughtfully designed interiors, enterprise-grade
                infrastructure, and a community-driven approach, we enable
                businesses to operate efficiently without long-term lease
                commitments.
              </p>
            </div>

            <Link
              to="/about/coworking-space-in-kochi"
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
