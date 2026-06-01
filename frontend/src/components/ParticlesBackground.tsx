"use client";

import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";

import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#22d3ee",
          },

          links: {
            color: "#22d3ee",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
            },
            value: 80,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}