import { createMuiTheme } from '@material-ui/core';
import { shadows } from './shadows';

export const bigFontsTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#3c44b1',
		},
		grey: {
			300: '#fefefe',
			A100: '#f8f9ff',
		},
		secondary: {
			main: '#4191ff',
		},
		error: {
			main: '#f83245',
		},
		success: {
			main: '#1bc943',
		},
		info: {
			main: '#11c5db',
		},
		warning: {
			main: '#f4772e',
		},
		helpers: {
			primary: '#3c44b1',
			main: 'rgba(25, 46, 91, .035)',
		},
		contrastThreshold: 3,
		tonalOffset: 0.1,
	},
	shape: {
		borderRadius: '0.2rem',
	},
	overrides: {
		MuiTab: {
			root: {
				fontWeight: 'bold',
			},
		},
		MuiButton: {
			sizeSmall: {
				padding: '6px 20px',
				fontSize: 14,
			},
			outlinedSmall: {
				padding: '6px 20px',
				fontSize: 14,
			},
			textSmall: {
				padding: '6px 20px',
				fontSize: 14,
			},

			sizeMedium: {
				padding: '10px 22px',
				fontSize: 15,
			},
			outlined: {
				padding: '10px 22px',
				fontSize: 14,
			},
			text: {
				padding: '10px 22px',
				fontSize: 14,
			},

			sizeLarge: {
				padding: '14px 28px',
				fontSize: 14,
			},
			outlinedLarge: {
				padding: '14px 28px',
				fontSize: 14,
			},
			textLarge: {
				padding: '14px 28px',
				fontSize: 14,
			},

			root: {
				textTransform: 'none',
				fontWeight: 'normal',
				padding: '10px 22px',
				fontSize: 14,
			},
		},
		MuiTooltip: {
			tooltip: {
				backgroundColor: '#070919',
				padding: '8px 14px',
				fontSize: '13px',
			},
			arrow: {
				color: '#070919',
			},
		},
	},
	typography: {
		fontFamily: ['Heebo', 'sans-serif'].join(','),
		fontSize: 14,
	},
	shadows,
});
