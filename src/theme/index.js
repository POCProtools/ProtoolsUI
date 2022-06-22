import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material/styles';
const PRIMARY = {
	mainText: '#555B6E',
	background: '#F9FAFC',
};
const SECONDARY = {
	secondGreen: '#89B0AE',
	pressedGrey: '#F8FAF8',
};
const borderWidth = 2;

// function pxToRem(value) {
// 	return `${value / 16}rem`;
// }

// function responsiveFontSizes({ sm, md, lg }) {
// 	return {
// 		// sm : small, md : medium, lg : large -- frame
// 		'@media (min-width:600px)': {
// 			fontSize: pxToRem(sm),
// 		},
// 		'@media (min-width:900px)': {
// 			fontSize: pxToRem(md),
// 		},
// 		'@media (min-width:1200px)': {
// 			fontSize: pxToRem(lg),
// 		},
// 	};
// }

const themeBase = createTheme({
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
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
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
const theme = responsiveFontSizes(themeBase);
export default theme;
