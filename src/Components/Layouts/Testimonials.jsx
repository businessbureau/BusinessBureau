import React from "react";
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
import "./Testimonials.css";
import testimonial1 from "../../assets/testimonials/sham-placeholder.jpg";
import testimonial2 from "../../assets/testimonials/sooraj.jpeg";
import testimonial3 from "../../assets/testimonials/aji.jpg";
const Testimonials = () => {
  return (
    <div>
      <>
        {/* require JavaScript for carousel to work 
     eg : https://swiperjs.com/
*/}
        <div className="py-16">
          <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 className="mb-12 text-center font-bold text-gray-800 text-4xl md:text-5xl">
              What's our customers say
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={true}
              //navigation={true}
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              loop={true}
            >
              <div className="swiper mySwiper">
                <div className="swiper-wrapper pb-6">
                  <SwiperSlide>
                    <div className="swiper-slide !bg-transparent">
                      <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                        <img
                          className="mx-auto !h-16 !w-16 rounded-full object-cover"
                          src={testimonial1}
                          alt="Shyam S K"
                          height={220}
                          width={220}
                          loading="lazy"
                        />
                        <p>
                          <span className="font-serif">"</span> I recently used
                          the meeting room at Business Bureau, and it was an
                          excellent experience. The atmosphere was professional,
                          the staff was friendly and accommodating, and the room
                          was well-equipped with modern amenities. The attention
                          to detail in maintaining a clean and organized space
                          stood out. High-speed internet, comfortable seating,
                          and effective layout made discussions productive. The
                          flexibility in room sizes and user-friendly booking
                          platform were appreciated. Overall, a top-notch
                          experience. Highly recommend for a professional
                          meeting space. Looking forward to my next visit!{" "}
                          <span className="font-serif">"</span>
                        </p>
                        <div>
                          <h6 className="text-lg font-semibold leading-none">
                            Sham SK
                          </h6>
                          <span className="text-xs text-gray-500">
                            MD, SK-way
                          </span>
                          <div className="mx-auto h-14" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide !bg-transparent">
                      <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                        <img
                          className="mx-auto !h-16 !w-16 rounded-full object-cover"
                          src={testimonial3}
                          alt="Aji Ca"
                          height={220}
                          width={220}
                          loading="lazy"
                        />
                        <p>
                          <span className="font-serif">"</span> I recently used
                          Business Bureau's meeting room and it was fantastic!
                          Professional atmosphere, friendly staff, and
                          well-equipped facilities. The attention to cleanliness
                          and organization was impressive. High-speed internet
                          and comfortable seating made discussions productive.
                          Easy booking and flexible room options. Highly
                          recommended for professional meetings.{" "}
                          <span className="font-serif">"</span>
                        </p>
                        <div>
                          <h6 className="text-lg font-semibold leading-none">
                            Aji Vijayan
                          </h6>
                          <span className="text-xs text-gray-500">
                            Chartered Accountant
                          </span>
                          <div className="mx-auto h-14" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide !bg-transparent">
                      <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                        <img
                          className="mx-auto !h-16 !w-16 rounded-full object-cover"
                          src={testimonial2}
                          alt="user avatar"
                          height={220}
                          width={220}
                          loading="lazy"
                        />
                        <p>
                          <span className="font-serif">"</span>
                          My recent experience at Business Bureau was
                          exceptional. The staff's professionalism and
                          friendliness were noteworthy. The meeting room was
                          well-equipped, clean, and organized, creating a
                          productive atmosphere. Reliable high-speed internet,
                          effective room layout, and flexible booking options
                          make it a top choice. Highly recommend for a
                          professional meeting space! Looking forward to
                          returning!
                          <span className="font-serif">"</span>
                        </p>
                        <div>
                          <h6 className="text-lg font-semibold leading-none">
                            Suraj Nair
                          </h6>
                          <span className="text-xs text-gray-500">
                            Equity Investment Consultant
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide !bg-transparent">
                      <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                        <img
                          className="mx-auto !h-16 !w-16 rounded-full obb"
                          src="https://tailus.io/sources/blocks/tested/preview/images/avatars/third_user.webp"
                          alt="user avatar"
                          height={220}
                          width={220}
                          loading="lazy"
                        />
                        <p>
                          <span className="font-serif">"</span>Had a wonderful
                          experience at Business Bureau! The staff was friendly,
                          and the overall atmosphere was fantastic. Highly
                          recommend for a hassle-free professional setting
                          <span className="font-serif">"</span>
                        </p>
                        <div>
                          <h6 className="text-lg font-semibold leading-none">
                            Hormis Joseph George
                          </h6>
                          <span className="text-xs text-gray-500">
                            Account Executive C&W
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination" />
              </div>
            </Swiper>
          </div>
        </div>
      </>
    </div>
  );
};

export default Testimonials;
