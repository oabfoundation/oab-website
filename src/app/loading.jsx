"use client";

import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Outer Spinning Ring */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-orange-100 border-t-orange-500 rounded-full"
        />

        {/* Inner Pulsing Logo or Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
          }}
          className="absolute text-orange-600 font-bold text-xl"
        >
          OAB
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-gray-600 font-medium tracking-widest uppercase text-xs"
      >
        Please Wait...
      </motion.p>

      {/* Progress Bar Style (Optional) */}
      <div className="mt-4 w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full bg-orange-500"
        />
      </div>
    </div>
  );
};

export default Loading;
