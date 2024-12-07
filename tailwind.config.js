/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				flagfr: "url('./assets/images/french_flag.jpg')",
				flagen: "url('./assets/images/britain_flag.jpg')",
				main: "url('./assets/images/zodiac_background_desktop.png')",
				mainmobile: "url('./assets/images/zodiac_background_mobile.png')",
			},
			colors: {
				darkcolor: "#070F18",
				lightcolor: "#C6C6CF",
				acccolor: "#2DD1D1",
			},
			fontFamily: {
				maintitlefont: ["Montserrat", "sans-serif"],
				titlefont: ["Quattrocento", "sans-serif"],
				textfont: ["Work", "sans-serif"],
			},
			animation: {
				"spin-slow": "spin 80s linear infinite",
			},
		},
	},
	plugins: [],
};
