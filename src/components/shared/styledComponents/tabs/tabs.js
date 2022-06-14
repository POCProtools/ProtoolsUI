import { styled } from '@mui/material/styles';
import { Tabs, Tab } from '@material-ui/core';

export const StyledTabs = styled(Tabs)(({ theme }) => ({
	borderBottom: null,
	'& .MuiTabs-selected': {
		backgroundColor: theme.palette.secondary.main,
	},
	'& .MuiTabs-indicator': {
		backgroundColor: theme.palette.secondary.main,
	},
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
	textTransform: 'none',
	minWidth: 0,
	[theme.breakpoints.up('sm')]: {
		minWidth: 0,
	},
	fontWeight: 'bold',
	marginRight: theme.spacing(1),
	color: theme.palette.primary.main,
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
	'&:hover': {
		color: theme.palette.primary.main,
		opacity: 0.9,
	},
	'&.Mui-selected': {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		opacity: 1,
	},
	'&.Mui-focusVisible': {
		backgroundColor: '#d1eaff',
	},
}));
