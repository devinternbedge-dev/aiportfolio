"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/30
      border-b
      border-cyan-500/20
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-5
        flex
        justify-between
        items-center
      "
      >

        <h1
          className="
          text-3xl
          md:text-4xl
          font-black
          tracking-tight
          text-cyan-400
          drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]
        "
        >
          Kartik AI
        </h1>

        <div
          className="
          hidden
          md:flex
          gap-10
          text-gray-300
          text-lg
          font-medium
        "
        >

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            About
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            Projects
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            Contact
          </a>

        </div>

      </div>
    </motion.nav>
  );
}