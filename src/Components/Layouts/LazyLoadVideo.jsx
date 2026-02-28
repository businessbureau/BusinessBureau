import React, { useRef, useEffect } from "react";

const LazyLoadVideo = ({ src, isMuted, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Reduced threshold for more proactive loading
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the video when it comes into the viewport
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.load();
            observer.disconnect();
          }
        }
      });
    }, options);

    // Start observing the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className || "w-full h-full object-cover"}
      autoPlay
      muted
      defaultMuted
      loop
      playsInline // Added for better mobile support
      controls={false}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default LazyLoadVideo;
