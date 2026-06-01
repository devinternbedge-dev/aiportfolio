"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-6
      py-32
    "
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="
        max-w-4xl
        w-full
        bg-white/5
        border
        border-cyan-500/20
        rounded-3xl
        p-14
        backdrop-blur-xl
        shadow-[0_0_80px_rgba(34,211,238,0.12)]
      "
      >

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-10">
          Let's Build
          <span className="text-cyan-400"> Something Amazing</span>
        </h2>

        <div className="space-y-6 text-xl text-gray-300">

          <p>Email: kartik@example.com</p>

          <p>GitHub: github.com/kartik</p>

          <p>LinkedIn: linkedin.com/in/kartik</p>

        </div>

      </motion.div>

    </section>
  );
}