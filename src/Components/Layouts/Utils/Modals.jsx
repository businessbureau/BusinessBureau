import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] overflow-y-auto bg-black/60 backdrop-blur-sm">
          <div className="flex min-h-screen items-start justify-center p-4 sm:p-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] text-left shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-6 py-10 md:p-16 lg:p-20 relative">
                <button
                  className="absolute right-6 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all z-20"
                  onClick={onRequestClose}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="w-full">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
