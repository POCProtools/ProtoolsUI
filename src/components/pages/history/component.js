import React, { useEffect, useState } from 'react';
import { GlobalStyles } from 'tss-react';
import { Grid, Box, Typography } from '@mui/material';

import { makeStyles } from 'tss-react/mui';
import Logo from 'components/shared/logo/logo';
import SideBar from 'components/shared/sidepanel/sidepanel';
import TabBarHistory from './tabBar';
import { fetchTaskDataHistory } from 'utils/dataHistory/fetchDataHistory';

const useStyles = makeStyles()((theme) => {
	return {
		root: {
			body: {
				backgroundColor: theme.palette.background.default,
			},
		},
		title: {
			marginLeft: 10,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		TitleHeader: {
			position: 'absolute',
			top: '3%',
			left: '15%',
			display: 'flex',
			alignItems: 'center',
		},
		logo: {
			verticalAlign: 'middle',
		},
		gridItemProcessList: {
			textAlign: 'center',
		},
	};
});

const History = () => {
	const { classes } = useStyles();
	//const [loading, setLoading] = useState(true);
	//const [dataProcess, setDataProcess] = useState([]);
	const [dataTask, setDataTask] = useState([]);

	// Retrieving all data during the component's mounting -> //TODO : Remove loading screen once linked to Keyloack
	useEffect(() => {
		if (dataTask.length === 0) {
			const result = fetchTaskDataHistory();
			setDataTask(result[0]);
		}
		// if (dataProcess.length === 0) {
		// 	const result = fetchProcessDataHistory();
		// 	setDataProcess(result[0]);
		// 	console.log('loading: ', loading);
		// }

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			<SideBar page='home' />
			<Grid justifyContent='center'>
				<Box className={classes.TitleHeader}>
					<Logo className={classes.logo} />
					<Typography variant='h3' className={classes.title}>
						Historique
					</Typography>
				</Box>
				<TabBarHistory dataTask={dataTask} />
			</Grid>
		</>
	);
};

export default History;
