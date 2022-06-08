import React from 'react';

//import Display from './bpmnDisplay';
import { makeStyles } from 'tss-react/mui';
import { GlobalStyles } from 'tss-react';
import { Grid, CardContent } from '@mui/material';
import SelectProcess from './selectProcess';
import CustomCard from 'components/shared/stylesComponents/card';

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
			width: '30%',
			marginLeft: '45%',
			marginTop: '10%',
			padding: 10,
		},

		titleCard: {
			fontSize: 20,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
	};
});

const ProcessViewer = () => {
	// TODO : add file selector
	const { classes } = useStyles();
	return (
		<>
			<GlobalStyles
				styles={{
					body: {
						backgroundColor: '#F9FAFC',
					},
				}}
			/>
			<Grid container justify='center'>
				<CustomCard className={classes.card}>
					<CardContent>
						<span className={classes.titleCard}>
							Selectionner un protocole:
						</span>
						<SelectProcess sx={{ margin: 10 }} />
					</CardContent>
				</CustomCard>
			</Grid>
		</>
	);
};
export default ProcessViewer;
