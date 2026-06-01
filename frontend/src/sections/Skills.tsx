"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "FastAPI",
  "Next.js",
  "React",
  "MongoDB",
  "Docker",
  "LangChain",
  "Vector Databases",
  "Microservices",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      min-h-screen
      bg-black
      text-white
      px-6
      py-32
      relative
    "
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Skills
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Technologies &
            <span className="text-cyan-400"> Tools</span>
          </h2>

        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
              bg-white/5
              border
              border-cyan-500/20
              rounded-2xl
              p-8
              text-center
              backdrop-blur-xl
              hover:border-cyan-400
              hover:scale-105
              transition
              duration-300
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
            >

              <h3 className="text-xl font-semibold text-gray-200">
                {skill}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}