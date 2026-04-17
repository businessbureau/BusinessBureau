/**
 * Cloudinary image optimization utility.
 * Generates an optimized URL with automatic format and quality,
 * and allows for dynamic width settings.
 */
export const getOptimizedImageUrl = (url, width = 800) => {
  if (!url) return "";
  if (!url.includes("cloudinary.com")) return url;

  // Ensure format and quality are best-in-class
  let optimizedUrl = url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
  
  // Clean up any double transformations if they exist
  optimizedUrl = optimizedUrl.replace(/f_auto,q_auto\/.*f_auto,q_auto/, "f_auto,q_auto");
  
  return optimizedUrl;
};

/**
 * Common responsive breakpoints for images.
 */
export const IMAGE_WIDTHS = {
  MOBILE: 400,
  TABLET: 800,
  DESKTOP: 1400,
  THUMBNAIL: 200,
};
