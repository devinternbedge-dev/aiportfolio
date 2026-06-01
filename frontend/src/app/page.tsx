import Navbar from "../components/Navbar";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Chatbot from "../components/Chatbot";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
      <Chatbot />

    </main>
  );
}