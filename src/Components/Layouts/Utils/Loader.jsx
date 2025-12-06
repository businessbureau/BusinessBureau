import React from "react";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50">
      <span className="loading text-primary loading-ring animate-spin border-t-4 border-b-4 border-current h-32 w-32"></span>
    </div>
  );
};

export default Loader;
