/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta del rediseño (dirección G1 del lienzo de exploración).
				ink: '#E8EAEE',        // Texto principal
				soft: '#C9CCD3',       // Texto de lectura dentro de tarjetas
				muted: '#A3A9B5',      // Texto secundario
				faint: '#8A919C',      // Fechas, etiquetas
				line: '#20242D',       // Hairlines
				'line-strong': '#2A3140',
				surface: '#12151C',    // Fondo de tarjetas
				accent: '#5CC8D6',     // Cian apagado: el único acento

				'chess-dark': '#0B0D12', // Fondo del sitio
			},
			fontFamily: {
				serif: ['"Source Serif 4"', 'Georgia', 'serif'], // Títulos
				sans: ['Onest', 'system-ui', 'sans-serif'],      // Lectura e interfaz
			},
		},
	},
	plugins: [],
}
