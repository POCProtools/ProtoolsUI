import { styled } from '@mui/material/styles';
import { Tabs, Tab } from '@material-ui/core';

export const StyledTabs = styled(Tabs)(({ theme }) => ({
	borderBottom: null,
	'& .MuiTabs-selected': {
		backgroundColor: 'secondary',
	},
	'& .MuiTabs-indicator': {
		backgroundColor: theme.palette.secondary.main,
	},
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
	fontWeight: 'bold',
	opacity: 0.5,
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&.MuiButtonBase-root': {
		fontSize: '0.9rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.5rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '0.8rem',
		},
	},
	'&.MuiTab-root': {
		fontWeight: '600',
		minWidth: '100px',
	},
	'&:hover': {
		color: 'primary',
		opacity: 0.9,
	},
	'&.Mui-selected': {
		color: 'primary',
		fontWeight: 'bold',
		opacity: 1,
	},
	'&.Mui-focusVisible': {
		backgroundColor: theme.white,
	},
}));
