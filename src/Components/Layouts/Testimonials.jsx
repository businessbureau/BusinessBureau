import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import testimonial1 from "../../assets/testimonials/sham-placeholder.jpg";
import testimonial2 from "../../assets/testimonials/sooraj.jpeg";
import testimonial3 from "../../assets/testimonials/aji.jpg";

const testimonialsData = [
  {
    name: "Sham SK",
    role: "MD, SK-way",
    image: testimonial1,
    text: "I recently used the meeting room at Business Bureau, and it was an excellent experience. The atmosphere was professional, the staff was friendly and accommodating, and the room was well-equipped with modern amenities.",
  },
  {
    name: "Aji Vijayan",
    role: "Chartered Accountant",
    image: testimonial3,
    text: "I recently used Business Bureau's meeting room and it was fantastic! Professional atmosphere, friendly staff, and well-equipped facilities. The attention to cleanliness and organization was impressive.",
  },
  {
    name: "Suraj Nair",
    role: "Equity Investment Consultant",
    image: testimonial2,
    text: "My recent experience at Business Bureau was exceptional. The staff's professionalism and friendliness were noteworthy. Reliable high-speed internet and flexible booking options make it a top choice.",
  },
  {
    name: "Hormis Joseph George",
    role: "Account Executive C&W",
    image:
      "https://tailus.io/sources/blocks/tested/preview/images/avatars/third_user.webp",
    text: "Had a wonderful experience at Business Bureau! The staff was friendly, and the overall atmosphere was fantastic. Highly recommend for a hassle-free professional setting.",
  },
  {
    name: "Alen Jacob",
    role: "Founder, TrillionEdition",
    image:
      "https://tailus.io/sources/blocks/tested/preview/images/avatars/first_user.webp",
    text: "Business Bureau has provided us with the perfect environment to scale our operations. The community and the facilities are unmatched in Kochi.",
  },
  {
    name: "Rupa Joseph",
    role: "Director, Pravasamedia",
    image:
      "https://tailus.io/sources/blocks/tested/preview/images/avatars/second_user.webp",
    text: "The private offices at Business Bureau are sleek and professional. It's the best decision we made for nuestra team's productivity.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

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
                  <p className="text-2xl md:text-3xl text-gray-800 font-light leading-tight italic font-serif relative z-10 pr-10">
                    {item.text}
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-8">
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
    </div>
  );
};

export default Testimonials;
