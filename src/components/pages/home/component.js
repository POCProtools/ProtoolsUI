import React, { useEffect, useState } from 'react';
import { GlobalStyles } from 'tss-react';
import { Grid, Box } from '@mui/material';

import { makeStyles } from 'tss-react/mui';
import Logo from 'components/shared/logo/logo';
import ProcessOverview from './processOverview';
import TabBarDashboard from './tabBar';
import {
	fetchProcessData,
	fetchTaskData,
} from 'utils/dataHomepage/fetchDataHomepage';

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
			position: 'absolute',
			top: '2%',
			left: '20%',
			display: 'flex',
			alignItems: 'center',
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
	const [dataProcess, setDataProcess] = useState([]);
	const [dataTask, setDataTask] = useState([]);
	useEffect(() => {
		if (dataTask.length === 0) {
			setDataTask(fetchTaskData());
		}
		if (dataProcess.length === 0) {
			setDataProcess(fetchProcessData());
		}

		console.log('dataProcess : ', dataProcess);
		console.log('dataTask : ', dataTask);
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
				<Box className={classes.TitleHeader}>
					<Logo className={classes.logo} />
					<span className={classes.title}>Tableau de bord</span>
				</Box>
				<ProcessOverview />
				<TabBarDashboard dataTask={dataTask} dataProcess={dataProcess} />
			</Grid>
		</>
	);
};

export default Home;
