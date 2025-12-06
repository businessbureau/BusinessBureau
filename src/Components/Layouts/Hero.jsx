import React from "react";
import officeImage from "../../assets/office pics/first slide.webp";
import officeImage4 from "../../assets/office pics/forth slide.webp";
import officeImage2 from "../../assets/office pics/second slide.webp";
import officeImage3 from "../../assets/office pics/third slide.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Layouts/Utils/Hero.css";
import Modal from "./Utils/Modals";
import Forms from "./Utils/Forms";
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div data-section id="homeRef">
      <div className="relative">
        <div className=" absolute top-0 w-fit max-w-screen-xl min-h-screen flex flex-col justify-end items-start right-0 left-2 sm:left-5 z-40 py-6 sm:py-8 lg:py-12">
          <div className="max-w-full px-4 md:px-8 p-8 rounded-box sm:mx-14 mb-4 md:mb-8">
            <div className="flex max-w-xl flex-col items-center text-center">
              <h1 className="text-white text-4xl text-start md:text-6xl lg:text-5xl xl:text-6xl font-light my-5 pe-4">
                A Smart Place to{" "}
                <span className="text-primary dark:text-primary bb-heading">
                  Work
                </span>
              </h1>
              <div className="flex w-full gap-2.5 flex-row sm:justify-start font-light">
                <a
                  onClick={openModal}
                  href="#contact"
                  className="bb-button inline-block rounded-lg bg-primary px-3 py-3 text-center text-sm  text-white outline-none ring-primary/50 transition duration-100 hover:bg-primary/60 hover:scale-[1.05] focus-visible:ring md:text-base"
                >
                  Get in Touch
                </a>
                <a
                  href="https://maps.app.goo.gl/cSZwRqiQr4ZLCPXDA"
                  target="blank"
                  className="inline-block rounded-lg bg-transparent px-8 py-3 text-center text-sm fill-white text-white outline-none ring-indigo-300 transition duration-100 hover:text-primary focus-visible:ring active:text-white md:text-base hover:fill-primary group-hover:fill-primary"
                >
                  Visit Us{" "}
                  <span>
                    <svg
                      className="w-4 h-4 inline-flex "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={true}
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper relative w-full h-screen overflow-hidden bg-black"
        >
          <SwiperSlide>
            <img
              className="absolute top-0 bottom-0 right-0 left-0 object-cover object-left-bottom sm:object-center"
              style={{ width: "100%", height: "100%" }}
              src={officeImage}
              alt="Business bureau workspace img-1"
            />
            <div className="h-full w-[100%] mx-auto flex items-center relative bg-black/45 z-30"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="absolute top-0 bottom-0 right-0 left-0 object-cover object-center z-20"
              style={{ width: "100%", height: "100%" }}
              src={officeImage2}
              loading="lazy"
              alt="Business bureau workspace img-2"
            />
            <div className="h-full w-[100%] mx-auto flex items-center relative bg-black/45 z-30"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="absolute top-0 bottom-0 right-0 left-0 object-cover object-center z-20"
              style={{ width: "100%", height: "100%" }}
              src={officeImage3}
              loading="lazy"
              alt="Business bureau workspace img-3"
            />
            <div className="h-full w-[100%] mx-auto flex items-center relative bg-black/45 z-30"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="absolute top-0 bottom-0 right-0 left-0 object-cover object-center z-20"
              style={{ width: "100%", height: "100%" }}
              src={officeImage4}
              loading="lazy"
              alt="Business bureau workspace img-4"
            />
            <div className="h-full w-[100%] mx-auto flex items-center relative bg-black/45 z-30"></div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <Forms />
      </Modal>
    </div>
  );
};

export default Hero;
