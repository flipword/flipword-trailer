/* eslint-env node */
module.exports = {
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#FF9100',
			positive: '#01da7c',
			base: '#EAEAEA',
			white: '#FFFFFF',
			whiteShadow: '#C1C1C1',
			black: '#000000',
			darkGrey: '#DCDCDC',
			lightGrey: '#F4F4F4',
			negative: '#FF0000',
			blue: '#7f70d0',
		}),
		borderColor: (theme) => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray.300', 'currentColor'),
			primary: '#FF9100',
			base: '#EAEAEA',
			white: '#FFFFFF',
			whiteShadow: '#C1C1C1',
			darkGrey: '#DCDCDC',
			lightGrey: '#F4F4F4',
			negative: '#FF0000',
			positive: '#01da7c',
			blue: '#7f70d0',
		}),
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		fontWeight: {
			normal: 400,
			bold: 900,
		},
		textColor: {
			black: '#1E1E1E',
			white: '#FFFFFF',
			negative: '#FF0000',
			blue: '#7f70d0',
		},
		extend: {
			fontFamily: {
				sans: ['QuicksandCustom'],
			},
			borderRadius: {
				'4xl': '4rem',
				'5xl': '5rem',
				'6xl': '8rem',
			},
			blur: {
				xs: '2px',
			},
			fontSize: {
				title: '5vw',
				subtitle: '1.75vw',
			},
			spacing: {
				110: '27rem',
			},
			screens: {
				xs: '500px',
				'4xl': '1600px',
			},
			margin: {
				'1/12': '8.33%',
			},
			padding: {
				'1/12': '8.33%',
			},
			rotate: {
				25: '25deg',
				'-25': '-25deg',
			},
		},
		rotate: {
			25: '25deg',
			'-25': '-25deg',
			45: '45deg',
			'-45': '-45deg',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
