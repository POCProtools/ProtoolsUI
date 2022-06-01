import React from 'react';
import { GlobalStyles } from 'tss-react';
import { Grid } from '@mui/material';

import { makeStyles } from 'tss-react/mui';
import Logo from 'components/shared/logo';
import ProcessOverview from './processOverview';
import TabBarDashboard from './tabBar';

const useStyles = makeStyles()((theme) => {
	return {
		root: {
			body: {
				backgroundColor: theme.palette.background.default,
			},
		},
		title: {
			marginLeft: 10,
			fontSize: 30,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		TitleHeader: {
			//margin: 5,
			marginTop: 5,
			//marginBottom: 20,
			position: 'absolute',
			top: '5%',
			left: '22%',
		},
		logo: {
			verticalAlign: 'middle',
		},
		gridItemProcessList: {
			textAlign: 'center',
		},
		card: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '75%',
			marginLeft: '22%',
			marginTop: '2%',
		},
		cardTab: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '75%',
			marginLeft: '22%',
			marginTop: '1%',
		},
		cardContent: {
			padding: 0,
			'&:last-child': {
				paddingBottom: 0,
			},
		},
	};
});

const Home = () => {
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
			<Grid justifyContent='center'>
				<div className={classes.TitleHeader}>
					<Logo className={classes.logo} />
					<span className={classes.title}>Tableau de bord</span>
				</div>
				<ProcessOverview />
				<TabBarDashboard />
			</Grid>
		</>
	);
};

export default Home;
