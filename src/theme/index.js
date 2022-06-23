/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes, pxToRem } from './typography';
const PRIMARY = {
	mainText: '#555B6E',
	background: '#F9FAFC',
};
const SECONDARY = {
	secondGreen: '#89B0AE',
	pressedGrey: '#F8FAF8',
};
const borderWidth = 2;

const theme = createTheme({
	//TODO : Fix this
	palette: {
		common: { black: '#343a40', white: '#fff' },
		primary: { main: PRIMARY.mainText },
		secondary: { main: SECONDARY.secondGreen, pressed: SECONDARY.pressedGrey },
		background: {
			default: PRIMARY.background,
		},
		border: {
			borderColor: SECONDARY.secondGreen,
			borderWidth: borderWidth,
		},

		contrastThreshold: 3,

		tonalOffset: 0.2,
	},
	typography: {
		h1: {
			fontWeight: 700,
			lineHeight: 80 / 64,
			fontSize: pxToRem(40),
			...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
		},
		h2: {
			fontWeight: 700,
			lineHeight: 64 / 48,
			fontSize: pxToRem(32),
			...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
		},
		h3: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(24),
			...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
		},
		h4: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(20),
			...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
		},
		h5: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(18),
			...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
		},
		h6: {
			fontWeight: 700,
			lineHeight: 28 / 18,
			fontSize: pxToRem(17),
			...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
		},
		subtitle1: {
			fontWeight: 600,
			lineHeight: 1.5,
			fontSize: pxToRem(16),
		},
		subtitle2: {
			fontWeight: 600,
			lineHeight: 22 / 14,
			fontSize: pxToRem(14),
		},
		body1: {
			lineHeight: 1.5,
			fontSize: pxToRem(16),
		},
		body2: {
			lineHeight: 22 / 14,
			fontSize: pxToRem(14),
		},
		caption: {
			lineHeight: 1.5,
			fontSize: pxToRem(12),
		},
		overline: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(12),
			letterSpacing: 1.1,
			textTransform: 'uppercase',
		},
		button: {
			fontWeight: 700,
			lineHeight: 24 / 14,
			fontSize: pxToRem(14),
			textTransform: 'capitalize',
		},
	},
	overrides: {
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 20,
					boxShadow: 3,
					position: 'relative',
					zIndex: 0,
				},
			},
		},
	},
	components: {
		MUIDataTable: {
			styleOverrides: {
				paper: {
					boxShadow: 'none',
				},
			},
		},
		MUIDataTableHeadCell: {
			styleOverrides: {
				sortAction: {
					'& path': {
						fontSize: '20px',
					},
				},
				root: {
					fontSize: '20px',
				},
			},
		},
		MUIDataTableBodyCell: {
			styleOverrides: {
				root: {
					backgroundColor: SECONDARY.pressedGrey,
				},
			},
		},
	},
});
export default theme;
