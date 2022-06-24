import React from 'react';
import { Grid, CardContent, Typography } from '@mui/material';
import CustomCard from '../../shared/styledComponents/card/card';
import { makeStyles } from 'tss-react/mui';
import { IncidentChartdata } from 'utils/mockData';
import DoughnutChart from './donutChart';

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
			width: '75%',
			marginLeft: '19%',
			marginTop: '4%',
			[theme.breakpoints.down('md')]: {
				width: '80%',
				marginLeft: '14%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
			},
		},
		titleCard: {
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
	};
});

const ProcessOverview = (props) => {
	const pieProcessdata = props.pieProcessdata;
	const pieTaskdata = props.pieTaskdata;
	const { classes } = useStyles();
	return (
		<CustomCard className={classes.card}>
			<CardContent>
				<Grid
					container
					spacing={10}
					justifyContent='space-between'
					alignItems='baseline'
				>
					<Grid
						item
						container
						xs={4}
						sx={{
							flexDirection: 'column',
							textAlign: 'center',
							alignContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography variant='body1' className={classes.titleCard}>
							Processus
						</Typography>
						<DoughnutChart data={pieProcessdata} />
					</Grid>
					<Grid item xs={4} className={classes.gridItemProcessList}>
						<Typography variant='body1' className={classes.titleCard}>
							Tâches manuelles
						</Typography>
						<DoughnutChart data={pieTaskdata} />
					</Grid>
					<Grid item xs={4} className={classes.gridItemProcessList}>
						<Typography variant='body1' className={classes.titleCard}>
							Incidents en cours
						</Typography>
						<DoughnutChart data={IncidentChartdata} />
					</Grid>
				</Grid>
			</CardContent>
		</CustomCard>
	);
};

export default ProcessOverview;
