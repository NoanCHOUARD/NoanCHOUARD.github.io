import { text } from 'motion/react-client';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primaryellow: 'hsl(var(--ylw-primary))',
			secondaryellow: 'hsl(var(--ylw-secondary))',

			primaryblack: 'hsl(var(--blk-primary))',
			secondaryblack: 'hsl(var(--blk-secondary))',
			
			primaryblue: 'hsl(var(--blu-primary))',
			secondaryblue: 'hsl(var(--blu-secondary))',

			primaryred: 'hsl(var(--red-primary))',
			secondaryred: 'hsl(var(--red-secondary))',

			primarypink: 'hsl(var(--pnk-primary))',
			secondarypink: 'hsl(var(--pnk-secondary))',

			primaryorange: 'hsl(var(--org-primary))',
			secondaryorange: 'hsl(var(--org-secondary))',

			primarycyan: 'hsl(var(--cyn-primary))',
			secondarycyan: 'hsl(var(--cyn-secondary))',

			baseblack: 'hsl(var(--clr-black-base))',
			basewhite: 'hsl(var(--clr-white-base))',

		},
			extend: {
				fontFamily: {
					'Retro': "Retro-Gaming, sans-serif",
					'Rubik': "Rubik, sans-serif",
			},
		},
	plugins: [],
}

}




