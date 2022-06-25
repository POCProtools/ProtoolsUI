import React from 'react';
import { Grid, CardContent, Typography, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
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
				width: '85%',
				marginLeft: '11.5%',
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
	const small = useMediaQuery((theme) => theme.breakpoints.down('sm'));
	return (
		<CustomCard className={classes.card}>
			<CardContent>
				<Stack
					direction='row'
					alignItems='center'
					spacing={{ xs: 5, sm: 3, md: 4, lg: 8, xl: 10 }}
				>
					<Grid
						item
						container
						xs={3}
						sx={{
							flexDirection: 'column',
							textAlign: 'center',
							alignContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography
							variant={small ? 'body2' : 'body1'}
							className={classes.titleCard}
						>
							Processus
						</Typography>
						<DoughnutChart data={pieProcessdata} />
					</Grid>
					<Grid
						item
						xs={4}
						sx={{
							flexDirection: 'column',
							textAlign: 'center',
							alignContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography
							variant={small ? 'body2' : 'body1'}
							className={classes.titleCard}
						>
							Tâches
						</Typography>
						<DoughnutChart data={pieTaskdata} />
					</Grid>
					<Grid
						item
						xs={4}
						sx={{
							flexDirection: 'column',
							textAlign: 'center',
							alignContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography
							variant={small ? 'body2' : 'body1'}
							className={classes.titleCard}
						>
							Incidents
						</Typography>
						<DoughnutChart data={IncidentChartdata} />
					</Grid>
				</Stack>
			</CardContent>
		</CustomCard>
	);
};

export default ProcessOverview;
