tailwind.config = {
	theme: {
		extend: {
			colors: {
				main_text_color: '#2D2D2D',
				fotter_color: "#181818"
			},
			fontFamily: {
				'anton': ['Anton', 'sans-serif'] 
			},
		}
	},
	screens: {
		'sm': '640px',
		// => @media (min-width: 640px) { ... }

		'md': '768px',
		// => @media (min-width: 768px) { ... }

		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }

		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }

		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }
	},
}