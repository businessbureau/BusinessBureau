import React, { useRef, useEffect } from "react";

const LazyLoadVideo = ({ src, isMuted }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the video when it comes into the viewport
          videoRef.current.load();
          observer.disconnect();
        }
      });
    }, options);

    // Start observing the video element
    observer.observe(videoRef.current);

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="hero-background-video__element -z-[1]"
        autoPlay
        muted={isMuted ? true : false}
        loop
        controls={false}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
};

export default LazyLoadVideo;
