import { text } from 'motion/react-client';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {

			blue: 'hsl(var(--clr-blue))',
			red: 'hsl(var(--clr-red))',
			green: 'hsl(var(--clr-green))',
			yellow: 'hsl(var(--clr-yellow))',
			orange: 'hsl(var(--clr-orange))',
			purple: 'hsl(var(--clr-purple))',
			pink: 'hsl(var(--clr-pink))',
			black: 'hsl(var(--clr-black))',
			white: 'hsl(var(--clr-white))',
			gray: 'hsl(var(--clr-gray))',

		},
			extend: {
				fontFamily: {
					'Retro': "Retro-Gaming, sans-serif",
					'Montserrat': "Montserrat, sans-serif",
			},
			backgroundImage: {
	
		},
	plugins: [],
	extend: {
		keyframes: {
			translation: {

				},


			}
		},
	}

}

}

