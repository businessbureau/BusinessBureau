import React, { useState, useEffect, useRef } from "react";

const SectionWrapper = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div ref={sectionRef} className="min-h-[200px]">
      {isVisible ? children : <div className="h-[200px]" />}
    </div>
  );
};

export default SectionWrapper;
