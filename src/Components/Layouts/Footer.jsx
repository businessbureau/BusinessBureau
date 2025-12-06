import React from "react";
import logo from "../../assets/bb logos-min.png";
const Footer = () => {
  const scrollToElement = (ref, menuItem) => {
    const element = document.querySelector(`#${ref}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <footer>
        <div className="flex justify-stretch items-stretch -ms-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-mb-0.5 w-full bg-gray-900 p-0 ps-0 "
            viewBox="0 0 1367.743 181.155"
          >
            <path
              className="fill-[#d1ecea] text-gray-100 dark:text-gray-800 p-0 w-full"
              id="wave"
              data-name="wave"
              d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
              transform="translate(1.743 66.155)"
            />
          </svg>
        </div>
        <div className="bb-gradient-light bg-gradient-to-b from-primary/20 to-primary/15 dark:from-primary/20 dark:to-primary/15 pt-1">
          <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-800 md:px-12 lg:px-20">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
              <div className="col-span-8 md:border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
                <div className="flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0">
                  <img
                    src={logo}
                    alt="logo business bureau"
                    width={100}
                    height={42}
                    className="w-32 hover:grayscale-0 py-4"
                  />
                  <div className="flex gap-6">
                    <a
                      href="https://www.facebook.com/businessbureau.in"
                      target="blank"
                      aria-label="github"
                      className="hover:text-cyan-600"
                    >
                      <i class="fa-brands fa-facebook text-2xl"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/businessbureau.in?igsh=c3VtZXQ5cXV5ZjQ3"
                      target="blank"
                      aria-label="twitter"
                      className="hover:text-cyan-600"
                    >
                      <i class="fa-brands fa-instagram text-2xl"></i>
                    </a>
                    <a
                      href="https://youtube.com/@BusinessBureaukochi?si=QzEobzgaAF1pAhrp"
                      target="blank"
                      aria-label="youtube"
                      className="hover:text-cyan-600"
                    >
                      <i class="fa-brands fa-youtube text-2xl"></i>
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
                </div>
              </div>
              <div className="col-span-8 md:col-span-6 lg:col-span-5">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 pb-16  md:pl-16">
                  <div>
                    <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-800">
                      Quick Links
                    </h6>
                    <ul className="mt-4 list-inside space-y-4 font-light">
                      <li>
                        <span
                          href="#me"
                          className="transition hover:text-cyan-600 cursor-pointer"
                          onClick={() => scrollToElement("homeRef", "Home")}
                        >
                          Home
                        </span>
                      </li>
                      <li>
                        <span
                          href="#me"
                          className="transition hover:text-cyan-600 cursor-pointer"
                          onClick={() => scrollToElement("aboutRef", "About")}
                        >
                          About
                        </span>
                      </li>
                      <li>
                        <span
                          href="#me"
                          className="transition hover:text-cyan-600 cursor-pointer"
                          onClick={() =>
                            scrollToElement("servicesRef", "Services")
                          }
                        >
                          Services
                        </span>
                      </li>
                      <li>
                        <span
                          href="#me"
                          className="transition hover:text-cyan-600 cursor-pointer"
                          onClick={() =>
                            scrollToElement("amenitiesRef", "Amenities")
                          }
                        >
                          Amenities
                        </span>
                      </li>
                      <li>
                        <span
                          href="#me"
                          className="transition hover:text-cyan-600 cursor-pointer"
                          onClick={() =>
                            scrollToElement("contactRef", "Contact")
                          }
                        >
                          Contact
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-800">
                      Contact us
                    </h6>
                    <ul className="mt-4 list-inside space-y-4 font-light">
                      <li>
                        <a
                          href="tel:+917907556090"
                          className="transition hover:text-cyan-600"
                        >
                          <span className=" inline-flex pe-1">
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          +91 7907556090
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:help.businessbureau@gmail.com"
                          className="transition hover:text-cyan-600"
                        >
                          <span className=" inline-flex pe-1">
                            <i class="fa-solid fa-envelope"></i>
                          </span>
                          help.businessbureau@gmail.com
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="#me"
                          className="transition hover:text-cyan-600"
                        >
                          <span className=" inline-flex pe-2">
                            <i class="fa-solid fa-location-dot"></i>
                          </span>
                          G 287, opp. Federal Bank, Main Avenue, MIG Housing
                          Society, Panampilly Nagar, Kochi, Ernakulam, Kerala
                          682036
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  {/* <div>
                    <h6 className="text-lg font-medium text-gray-800 dark:text-gray-800">
                      Ressources
                    </h6>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <a
                          href="#menu"
                          className="transition hover:text-cyan-600"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#menu"
                          className="transition hover:text-cyan-600"
                        >
                          Customers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#menu"
                          className="transition hover:text-cyan-600"
                        >
                          Enterprise
                        </a>
                      </li>
                      <li>
                        <a
                          href="#menu"
                          className="transition hover:text-cyan-600"
                        >
                          Partners
                        </a>
                      </li>
                      <li>
                        <a
                          href="#menu"
                          className="transition hover:text-cyan-600"
                        >
                          Jobs
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-8 md:pl-16">
                  <span>
                    © Business Bureau Coworking - <span id="year" />
                    {2024}
                  </span>
                  <span>All right reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
