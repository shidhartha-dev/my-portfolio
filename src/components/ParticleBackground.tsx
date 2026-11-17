"use client";

import { Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesConfig: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#10b981",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.05, max: 0.15 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#10b981",
      opacity: 0.05,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.1,
        },
      },
    },
  },
  detectRetina: true,
};

export default function ParticleBackground() {
  return (
    <div className="particle-bg">
      <Particles
        id="tsparticles"
        options={particlesConfig}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
