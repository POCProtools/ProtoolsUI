import React from 'react';

import Display from './bpmnDisplay';
import { makeStyles } from 'tss-react/mui';
import { GlobalStyles } from 'tss-react';
import { Grid } from '@mui/material';
import CustomCard from 'components/shared/card';
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
			height: '80%',
			marginLeft: '25%',
			marginTop: '10%',
		},
		titleCard: {
			position: 'absolute',
			top: '25%',
			left: '25%',
			marginLeft: 10,
			fontSize: 24,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		display: {
			width: '50%',
		},
	};
});

const Design = () => {
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
			<Grid justifyContent='center'>
				<CustomCard className={classes.card}>
					<span className={classes.titleCard}>BPMN Modeler: </span>
					<Display className={classes.display} />
				</CustomCard>
			</Grid>
		</>
	);
};
export default Design;
