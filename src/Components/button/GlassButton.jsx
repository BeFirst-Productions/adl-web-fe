"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LiquidGlass() {
  return (
    <div className="relative flex items-center justify-center min-h-screen  overflow-hidden">
      {/* Background text */}
      

      {/* Glass button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          relative px-8 py-3 rounded-2xl overflow-hidden font-semibold
          text-white tracking-wide
          border border-white/30
          bg-white/10 backdrop-blur-lg
          shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_30px_rgba(0,0,0,0.1)]
          transition-all duration-300 ease-out
          hover:bg-white/20 hover:border-white/40
          focus:outline-none focus:ring-2 focus:ring-white/40
        "
      >
        {/* Shine overlay */}
        <span className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-30 rounded-2xl pointer-events-none" />
        <span className="relative z-10">Click Me</span>
      </motion.button>
    </div>
  );
}
