"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-6
      py-32
      relative
    "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            About Me
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            mb-8
          "
          >
            Building Future
            <span className="text-cyan-400"> AI Systems</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I am an aspiring AI/ML Engineer passionate about
            Artificial Intelligence, scalable systems,
            Machine Learning, Deep Learning, and enterprise
            software architecture.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed">
            My goal is to create intelligent applications
            that combine modern AI technologies with
            real-world business solutions using scalable
            architectures and modern development practices.
          </p>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
          bg-white/5
          border
          border-cyan-500/20
          backdrop-blur-xl
          rounded-3xl
          p-10
          shadow-[0_0_60px_rgba(34,211,238,0.15)]
        "
        >

          <div className="grid grid-cols-2 gap-8">

            <div>
              <h3 className="text-5xl font-black text-cyan-400 mb-2">
                AI
              </h3>

              <p className="text-gray-400">
                Machine Learning & Deep Learning
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400 mb-2">
                Full
              </h3>

              <p className="text-gray-400">
                Microservice Architecture
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400 mb-2">
                RAG
              </h3>

              <p className="text-gray-400">
                LLM & Vector Databases
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400 mb-2">
                Cloud
              </h3>

              <p className="text-gray-400">
                Enterprise Ready Systems
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}