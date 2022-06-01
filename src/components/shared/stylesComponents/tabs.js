import { styled } from '@mui/material/styles';
import { Tabs, Tab } from '@material-ui/core';

export const StyledTabs = styled(Tabs)(({ theme }) => ({
	borderBottom: '1px solid #e8e8e8',
	'& .MuiTabs-indicator': {
		backgroundColor: '#1890ff',
	},
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
	root: {
		'&:hover': {
			backgroundColor: theme.palette.secondary.pressed,
			color: theme.palette.primary.main,
		},
	},
	selected: {
		backgroundColor: theme.palette.secondary.pressed,
		color: theme.palette.primary.main,
	},
}));
