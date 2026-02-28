import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Layouts/Header";
import Seo from "./Seo";
import Footer from "./Layouts/Footer";

// Gallery Assets - Organized by Folder
import int1 from "../assets/Gallery/Interior/IMG_0534_0000_Color Lookup 1.jpg";
import int2 from "../assets/Gallery/Interior/IMG_0543_0002_Color Lookup 2.jpg";
import int3 from "../assets/Gallery/Interior/IMG_0543_0010_Brightness_Contrast 7.jpg";
import int4 from "../assets/Gallery/Interior/WhatsApp Image 2026-01-23 at 6.22.55 PM (1) - Copy.jpeg";
import int5 from "../assets/Gallery/Interior/WhatsApp Image 2026-01-23 at 6.22.57 PM.jpeg";
import int6 from "../assets/Gallery/Interior/WhatsApp Image 2026-01-23 at 6.22.59 PM.jpeg";
import int7 from "../assets/Gallery/Interior/WhatsApp Image 2026-01-23 at 6.23.00 PM.jpeg";

import ext1 from "../assets/Gallery/Exterior/exterior1.jpg";
import ext2 from "../assets/Gallery/Exterior/exterior2.jpg";
import ext3 from "../assets/Gallery/Exterior/exterior3.jpg";
import ext4 from "../assets/Gallery/Exterior/exterior4.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    { src: int1, type: "interior", title: "Premium Workspace", size: "large" },
    { src: ext1, type: "exterior", title: "Business Hub", size: "small" },
    { src: int2, type: "interior", title: "Collaborative Zone", size: "small" },
    { src: ext2, type: "exterior", title: "Urban Presence", size: "small" },
    { src: int3, type: "interior", title: "Executive Suite", size: "small" },
    {
      src: ext3,
      type: "exterior",
      title: "Architectural Detail",
      size: "large",
    },
    { src: ext4, type: "exterior", title: "Modern Facade", size: "small" },
    { src: int4, type: "interior", title: "Common Area", size: "small" },
    {
      src: int5,
      type: "interior",
      title: "Professional Lounge",
      size: "small",
    },
    { src: int6, type: "interior", title: "Focus Zone", size: "small" },
    { src: int7, type: "interior", title: "Community Corner", size: "small" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.type === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Workspace Gallery | Business Bureau Coworking in Kochi"
        description="Explore the professional workspace gallery of Business Bureau in Kochi. View our modern shared offices, executive suites, and collaborative environments."
        url="https://www.businessbureau.in/gallery"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary text-[10px] uppercase tracking-[1em] font-bold mb-8 block"
          >
            Visual Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-12 text-gray-900"
          >
            Our <span className="text-primary italic font-serif">Aura.</span>
          </motion.h1>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 px-4">
            {["all", "interior", "exterior"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold transition-all px-5 md:px-6 py-2 rounded-full border ${
                  activeFilter === filter
                    ? "bg-primary text-white border-primary"
                    : "text-gray-400 border-gray-100 hover:border-primary/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-40 px-6">
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, i) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/5] bg-gray-100 ${
                    image.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2">
                      {image.type}
                    </span>
                    <h3 className="text-white text-2xl font-light italic font-serif">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-10 right-10 text-white text-4xl font-light"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[16/9] rounded-[3rem] overflow-hidden bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold block mb-4">
                  {selectedImage.type}
                </span>
                <h2 className="text-4xl font-light italic font-serif">
                  {selectedImage.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
