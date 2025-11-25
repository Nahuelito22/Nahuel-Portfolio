/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'chess-dark': '#0a0a12', // Fondo casi negro
				'chess-board': '#1a1a24', // Color de casillas oscuras
				'ai-neon': '#00f3ff',     // Cian eléctrico para IA
				'chess-accent': '#a8a8b8', // Gris pizarra para textos
			},
			fontFamily: {
				mono: ['Fira Code', 'monospace'], // Para títulos tipo código
				sans: ['Inter', 'sans-serif'],    // Para lectura
			},
		},
	},
	plugins: [],
}