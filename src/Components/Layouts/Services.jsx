import React, { useState, useRef, useEffect } from "react";
import dedicatedDesks from "../../assets/office pics/services/Dedicated desks.webp";
import privateCabins from "../../assets/office pics/services/Private Cabins.webp";
import virtualOffice from "../../assets/office pics/services/Meeting Rooms.webp";
import cafeteria from "../../assets/office pics/services/Cafeteria.webp";
import Clients from "./Clients";

const Services = () => {
  const [showMore, setShowMore] = useState({
    dedicatedDesks: false,
    privateCabins: false,
    virtualOffice: false,
    cafeteria: false,
  });

  const cardRefs = {
    dedicatedDesks: useRef(null),
    privateCabins: useRef(null),
    virtualOffice: useRef(null),
    cafeteria: useRef(null),
  };

  const handleShowMore = (service) => {
    setShowMore((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  const handleClickOutside = (event) => {
    for (const service in cardRefs) {
      if (
        cardRefs[service].current &&
        !cardRefs[service].current.contains(event.target)
      ) {
        setShowMore((prevState) => ({
          ...prevState,
          [service]: false,
        }));
      }
    }
  };

  const handleMouseLeave = (service) => {
    setShowMore((prevState) => ({
      ...prevState,
      [service]: false,
    }));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div data-section id="servicesRef" className="bb-bg-light bg-primary/15">
      <div className="py-20">
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-16 w-full">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl text-center">
              Services
            </h2>
            <p className="text-gray-500 text-center w-full sm:w-3/4 mx-auto">
              Discover convenience at Business Bureau: tailored services,
              top-notch amenities, and a vibrant community. From private offices
              to hot desks, check out our services and elevate your work
              experience with us.
            </p>
          </div>
          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              ref={cardRefs.dedicatedDesks}
              onMouseLeave={() => handleMouseLeave("dedicatedDesks")}
              className="group relative rounded-3xl  space-y-6 overflow-hidden"
            >
              <img
                className="mx-auto h-[26rem] w-full grayscale-0 object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale"
                src={dedicatedDesks}
                alt="Dedicated Desks"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-2xl font-semibold dark:text-gray-700 text-white">
                    Dedicated Desks
                  </h4>
                </div>
                <p
                  className={`mt-8 text-gray-300 dark:text-gray-600 ${showMore.dedicatedDesks ? "" : "line-clamp-2"}`}
                >
                  Elevate your productivity with our dedicated desks, providing
                  a personalized workspace for focused and efficient work.
                </p>
                <span
                  className="font-semibold text-info cursor-pointer hover:text-info/75"
                  onClick={() => handleShowMore("dedicatedDesks")}
                >
                  {showMore.dedicatedDesks ? "less" : "more"}
                </span>
              </div>
            </div>
            <div
              ref={cardRefs.privateCabins}
              onMouseLeave={() => handleMouseLeave("privateCabins")}
              className="group relative rounded-3xl  space-y-6 overflow-hidden"
            >
              <img
                className="mx-auto h-[26rem] w-full grayscale-0 object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale"
                src={privateCabins}
                alt="private cabins"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-2xl font-semibold dark:text-gray-700 text-white">
                    Private Cabins
                  </h4>
                </div>
                <p
                  className={`mt-8 text-gray-300 dark:text-gray-600 ${showMore.privateCabins ? "" : "line-clamp-2"}`}
                >
                  Experience privacy and exclusivity in our private cabins,
                  tailored for those who value a dedicated and secluded office
                  environment.
                </p>
                <span
                  className="font-semibold text-info cursor-pointer hover:text-info/75"
                  onClick={() => handleShowMore("privateCabins")}
                >
                  {showMore.privateCabins ? "less" : "more"}
                </span>
              </div>
            </div>
            <div
              ref={cardRefs.virtualOffice}
              onMouseLeave={() => handleMouseLeave("virtualOffice")}
              className="group relative rounded-3xl  space-y-6 overflow-hidden"
            >
              <img
                className="mx-auto h-[26rem] w-full grayscale-0 object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale"
                src={virtualOffice}
                alt="Meeting Rooms"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-2xl font-semibold dark:text-gray-700 text-white">
                    Meeting Rooms
                  </h4>
                </div>
                <p
                  className={`mt-8 text-gray-300 dark:text-gray-600 ${showMore.virtualOffice ? "" : "line-clamp-2"}`}
                >
                  Foster collaboration and make impactful presentations in our
                  state-of-the-art meeting rooms, equipped to enhance your
                  team's creativity and communication.
                </p>
                <span
                  className="font-semibold text-info cursor-pointer hover:text-info/75"
                  onClick={() => handleShowMore("virtualOffice")}
                >
                  {showMore.virtualOffice ? "less" : "more"}
                </span>
              </div>
            </div>
            <div
              ref={cardRefs.cafeteria}
              onMouseLeave={() => handleMouseLeave("cafeteria")}
              className="group relative rounded-3xl  space-y-6 overflow-hidden"
            >
              <img
                className="mx-auto h-[26rem] w-full grayscale-0 object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale"
                src={cafeteria}
                alt="cafeteria"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-2xl font-semibold dark:text-gray-700 text-white">
                    Cafeteria
                  </h4>
                </div>
                <p
                  className={`mt-8 text-gray-300 dark:text-gray-600 ${showMore.cafeteria ? "" : "line-clamp-2"}`}
                >
                  Recharge and socialize in our vibrant cafeteria, offering a
                  welcoming space for networking, casual meetings, and enjoying
                  refreshments in a relaxed setting.
                </p>
                <span
                  className="font-semibold text-info cursor-pointer hover:text-info/75"
                  onClick={() => handleShowMore("cafeteria")}
                >
                  {showMore.cafeteria ? "less" : "more"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default Services;
