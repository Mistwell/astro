/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans Variable", "sans-serif"],
				inter: ["Inter Variable", "sans-serif"],
			},
		},
	},
	plugins: [],
};
