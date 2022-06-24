/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CardContent, Box } from '@mui/material';
import {
	StyledTabs,
	StyledTab,
} from 'components/shared/styledComponents/tabs/tabs';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/styledComponents/card/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import CustomDataGrid from '../../shared/dataGrid/component';
import theme from 'theme';
import { columns, columnsManu, columnsProcessData } from 'utils/mockData';
import { DataGrid } from '@mui/x-data-grid';

const columnsI = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'firstName',
		headerName: 'First name',
		width: 150,
		editable: true,
	},
	{
		field: 'lastName',
		headerName: 'Last name',
		width: 150,
		editable: true,
	},
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 110,
		editable: true,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
];

const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
			marginTop: '1%',
			[theme.breakpoints.down('md')]: {
				width: '80%',
				marginLeft: '14%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
			},
		},
		cardTab: {
			display: 'flex',
			width: '75%',
			marginLeft: '19%',
			marginTop: '0.5%',
			[theme.breakpoints.down('md')]: {
				width: '80%',
				marginLeft: '14%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
			},
		},
		cardContent: {
			padding: 0,
			'&:last-child': {
				paddingBottom: 0,
			},
		},
		cardContentTable: {
			padding: 0,
			'&:last-child': {
				padding: 12,
			},
			width: '100%',
		},
		tabWidth: {
			width: '98%',
		},
	};
});
const TabBarDashboard = (props) => {
	const { classes } = useStyles();
	const [value, setValue] = useState(0);
	const dataProcess = props.dataProcess;
	const dataTask = props.dataTask;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<CustomCard className={classes.card}>
				<CardContent className={classes.cardContent}>
					<StyledTabs
						value={value}
						textColor={theme.palette.primary.main}
						indicatorColor={theme.palette.secondary.main}
						onChange={handleChange}
						scrollButtons
						allowScrollButtonsMobile
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
				<TabPanel value={value} index={0} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<Box sx={{ height: 400, width: '100%' }}>
							<DataGrid
								rows={dataProcess}
								columns={columnsProcessData}
								pageSize={5}
								rowsPerPageOptions={[5, 10, 20]}
								disableSelectionOnClick
							/>
						</Box>
					</CardContent>
				</TabPanel>
				<TabPanel value={value} index={1} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<Box sx={{ height: 400, width: '100%' }}>
							<DataGrid
								rows={dataTask}
								columns={columnsManu}
								pageSize={5}
								rowsPerPageOptions={[5, 10, 20]}
								disableSelectionOnClick
							/>
						</Box>
					</CardContent>
				</TabPanel>
				<TabPanel value={value} index={2} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<Box sx={{ height: 400, width: '100%' }}>
							<DataGrid
								rows={rows}
								columns={columnsI}
								pageSize={5}
								rowsPerPageOptions={[5, 10, 20]}
								disableSelectionOnClick
							/>
						</Box>
					</CardContent>
				</TabPanel>
			</CustomCard>
		</>
	);
};

export default TabBarDashboard;
