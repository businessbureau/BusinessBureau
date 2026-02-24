import React from "react";
import { motion } from "framer-motion";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Forms from "./Layouts/Utils/Forms";
import contactImg from "../assets/service page/WhatsApp Image 2026-01-23 at 6.22.55 PM (1) - Copy.jpeg";
import officeImg from "../assets/office pics/first slide.webp";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src={officeImg}
            alt="Contact Business Bureau"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[10px] uppercase tracking-[1em] font-bold mb-8 block"
          >
            Connect
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-6xl md:text-9xl font-light tracking-tighter leading-none"
          >
            Join the <br />
            <span className="text-primary italic font-serif text-5xl md:text-8xl">
              Collective.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-40 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Visual Branding */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img
                  src={contactImg}
                  alt="Business Bureau Hospitality"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-1000" />
              </div>

              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-light tracking-tighter text-gray-900 leading-tight"
                >
                  Your journey, <br />
                  <span className="text-primary italic font-serif">
                    elevated.
                  </span>
                </motion.h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                  We are here to help you find the perfect workspace for your
                  vision. Whether you need a private suite or a flexible desk,
                  our team is ready to guide you.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-gray-100">
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold block mb-4">
                      Direct Line
                    </span>
                    <p className="text-gray-900 font-medium">+91 7907556090</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold block mb-4">
                      Support
                    </span>
                    <p className="text-gray-900 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      help.businessbureau@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 md:p-20 rounded-[3rem] border border-gray-100 shadow-xl"
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">
                Inquiry Form
              </span>
              <h3 className="text-4xl font-light text-gray-900 mb-12 tracking-tight">
                Tell us about <br />
                your{" "}
                <span className="text-primary italic font-serif">mission.</span>
              </h3>
              <Forms />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
