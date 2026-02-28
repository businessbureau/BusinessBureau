import React from "react";
import { motion } from "framer-motion";
import Forms from "./Utils/Forms";

const Contact = () => {
  return (
    <section
      data-section
      id="contactRef"
      className="bg-white min-h-screen flex items-center py-24 px-6 md:px-12"
    >
      <div className="xl:container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            Connect{" "}
            <span className="text-primary italic font-serif">With Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-3xl shadow-sm"
          >
            <Forms />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-full min-h-[400px] rounded-3xl overflow-hidden transition-all duration-700 border border-gray-100 shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7044886398207!2d76.29365817479305!3d9.958526290144729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872c73eaaaaab%3A0x62be3b55e654cf59!2sBusiness%20Bureau%20Coworking!5e0!3m2!1sen!2sin!4v1706361343066!5m2!1sen!2sin"
              title="Business Bureau Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              className="w-full h-full opacity-100 transition-opacity duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
