import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard react-router scroll restoration
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Lenis scroll restoration
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
