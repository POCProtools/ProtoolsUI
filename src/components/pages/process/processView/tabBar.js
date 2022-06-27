/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CardContent } from '@mui/material';
import {
	StyledTabs,
	StyledTab,
} from 'components/shared/styledComponents/tabs/tabs';
import CustomDataGrid from 'components/shared/dataGrid/component';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/styledComponents/card/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import theme from 'theme';
import {
	processVariablesColumns,
	processManualTasksColumns,
	processBPMNElementColumn,
} from 'utils/mockData';

const useStyles = makeStyles()((theme) => {
	return {
		card: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '75%',
			marginLeft: '19%',
			marginTop: '1%',
			position: 'absolute',
			top: '55%',
			[theme.breakpoints.down('md')]: {
				width: '85%',
				marginLeft: '11.5%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
			},
		},
		cardTab: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '75%',
			marginLeft: '19%',
			marginTop: '0.5%',
			marginBottom: '5%',
			position: 'absolute',
			top: '63%',
			[theme.breakpoints.down('md')]: {
				width: '85%',
				marginLeft: '11.5%',
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
			width: '98%',
		},
		tabWidth: {
			width: '98%',
		},
	};
});
const TabBarWorkflow = (props) => {
	const { classes } = useStyles();
	const [value, setValue] = useState(0);
	const dataVariables = props.variables;
	const dataManualTasks = props.manualTasks;
	const dataBpmnElements = props.bpmnElement;

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
							label='Informations'
							{...tabPropIndex(0)}
							className={classes.MuiTab}
						/>

						<StyledTab
							label='Variables'
							{...tabPropIndex(1)}
							className={classes.MuiTab}
						/>
						<StyledTab
							label='Taches manuelles'
							{...tabPropIndex(2)}
							className={classes.MuiTab}
						/>
						<StyledTab
							label='Éléments BPMN'
							{...tabPropIndex(3)}
							className={classes.MuiTab}
						/>
						<StyledTab
							label='Incidents'
							{...tabPropIndex(4)}
							className={classes.MuiTab}
						/>
					</StyledTabs>
				</CardContent>
			</CustomCard>

			<CustomCard className={classes.cardTab}>
				<TabPanel value={value} index={0}>
					<span>TODO : Add global process informations</span>
				</TabPanel>
				<TabPanel value={value} index={1} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<CustomDataGrid
							rows={dataVariables}
							columns={processVariablesColumns}
						/>
					</CardContent>
				</TabPanel>
				<TabPanel value={value} index={2} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<CustomDataGrid
							rows={dataManualTasks}
							columns={processManualTasksColumns}
						/>
					</CardContent>
				</TabPanel>
				<TabPanel value={value} index={3} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<CustomDataGrid
							rows={dataBpmnElements}
							columns={processBPMNElementColumn}
						/>
					</CardContent>
				</TabPanel>
				<TabPanel value={value} index={4}></TabPanel>
			</CustomCard>
		</>
	);
};

export default TabBarWorkflow;
