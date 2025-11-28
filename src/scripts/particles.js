// src/scripts/particles.js
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../config/particlesConfig";

async function setupParticles() {
  await loadSlim(tsParticles);
  await tsParticles.load("tsparticles", particlesConfig);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupParticles);
} else {
  setupParticles();
}