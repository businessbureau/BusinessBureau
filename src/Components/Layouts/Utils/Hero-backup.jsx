import React from "react";
import mainVideo from "../../assets/videos/Snapinsta.app_video_GHyWExPB9r6bL7QAAN1Zf-n-9JIcbkYLAAAF.mp4";
import Features from "./Utils/Features";
const Hero = () => {
  return (
    <div>
      <div className="pt-32 md:py-12 md:container md:mx-auto overflow-x-hidden m-auto px-6 md:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
        />
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl">
              A SMART SPACE TO{" "}
              <span className="text-primary dark:text-primaryLight">WORK!</span>
            </h1>
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 my-8">
              <li className="flex items-start space-x-3">
                <div className="bg-primary rounded-full w-7 h-7 flex-shrink-0">
                  <svg
                    className=" flex-shrink-0 w-full h-full text-white p-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>

                <span>
                  Reserved seats in dedicated workspaces designed for
                  professionals, freelancers, small businesses, and startups.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-primary rounded-full w-7 h-7 flex-shrink-0">
                  <svg
                    className=" flex-shrink-0 w-full h-full text-white p-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>

                <span>
                  Fully furnished private offices – ready to move in,
                  customizable, and tailored to your team's size and needs.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-primary rounded-full w-7 h-7 flex-shrink-0">
                  <svg
                    className=" flex-shrink-0 w-full h-full text-white p-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>

                <span>
                  All-in-one Virtual Office: Mail handling, reception services,
                  meeting room access – no need for a physical office setup.
                </span>
              </li>
            </ul>

            <div>
              {/* button group */}
              <div
                className="inline-flex rounded-md shadow-sm flex-wrap my-3"
                role="group"
              >
                <button
                  type="button"
                  className="text-white bg-primary hover:bg-primary/90 focus:ring-4 inline-flex items-center focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primary/90 focus:outline-none dark:focus:ring-blue-800"
                >
                  Connect with us
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-gray-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-inherit rounded-md group-hover:bg-opacity-0">
                    Visit Us
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
              <img
                src={
                  "../../assets/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology (1).jpg"
                }
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="./images/clients/ge.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="./images/clients/coty.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="./images/clients/microsoft.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden w-full h-full lg:w-7/12 lg:-mr-16">
            <div className="flex justify-center items-start object-cover m-3 rounded-lg">
              <video className="w-[90%] rounded-xl" autoPlay muted loop>
                <source src={mainVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Features />
      </div>
      {/* bg-video card */}
      <div className="card w-3/6 text-primary-content sm:my-[25%] my-auto">
        <div className="card-body text-white">
          <h2 className="card-title text-3xl">Welcome</h2>
          <p>
            Discover a vibrant and collaborative workspace designed for
            innovation, productivity, and community. Business Bureau is not just
            a place to work; it's a dynamic ecosystem where ideas flourish,
            connections thrive, and success unfolds. Whether you're a
            freelancer, entrepreneur, or a growing team, we have the perfect
            space for you.
          </p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-white hover:text-black hover:border-none">
              Read More
            </button>
          </div>
        </div>
      </div>
      <video className="w-full h-full" autoPlay muted loop>
        <source src={mainVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
