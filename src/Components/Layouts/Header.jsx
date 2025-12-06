import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/bb logos-min.png";
import Modal from "./Utils/Modals";
import Forms from "./Utils/Forms";
function Header() {
  const headerRef = useRef(null);
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

  const scrollToElement = (ref, menuItem) => {
    setActiveMenuItem(menuItem);
    const element = document.querySelector(`#${ref}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
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
  }, []);

  return (
    <nav
      ref={headerRef}
      className="bg-white bb-white sticky dark:bg-white w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 "
    >
      <div className="max-w-screen-xl lg:max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className=" w-28" alt="Business bureau logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Flowbite
      </span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="sm:flex hidden items-center justify-end gap-4 me-3">
            <a
              href="https://www.facebook.com/businessbureau.in"
              target="blank"
              aria-label="Facebook"
              className="hover:text-cyan-600"
            >
              <i class="fa-brands fa-square-facebook text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/businessbureau.in?igsh=c3VtZXQ5cXV5ZjQ3"
              target="blank"
              aria-label="instagram"
              className="hover:text-cyan-600"
            >
              <i class="fa-brands fa-instagram text-xl"></i>
            </a>
            <a
              href="https://youtube.com/@BusinessBureaukochi?si=QzEobzgaAF1pAhrp"
              target="blank"
              aria-label="youtube"
              className="hover:text-cyan-600"
            >
              <i class="fa-brands fa-youtube text-xl"></i>
            </a>
            {/* <a
                      href="#me"
                      target="blank"
                      aria-label="medium"
                      className="hover:text-cyan-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-medium"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                      </svg>
                    </a> */}
          </div>
          <button
            type="button"
            onClick={openModal}
            className="bb-button inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm  text-white outline-none hover:scale-[1.05] ring-primary/50 transition duration-100 hover:bg-primary/85 focus-visible:ring md:text-base"
          >
            Get in Touch
          </button>
          <button
            onClick={toggleHidden}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
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
          className={`items-center justify-between  ${isHidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="bb-white flex flex-col p-4 md:p-0 mt-4 font-medium border dark:bg-white text-gray-800 border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white md:dark:bg-white  dark:border-gray-700">
            <li>
              <button
                href="#menu"
                className={`block py-2 px-3 ${activeMenuItem === "Home" ? "text-primary" : "text-gray-900"} rounded md:bg-transparent md:hover:text-primary md:p-0`}
                aria-current="page"
                onClick={() => scrollToElement("homeRef", "Home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                href="#menu"
                className={`block py-2 px-3 ${activeMenuItem === "About" ? "text-primary" : "text-gray-900"} rounded md:bg-transparent md:hover:text-primary md:p-0`}
                onClick={() => scrollToElement("aboutRef", "About")}
              >
                About
              </button>
            </li>
            <li>
              <button
                href="#menu"
                className={`block py-2 px-3 ${activeMenuItem === "Services" ? "text-primary" : "text-gray-900"} rounded md:bg-transparent md:hover:text-primary md:p-0`}
                onClick={() => scrollToElement("servicesRef", "Services")}
              >
                Services
              </button>
            </li>
            <li>
              <button
                href="#menu"
                className={`block py-2 px-3 ${activeMenuItem === "Contact" ? "text-primary" : "text-gray-900"} rounded md:bg-transparent md:hover:text-primary md:p-0`}
                onClick={() => scrollToElement("contactRef", "Contact")}
              >
                Contact
              </button>
            </li>
            <li>
              <div className="md:hidden flex items-center px-3 gap-6 me-3">
                <a
                  href="#me"
                  target="blank"
                  aria-label="github"
                  className="hover:text-cyan-600"
                >
                  <i class="fa-brands fa-facebook text-xl"></i>
                </a>
                <a
                  href="#me"
                  target="blank"
                  aria-label="twitter"
                  className="hover:text-cyan-600"
                >
                  <i class="fa-brands fa-instagram text-xl"></i>
                </a>
                <a
                  href="https://youtube.com/@BusinessBureaukochi?si=QzEobzgaAF1pAhrp"
                  target="blank"
                  aria-label="youtube"
                  className="hover:text-cyan-600"
                >
                  <i class="fa-brands fa-youtube text-xl"></i>
                </a>
                {/* <a
                      href="#me"
                      target="blank"
                      aria-label="medium"
                      className="hover:text-cyan-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-medium"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                      </svg>
                    </a> */}
              </div>
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
