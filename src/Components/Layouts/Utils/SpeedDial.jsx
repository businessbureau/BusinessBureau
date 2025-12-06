import React from "react";

const SpeedDial = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/917907556090?text=Hello%2C%20I%20have%20a%20question",
      "_blank",
    );
  };

  return (
    <div>
      <div data-dial-init="" className="fixed end-6 bottom-6 group z-[99999]">
        <button
          type="button"
          onClick={handleClick}
          aria-controls="speed-dial-menu-default"
          aria-expanded="false"
          className="flex items-center justify-center text-white bg-emerald-500 rounded-full w-14 h-14 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 focus:outline-none dark:focus:ring-emerald-800"
        >
          <i className="fa-brands fa-whatsapp text-3xl"></i>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>
    </div>
  );
};

export default SpeedDial;
