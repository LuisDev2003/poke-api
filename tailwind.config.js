/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// Colors of types pokemons
			backgroundColor: {
				"bug": "#A7B723",
				"dark": "#75674C",
				"dragon": "#7037FF",
				"electric": "#F8D030",
				"fairy": "#FFD8D8",
				"fighting": "#C03028",
				"fire": "#F08030",
				"flying": "#A890F0",
				"ghost": "#705898",
				"grass": "#7EFC00",
				"ground": "#E0C068",
				"ice": "#98D8D8",
				"normal": "#C6A562",
				"poison": "#A040A0",
				"psychic": "#F85888",
				"rock": "#B8A038",
				"steel": "#B8B8D0",
				"water": "#6890F0"
			}
		}
	},
	plugins: []
}
