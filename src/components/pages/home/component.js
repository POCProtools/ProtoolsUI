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
import Loader from '../../shared/loader/loader';
//import theme from 'theme';

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
	const [pieProcessdata, setPieProcessdata] = useState({});
	const [pieTaskdata, setPieTaskdata] = useState({});
	const [loading, setLoading] = useState(true);
	const [dataProcess, setDataProcess] = useState([]);
	const [dataTask, setDataTask] = useState([]);
	useEffect(() => {
		if (dataTask.length === 0) {
			const result = fetchTaskData();
			setDataTask(result[0]);
			setPieTaskdata(result[1]);
		}
		if (dataProcess.length === 0) {
			const result = fetchProcessData();
			setDataProcess(result[0]);
			setPieProcessdata(result[1]);
			console.log('loading: ', loading);
		}
		setTimeout(() => {
			setLoading(false);
		}, 400);
		console.log('dataProcess : ', dataProcess);
		console.log('dataTask : ', dataTask);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (loading) {
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
					<Loader />
				</Grid>
			</>
		);
	} else {
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
					<ProcessOverview
						pieProcessdata={pieProcessdata}
						pieTaskdata={pieTaskdata}
					/>
					<TabBarDashboard dataTask={dataTask} dataProcess={dataProcess} />
				</Grid>
			</>
		);
	}
};

export default Home;
