import React from 'react';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
	return {
		table: {
			display: 'flex',
			height: 300,
			width: '700%',
		},
	};
});
export const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	const { classes } = useStyles();
	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			<Box className={classes.table}>{children}</Box>
		</Typography>
	);
};
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
export const tabPropIndex = (index) => {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
};
