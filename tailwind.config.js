tailwind.config = {
	theme: {
		extend: {
			colors: {
				main_text_color: '#2D2D2D',
				fotter_color: "#181818",
				button_color: "#595959",
				button_color_hover: "#3D3D3D",
				nav_color_hover: "#CE93FE"
			},
			fontFamily: {
				'anton': ['Anton', 'sans-serif'] 
			},
		}
	},
	screens: {
		'sm': '640px',
		// => @media (min-width: 640px) { ... }

		'md': '868px',
		// => @media (min-width: 768px) { ... }

		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }

		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }

		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }
	},
}