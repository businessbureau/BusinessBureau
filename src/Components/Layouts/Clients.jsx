import React from "react";
import { motion } from "framer-motion";
import client1 from "../../assets/clients/autobacs.png";
import client2 from "../../assets/clients/whyletz.png";
import client3 from "../../assets/clients/impressa.png";
import client4 from "../../assets/clients/cushman whitefield.png";

const Clients = () => {
  const clientsData = [
    { src: client4, alt: "Cushman & Wakefield" },
    { src: client2, alt: "Whyletz" },
    { src: client3, alt: "Impreza" },
    { src: client1, alt: "Autobacs" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="relative flex flex-col items-center overflow-hidden bg-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] py-20 px-6 md:px-12 border border-white/50 w-full transition-all duration-700 hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.2)]">
        {/* Soft decorative background gradients for a premium feel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[3rem] pointer-events-none">
          <div className="absolute top-[-25%] left-[-15%] w-[60%] h-[60%] bg-gradient-to-br from-gray-100/80 to-transparent blur-[80px] rounded-full" />
          <div className="absolute bottom-[-25%] right-[-15%] w-[60%] h-[60%] bg-gradient-to-tl from-gray-100/80 to-transparent blur-[80px] rounded-full" />
        </div>

        <div className="container relative z-[1] w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center py-1.5 px-4 rounded-full bg-gray-50 text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-6 border border-gray-100 shadow-sm"
            >
              Trusted By Industry Leaders
            </motion.div>
            <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-7xl tracking-tighter mb-5">
              Our Clients
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              We collaborate with forward-thinking companies to build
              exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 md:mt-24 w-full"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch justify-center">
              {clientsData.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group flex items-center justify-center p-8 md:p-10 bg-white hover:bg-gray-50/50 rounded-3xl transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] cursor-pointer border border-gray-100/50 hover:border-gray-200 aspect-[4/3]"
                >
                  <img
                    src={client.src}
                    className="transition-all duration-700 w-32 md:w-44 lg:w-48 object-contain opacity-60 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0 filter drop-shadow-sm group-hover:drop-shadow-md mix-blend-multiply"
                    loading="lazy"
                    alt={client.alt}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
