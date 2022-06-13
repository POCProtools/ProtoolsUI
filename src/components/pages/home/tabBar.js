import React, { useState, useCallback, useEffect } from 'react';
import { CardContent } from '@mui/material';
import { StyledTabs, StyledTab } from 'components/shared/stylesComponents/tabs';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/stylesComponents/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import EnhancedTable from './tableGrid';
import theme from 'theme';
import { data, columns, dataManu, columnsManu } from 'utils/mockData';
import { fetcherGet } from '../../../core/fetchData/fetchData';

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
	const [dataUrl, setDataUrl] = useState([]);
	const urlEndpoint = 'processInstances/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const [processLoading, setProcessLoading] = useState(true);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const fetchProcessData = useCallback(() => {
		if (dataUrl.length === 0) {
			fetcherGet(apiUrl)
				.then((r) => {
					const datatmp = r.data.processes;
					console.log(r.data);
					for (let i = 0; i < datatmp.length; i++) {
						setDataUrl(
							dataUrl.push({
								id: datatmp[i].id,
								state: true,
								name: datatmp[i].processKey,
								date: datatmp[i].startTime,
								action: datatmp[i].id,
							})
						);
					}
					console.log('dataUrl : ', dataUrl);
				})
				.then(() => {
					setTimeout(() => {
						setProcessLoading(false);
					}, 8000);
					console.log('Loading ', processLoading);
				})
				.catch((e) => {
					console.log(e);
				});
		}
	}, [apiUrl, dataUrl, processLoading]);
	useEffect(() => {
		fetchProcessData();
	}, [fetchProcessData]);
	console.log('good data : ', data);
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
						<div>
							{processLoading ? (
								'loading...'
							) : (
								<EnhancedTable
									className={classes.table}
									//data={dataUrl}
									columns={columns}
								/>
							)}
						</div>
					</TabPanel>
				</CardContent>
			</CustomCard>
		</>
	);
};

export default TabBarDashboard;
