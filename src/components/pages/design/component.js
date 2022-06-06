import React from 'react';

import Display from './bpmnDisplay';
import { makeStyles } from 'tss-react/mui';
import { GlobalStyles } from 'tss-react';
// import { Grid } from '@mui/material'
import { useEffect } from 'react';

const useStyles = makeStyles()((theme) => {
	return {
		root: {
			body: {
				backgroundColor: theme.palette.background.default,
			},
		},
		card: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '70%',
			marginLeft: '25%',
			marginTop: '10%',
		},
		display: {
			position: 'absolute',
			top: '25%',
			left: '25%',
		},
		menu: {
			position: 'absolute',
			left: '50%',
			top: '10%',
		},
	};
});

const Design = () => {
	// TODO : add file selector
	const { classes } = useStyles();
	useEffect(() => {
		console.log('Loading design page');
	}, []);
	return (
		<>
			<GlobalStyles
				styles={{
					body: {
						backgroundColor: '#F9FAFC',
					},
				}}
			/>
			<Display className={classes.display} />
		</>
	);
};
export default Design;
