import React, { useState, useCallback, useEffect } from 'react';
import { CardContent, Typography } from '@mui/material';
import { StyledTabs, StyledTab } from 'components/shared/stylesComponents/tabs';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/stylesComponents/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel';
import EnhancedTable from './tableGrid';
import theme from 'theme';
import { data, columns, dataManu, columnsManu } from 'utils/mockData';
import axios from 'axios';

const headers = {
	'Content-Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
	'Access-Control-Allow-Headers': '*',
};
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
		},
		cardTab: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'left',
			width: '75%',
			marginLeft: '22%',
			marginTop: '0.5%',
		},
		cardContent: {
			padding: 0,
			'&:last-child': {
				paddingBottom: 0,
			},
		},
		cardContentTable: {
			padding: 20,
			'&:last-child': {
				paddingBottom: 20,
				paddingTop: 3,
			},
		},
		table: {
			width: '180%',
		},
	};
});
const TabBarDashboard = () => {
	const { classes } = useStyles();
	const [value, setValue] = useState(0);
	const [dataUrl, setDataUrl] = useState({});
	const urlEndpoint = 'processInstances/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const fetchDiagram = useCallback(() => {
		console.log(apiUrl);

		axios
			.get(apiUrl, {
				mode: 'cors',
				headers: headers,
			})
			.then((r) => {
				console.log(r);
				setDataUrl(r.data);
				console.log(dataUrl);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [apiUrl, dataUrl]);
	useEffect(() => {
		fetchDiagram();
	}, [fetchDiagram]);
	return (
		<>
			<CustomCard className={classes.card}>
				<CardContent className={classes.cardContent}>
					<StyledTabs
						value={value}
						textColor={theme.palette.primary.main}
						indicatorColor={theme.palette.secondary.main}
						onChange={handleChange}
					>
						<StyledTab
							label='Processus'
							{...tabPropIndex(0)}
							className={classes.MuiTab}
						/>

						<StyledTab
							label='Tâches manuelles'
							{...tabPropIndex(1)}
							className={classes.MuiTab}
						/>
						<StyledTab
							label='Incidents'
							{...tabPropIndex(2)}
							className={classes.MuiTab}
						/>
					</StyledTabs>
				</CardContent>
			</CustomCard>

			<CustomCard className={classes.cardTab}>
				<CardContent className={classes.cardContentTable}>
					<TabPanel value={value} index={0}>
						<EnhancedTable
							className={classes.table}
							data={data}
							columns={columns}
						/>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<EnhancedTable
							className={classes.table}
							data={dataManu}
							columns={columnsManu}
						/>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Typography>`Temporary data : `</Typography>
					</TabPanel>
				</CardContent>
			</CustomCard>
		</>
	);
};

export default TabBarDashboard;
