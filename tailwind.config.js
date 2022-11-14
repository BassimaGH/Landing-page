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
			screens: {
				'md': '903px',
			},
		}
	},
	screens: {
		'sm': '640px',
		// => @media (min-width: 640px) { ... }
	}
}