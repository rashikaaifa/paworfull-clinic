/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#054A29",
				secondary: "#F07167",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				baloo: ["Baloo 2", "cursive"],
			},
		},
	},
	plugins: [],
};
