import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const SpeedDial = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/917907556090?text=Hello%2C%20I%20have%20a%20question",
      "_blank",
    );
  };

  return (
    <>
      <div data-dial-init="" className="fixed end-6 bottom-6 group z-[99999]">
        <motion.button
          type="button"
          onClick={handleClick}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-controls="speed-dial-menu-default"
          aria-expanded="false"
          className="flex items-center justify-center text-white bg-emerald-500 rounded-full w-14 h-14 shadow-lg hover:shadow-xl hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 focus:outline-none dark:focus:ring-emerald-800 cursor-pointer"
        >
          <FaWhatsapp className="text-3xl" />
          <span className="sr-only">Open actions menu</span>
        </motion.button>
      </div>
    </>
  );
};

export default SpeedDial;
