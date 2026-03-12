import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/bb logos-min.png";
import Modal from "./Utils/Modals";
import Forms from "./Utils/Forms";

function Header() {
  const headerRef = useRef(null);
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  //modal js

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isLocationOpen, setIsLocationOpen] = useState(false);

  // Sync activeMenuItem with URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/about/coworking-space-in-kochi") setActiveMenuItem("About");
    else if (path === "/services") setActiveMenuItem("Services");
    else if (path === "/gallery") setActiveMenuItem("Gallery");
    else if (path === "/contact") setActiveMenuItem("Contact");
    else if (
      path === "/petta/coworking-space-in-petta" ||
      path === "/panampilly-nagar/coworking-space-in-panampillynagar"
    )
      setActiveMenuItem("Locations");
    else if (path === "/") setActiveMenuItem("Home");
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entry is in view, update the activeMenuItem
            const cleanedId = entry.target.id.replace("Ref", "");
            const capitalizedId =
              cleanedId.charAt(0).toUpperCase() + cleanedId.slice(1);
            setActiveMenuItem(capitalizedId);
          }
        });
      },
      { threshold: 0.3 },
    ); // Adjust the threshold as needed

    // Observe each section
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [location.pathname]);

  return (
    <nav
      ref={headerRef}
      className="bg-white sticky w-full z-50 top-0 start-0 border-b border-gray-100 shadow-sm transition-all duration-300"
    >
      <div className="max-w-screen-xl lg:max-w-full flex flex-wrap items-center justify-between mx-auto p-4 md:px-12">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="w-20 lg:w-28"
            alt="Business bureau logo"
            loading="eager"
            fetchpriority="high"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="sm:flex hidden items-center justify-end gap-6 me-8">
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
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <i className={`fa-brands ${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={openModal}
            className="group relative px-4 py-2 lg:px-6 lg:py-2 bg-primary overflow-hidden rounded-sm hidden lg:block"
          >
            <motion.div
              className="absolute inset-0 bg-gray-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-white group-hover:text-white">
              Get in Touch
            </span>
          </button>
          <button
            onClick={toggleHidden}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${isHidden ? "hidden" : ""} w-full lg:flex lg:w-auto lg:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 space-y-2 lg:space-y-0">
            {["Home", "About", "Services", "Gallery"].map((item) => (
              <li key={item}>
                <Link
                  to={
                    item === "Home"
                        ? "/"
                        : item === "About"
                          ? "/about/coworking-space-in-kochi"
                          : item === "Services"
                            ? "/services"
                            : "/gallery"
                  }
                  onClick={() => {
                    setActiveMenuItem(item);
                    if (item === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`block py-2 px-3 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
                    activeMenuItem === item
                      ? "text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* Locations Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsLocationOpen(true)}
              onMouseLeave={() => setIsLocationOpen(false)}
            >
              <button
                className={`flex items-center gap-2 py-2 px-3 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
                  activeMenuItem === "Locations"
                    ? "text-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Locations
                <motion.i
                  animate={{ rotate: isLocationOpen ? 180 : 0 }}
                  className="fa-solid fa-chevron-down text-[8px]"
                />
              </button>

              <AnimatePresence>
                {isLocationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50 p-2"
                  >
                    {[
                      { name: "Petta", path: "/petta/coworking-space-in-petta" },
                      {
                        name: "Panampilly Nagar",
                        path: "/panampilly-nagar/coworking-space-in-panampillynagar",
                      },
                    ].map((loc) => (
                      <Link
                        key={loc.name}
                        to={loc.path}
                        onClick={() => {
                          setActiveMenuItem("Locations");
                          setIsLocationOpen(false);
                        }}
                        className="block px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {["Contact"].map((item) => (
              <li key={item}>
                <Link
                  to="/contact"
                  onClick={() => setActiveMenuItem(item)}
                  className={`block py-2 px-3 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
                    activeMenuItem === item
                      ? "text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="lg:hidden pt-4">
              <button
                type="button"
                onClick={openModal}
                className="w-full group relative px-6 py-4 bg-primary overflow-hidden rounded-xl shadow-lg shadow-primary/20"
              >
                <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold text-white">
                  Get in Touch
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <Forms />
      </Modal>
    </nav>
  );
}

export default Header;
