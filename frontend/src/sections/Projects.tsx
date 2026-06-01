"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot",
    description:
      "Intelligent AI chatbot using NLP and LLM technologies.",
  },
  {
    title: "RAG Knowledge System",
    description:
      "Enterprise Retrieval-Augmented Generation platform with vector search.",
  },
  {
    title: "AI Portfolio Platform",
    description:
      "Microservice-based AI portfolio with scalable architecture.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
      min-h-screen
      bg-black
      text-white
      px-6
      py-32
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
            Projects
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Featured
            <span className="text-cyan-400"> Work</span>
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="
              bg-white/5
              border
              border-cyan-500/20
              rounded-3xl
              p-10
              backdrop-blur-xl
              hover:scale-105
              transition
              duration-300
              shadow-[0_0_60px_rgba(34,211,238,0.1)]
            "
            >

              <div
                className="
                h-52
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500/20
                to-blue-500/20
                mb-8
              "
              />

              <h3 className="text-3xl font-bold mb-6">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}