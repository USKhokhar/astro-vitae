/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': 'hsl(189, 87%, 97%)',
				'background': 'hsl(0, 0%, 0%)',
				'primary': 'hsl(216, 82%, 27%)',
				'secondary': 'hsl(246, 82%, 13%)',
				'accent': 'hsl(246, 82%, 53%)',
			}
		},
	},
	plugins: [],
}
