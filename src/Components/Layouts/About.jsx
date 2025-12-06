import React, { useState, useRef } from "react";
import mainVideo from "../../assets/videos/bb-video.mp4";
import "./About.css";
import LazyLoadVideo from "./LazyLoadVideo";

const About = () => {
  const [readmore, setReadMore] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleReadMore = () => {
    setReadMore(!readmore);
  };

  const handleToggleMuted = () => {
    setIsMuted(!isMuted);
  };

  const aboutRef = useRef(null);

  return (
    <div
      data-section
      ref={aboutRef}
      id="aboutRef"
      className="hero min-h-screen hero-background-video"
    >
      <div className="hero-content text-start text-neutral-content ">
        <div className=" max-w-full h-full relative z-20">
          <div className="card w-full sm:w-1/2 text-primary-content my-auto border rounded-box relative">
            <div className="card-body text-white">
              <h2 className="card-title text-4xl font-light">Welcome</h2>
              <p className="font-light mb-3">
                Discover a vibrant and collaborative workspace designed for
                innovation, productivity, and community. Business Bureau is not
                just a place to work; it's a dynamic ecosystem where ideas
                flourish, connections thrive, and success unfolds. Whether
                you're a freelancer, entrepreneur, or a growing team, we have
                the perfect space for you.
              </p>
              {readmore && (
                <p className="font-light mb-3">
                  Business Bureau transcends the conventional office, offering a
                  dynamic ecosystem for freelancers, ambitious entrepreneurs,
                  and growing teams. Our spaces go beyond desks, merging
                  innovation with comfort and celebrating collaborative efforts.
                  Committed to inspiring atmospheres, we empower your best work.
                  Elevate your experience, connect with like minds, and embark
                  on a seamless journey to success. In our vibrant workspace,
                  every corner exudes innovation, every interaction sparks
                  possibility, and each day brings growth opportunities. Join
                  us, where ideas flourish, connections thrive, and success
                  unfolds effortlessly.
                </p>
              )}
              <div className="card-actions justify-end">
                <button
                  className="btn hover:bg-white hover:text-black hover:border-none font-light"
                  onClick={handleReadMore}
                >
                  {readmore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <label className="swap !absolute bottom-9 left-2 md:bottom-32 md:left-10  text-white ">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggleMuted}
            checked={!isMuted}
          />

          {/* volume on icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
          </svg>

          {/* volume off icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
          </svg>
        </label>
      </div>
      <LazyLoadVideo
        src={
          "https://ik.imagekit.io/c1jhxlxiy/bb-video%20(3)%20(1)%20(1).mp4?updatedAt=1708417282380" ||
          mainVideo
        }
        isMuted={isMuted}
      />
    </div>
  );
};

export default About;
