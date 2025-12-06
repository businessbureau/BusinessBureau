import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({
  src,
  poster,
  isMuted = true,
  controls = false,
  loop = true,
  className = "",
  preload = "metadata",
  playsInline = true,
}) => {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // set src and load when visible
          try {
            if (videoRef.current) {
              // set video src and load
              videoRef.current.src = src;
              videoRef.current.load();
              setLoaded(true);
            }
          } catch (e) {
            // fail silently
          }
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted={isMuted}
      loop={loop}
      controls={controls}
      poster={poster}
      preload={preload}
      playsInline={playsInline}
    >
      {loaded ? <source src={src} type="video/mp4" /> : null}
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
