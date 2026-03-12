import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/bb logos-min.png";

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-102 pt-32 pb-16 overflow-hidden">
      {/* Cinematic Background Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.02, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-0 text-[18rem] font-bold text-gray-900 whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter"
      >
        Business Bureau
      </motion.div>

      <div className="xl:container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-20 mb-24">
          {/* Brand Column */}
          <div className="sm:col-span-2 space-y-12">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src={logo}
              alt="logo"
              loading="lazy"
              className="w-44"
            />
            <p className="text-gray-600 font-light max-w-sm leading-relaxed text-lg">
              Empowering innovators and ambitious entrepreneurs with world-class
              environments. <br />
              <span className="text-gray-900 font-medium italic font-serif">
                Your journey, elevated.
              </span>
            </p>
            <div className="flex gap-8">
              {[
                {
                  icon: "fa-facebook",
                  link: "https://www.facebook.com/businessbureau.in",
                },
                {
                  icon: "fa-instagram",
                  link: "https://www.instagram.com/businessbureau.in",
                },
                {
                  icon: "fa-youtube",
                  link: "https://youtube.com/@BusinessBureaukochi",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -8, color: "#029a8d" }}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition-all duration-300 text-3xl"
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h6 className="text-gray-900 font-medium mb-10 text-sm uppercase tracking-[0.4em] opacity-30">
              Menu
            </h6>
            <ul className="space-y-6">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : item === "About"
                            ? "/about/coworking-space-in-kochi"
                            : item === "Services"
                              ? "/services"
                              : item === "Gallery"
                                ? "/gallery"
                                : item === "Contact"
                                  ? "/contact"
                                  : "/"
                      }
                      className="group flex items-center text-gray-500 hover:text-gray-900 transition-all duration-300 font-light text-base"
                    >
                      <span className="w-0 group-hover:w-6 h-[1px] bg-primary mr-0 group-hover:mr-4 transition-all duration-500"></span>
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h6 className="text-gray-900 font-medium mb-10 text-sm uppercase tracking-[0.4em] opacity-30">
              Locations
            </h6>
            <ul className="space-y-6">
              {[
                { name: "Petta, Kochi", path: "/petta/coworking-space-in-petta" },
                {
                  name: "Panampilly Nagar",
                  path: "/panampilly-nagar/coworking-space-in-panamppallynagar",
                },
              ].map((loc) => (
                <li key={loc.name}>
                  <Link
                    to={loc.path}
                    className="group flex items-center text-gray-500 hover:text-gray-900 transition-all duration-300 font-light text-base"
                  >
                    <span className="w-0 group-hover:w-6 h-[1px] bg-primary mr-0 group-hover:mr-4 transition-all duration-500"></span>
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h6 className="text-gray-900 font-medium mb-10 text-sm uppercase tracking-[0.4em] opacity-30">
              Inquiries
            </h6>
            <ul className="space-y-10">
              <li>
                <span className="text-gray-400 text-[9px] uppercase tracking-[0.5em] block mb-3 font-bold">
                  Connect via Phone
                </span>
                <a
                  href="tel:+917907556090"
                  className="text-gray-800 hover:text-primary transition-colors font-light text-lg block"
                >
                  +91 7907556090
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-[9px] uppercase tracking-[0.5em] block mb-3 font-bold">
                  Write to Us
                </span>
                <a
                  href="mailto:help.businessbureau@gmail.com"
                  className="text-gray-800 hover:text-primary transition-colors font-light text-lg block italic"
                >
                  help.businessbureau@gmail.com
                </a>
              </li>
              <li className="pt-6 border-t border-gray-100 space-y-4">
                <a
                  href="/privacy-policy"
                  className="text-[10px] text-gray-500 hover:text-gray-900 uppercase tracking-[0.2em] transition-all block"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-and-conditions"
                  className="text-[10px] text-gray-500 hover:text-gray-900 uppercase tracking-[0.2em] transition-all block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-[9px] uppercase tracking-[0.5em]">
          <div className="flex items-center gap-6">
            <span className="w-12 h-[1px] bg-gray-200"></span>
            <span>© Business Bureau Coworking {new Date().getFullYear()}</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group cursor-default"
          >
            <span>State of the Art</span>
            <span className="text-primary font-bold group-hover:text-gray-900 transition-colors">
              Excellence
            </span>
          </motion.div>
        </div>
      </div>

      {/* Stylized Grain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
    </footer>
  );
};

export default Footer;
