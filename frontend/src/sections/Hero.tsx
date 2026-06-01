"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      pt-32
      bg-black
      text-white
      flex
      items-center
      justify-center
      relative
      overflow-hidden
    "
    >
      {/* Animated Background Glow */}

      <div
        className="
        absolute
        w-[600px]
        h-[600px]
        bg-cyan-500/20
        rounded-full
        blur-3xl
        top-10
        left-10
        animate-pulse
      "
      />

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-blue-500/20
        rounded-full
        blur-3xl
        bottom-0
        right-0
        animate-pulse
      "
      />

      {/* Grid Effect */}

      <div
        className="
        absolute
        inset-0
        opacity-10
        bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
      />

      {/* Content */}

      <div className="text-center z-10 px-6">
         <div
         className="
         w-40
         h-40
         mx-auto
         mb-10
         rounded-full
       bg-cyan-500/20
         blur-2xl
         floating
         "
         />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          text-cyan-400
          text-xl
          mb-6
          tracking-[0.3em]
          uppercase
        "
        >
          AI / ML Engineer
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-7xl
          sm:text-8xl
          md:text-[10rem]
          font-black
          leading-none
          tracking-tight
          mb-8
        "
        >
          Kartik
          <span
            className="
            text-cyan-400
            drop-shadow-[0_0_40px_rgba(34,211,238,0.8)]
          "
          >
            {" "}
            Phopase
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="
          max-w-3xl
          mx-auto
          text-gray-400
          text-lg
          md:text-2xl
          leading-relaxed
        "
        >
          Building intelligent AI systems, scalable machine
          learning solutions, and futuristic digital experiences
          using Artificial Intelligence, modern architectures,
          and enterprise technologies.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="
          mt-14
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-6
        "
        >

          <button
            className="
            px-10
            py-5
            bg-cyan-500
            rounded-2xl
            text-black
            font-bold
            text-lg
            hover:scale-105
            transition
            duration-300
            shadow-[0_0_40px_rgba(34,211,238,0.6)]
          "
          >
            View Projects
          </button>

          <button
            className="
            px-10
            py-5
            border
            border-cyan-500
            rounded-2xl
            text-cyan-400
            font-semibold
            text-lg
            hover:bg-cyan-500/10
            hover:scale-105
            transition
            duration-300
          "
          >
            Contact Me
          </button>

        </motion.div>

      </div>
    </section>
  );
}