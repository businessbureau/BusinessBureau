import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./Layouts/Header";
import Seo from "./Seo";
import Footer from "./Layouts/Footer";

// Gallery Assets - Optimized by Width and Format
// Gallery Assets - Optimized by Width and Format
import { getOptimizedImageUrl, IMAGE_WIDTHS } from "../utils/imgUtils";

const int1 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776403312/yclzds8rqm8fx9i0qjdi_i3u4z6.jpg",
  IMAGE_WIDTHS.TABLET,
);
const int2 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776403311/tavusm6lrcjisesiry2a_bbmk1p.jpg",
  IMAGE_WIDTHS.TABLET,
);
const int3 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776403309/rjtdgeubqottjthkpavd_qmzujy.jpg",
  IMAGE_WIDTHS.TABLET,
);
const int4 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776403308/okrsujxm0q3yjvi7srvn_znkfxw.jpg",
  IMAGE_WIDTHS.TABLET,
);
const int5 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776403308/bprd94wtx61j8w9lv5mr_v3zgw0.jpg",
  IMAGE_WIDTHS.TABLET,
);
const int6 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776403307/fjsz1llrkh1umi3tmgi8_gloltw.jpg",
  IMAGE_WIDTHS.TABLET,
);

const ext1 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776404112/szdapnmgatkpddotafqb_wqdfmj.jpg",
  IMAGE_WIDTHS.TABLET,
);
const ext2 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776404111/it5pc6o2bvrhfefo2aom_d9kneu.jpg",
  IMAGE_WIDTHS.TABLET,
);
const ext3 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776404109/ievwej4anrpuntugfdub_hj6m8c.jpg",
  IMAGE_WIDTHS.TABLET,
);
const ext4 = getOptimizedImageUrl(
  "https://res.cloudinary.com/dfwlj6k8j/image/upload/v1776404107/gorzbjsmwg7rknympfaq_w0lw28.jpg",
  IMAGE_WIDTHS.TABLET,
);

const GalleryItem = ({ image, index, onSelect }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? -100 : 100],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.1,
      }}
      className={`relative group cursor-pointer overflow-hidden rounded-[2rem] bg-gray-50 ${image.aspect} ${
        index % 3 === 1 ? "md:mt-8 lg:mt-24" : index % 3 === 2 ? "md:mt-4 lg:mt-12" : ""
      }`}
      onClick={() => onSelect(image)}
    >
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-6 md:p-8 flex flex-col justify-end">
        <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
          {image.type}
        </span>
        <h3 className="text-white text-2xl md:text-3xl font-light italic font-serif leading-tight">
          {image.title}
        </h3>
      </div>
    </motion.div>
  );
};

const MagneticButton = ({ children, onClick, active }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative text-[10px] uppercase tracking-[0.4em] font-bold transition-all px-10 py-4 rounded-full border-2 ${
        active
          ? "bg-primary text-white border-primary shadow-2xl shadow-primary/40"
          : "text-gray-400 border-gray-100 hover:border-gray-300"
      }`}
    >
      {children}
    </motion.button>
  );
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    {
      src: int1,
      type: "interior",
      title: "Premium Workspace",
      aspect: "aspect-[4/5]",
    },
    {
      src: int2,
      type: "interior",
      title: "Collaborative Zone",
      aspect: "aspect-square",
    },
    {
      src: int3,
      type: "interior",
      title: "Executive Suite",
      aspect: "aspect-[4/5]",
    },
    {
      src: ext3,
      type: "exterior",
      title: "Architectural Detail",
      aspect: "aspect-square",
    },
    {
      src: int4,
      type: "interior",
      title: "Common Area",
      aspect: "aspect-[4/5]",
    },
    {
      src: int5,
      type: "interior",
      title: "Professional Lounge",
      aspect: "aspect-square",
    },
    {
      src: int6,
      type: "interior",
      title: "Focus Zone",
      aspect: "aspect-[4/5]",
    },
    {
      src: ext1,
      type: "exterior",
      title: "Business Hub",
      aspect: "aspect-square",
    },
    {
      src: ext2,
      type: "exterior",
      title: "Urban Presence",
      aspect: "aspect-[4/5]",
    },
    {
      src: ext4,
      type: "exterior",
      title: "Modern Facade",
      aspect: "aspect-[4/5]",
    },
  ];

  useEffect(() => {
    if (selectedImage) {
      window.lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.lenis?.start();
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.type === activeFilter);

  return (
    <div className="bg-white min-h-screen selection:bg-primary selection:text-white">
      <Seo
        title="Workspace Gallery | Business Bureau Coworking in Kochi"
        description="View images of our coworking space in Kochi showcasing modern workspaces, shared offices, meeting rooms, and professional interiors."
        url="https://www.businessbureau.in/gallery"
      />
      <div className="noise-overlay" />

      <Header />

      <section className="pt-52 pb-32 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <span className="text-primary text-[10px] uppercase tracking-[1.5em] font-bold mb-10 block opacity-50">
              Visual Narrative
            </span>
            <h1 className="text-8xl md:text-8xl lg:text-[14rem] font-light tracking-tighter leading-[0.75] text-gray-900 flex flex-wrap justify-center overflow-hidden">
              {["O", "u", "r", "\u00A0", "A", "u", "r", "a", "."].map(
                (char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={
                      char === "A" ||
                      char === "u" ||
                      char === "r" ||
                      char === "a"
                        ? "text-primary italic font-serif"
                        : ""
                    }
                  >
                    {char}
                  </motion.span>
                ),
              )}
            </h1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-32">
            {["all", "interior", "exterior"].map((filter) => (
              <MagneticButton
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </MagneticButton>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-60 px-6 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            <AnimatePresence>
              {filteredImages.map((image, i) => (
                <div key={image.src}>
                  <GalleryItem
                    image={image}
                    index={i}
                    onSelect={(img) => setSelectedImage(img)}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-10 right-10 text-white/40 hover:text-white"
            >
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
            <motion.div
              layoutId={selectedImage.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative max-w-7xl w-full aspect-video rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-primary text-xs uppercase tracking-[0.8em] font-bold mb-6 block">
                  {selectedImage.type}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-light italic font-serif">
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
