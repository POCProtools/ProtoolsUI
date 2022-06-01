import React, { useState, useEffect } from 'react';
import { GlobalStyles } from 'tss-react';
import { Grid, CardContent } from '@mui/material';
import CustomCard from '../../shared/card';
import { makeStyles } from 'tss-react/mui';
import Logo from 'components/shared/logo';
import DonutChartCustom from './donutChart';
//import { PieChart } from 'react-minimal-pie-chart';
import {
	processChartdata,
	TaskChartdata,
	IncidentChartdata,
} from 'utils/mockData';

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
			marginLeft: '22%',
			marginTop: '1%',
			//paddingLeft: '2%',
		},
		title: {
			position: 'absolute',
			top: '25%',
			left: '25%',
			marginLeft: 10,
			fontSize: 32,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		titleCard: {
			marginLeft: 10,
			fontSize: 20,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		TitleHeader: {
			//margin: 5,
			marginTop: 5,
			//marginBottom: 20,
			position: 'relative',
		},
		logo: {
			verticalAlign: 'middle',
		},
		gridItemProcessList: {
			textAlign: 'center',
		},
	};
});

const Home = () => {
	const { classes } = useStyles();
	const api = 'https://random-words-api.vercel.app/word';
	const [word, setWord] = useState('');
	useEffect(() => {
		async function fetchData() {
			let response = await fetch(api);
			response = await response.json();
			console.log(response);
			setWord(response[0].word);
			console.log(word);
		}
		fetchData();
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
				<div className={classes.TitleHeader}>
					<Logo className={classes.logo} />
					<span className={classes.title}>Tableau de bord</span>
				</div>

				<CustomCard className={classes.card}>
					<CardContent>
						<Grid
							container
							spacing={10}
							justifyContent='space-between'
							alignItems='baseline'
						>
							<Grid item xs={4} className={classes.gridItemProcessList}>
								<span className={classes.titleCard}>Processus déployés</span>
								<DonutChartCustom data={processChartdata} />
							</Grid>
							<Grid item xs={4} className={classes.gridItemProcessList}>
								<span className={classes.titleCard}>Tâches manuelles</span>
								<DonutChartCustom data={TaskChartdata} />
							</Grid>
							<Grid item xs={4} className={classes.gridItemProcessList}>
								<span className={classes.titleCard}>Incidents en cours</span>
								<DonutChartCustom data={IncidentChartdata} />
							</Grid>
						</Grid>
					</CardContent>
				</CustomCard>
			</Grid>
		</>
	);
};

export default Home;
