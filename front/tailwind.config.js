module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

	darkMode: 'media', // or 'class'
	theme: {
		extend: {
			fontFamily: {
				atkinson: ['"Atkinson Hyperlegible"', 'Helvetica Neue']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
