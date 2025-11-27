// src/scripts/particles.js
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../config/particlesConfig";

// Función para configurar e inicializar las partículas
async function setupParticles() {
  // Espera a que el motor 'slim' se cargue
  await loadSlim(tsParticles);
  
  // Carga la configuración en el div con id 'tsparticles'
  await tsParticles.load("tsparticles", particlesConfig);
}

// Nos aseguramos de que el DOM esté completamente cargado antes de ejecutar
// el script para evitar errores.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupParticles);
} else {
  setupParticles();
}
