import React, { useState } from 'react';
import { CardContent } from '@mui/material';
import {
	StyledTabs,
	StyledTab,
} from 'components/shared/styledComponents/tabs/tabs';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/styledComponents/card/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import CustomDataGrid from 'components/shared/dataGrid/component';
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
			alignItems: 'center',
			justifyContent: 'center',
			width: '75%',
			marginLeft: '19%',
			marginTop: '0.5%',
			position: 'absolute',
			top: '63%',
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
			padding: 20,
			'&:last-child': {
				paddingBottom: 20,
				paddingTop: 3,
			},
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
				<CardContent className={classes.cardContentTable}>
					<TabPanel value={value} index={0}>
						<span>TODO : Add global process informations</span>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<CustomDataGrid
							data={dataVariables}
							columns={processVariablesColumns}
						/>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<CustomDataGrid
							data={dataManualTasks}
							columns={processManualTasksColumns}
						/>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<CustomDataGrid
							data={dataBpmnElements}
							columns={processBPMNElementColumn}
						/>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<CustomDataGrid />
					</TabPanel>
				</CardContent>
			</CustomCard>
		</>
	);
};

export default TabBarWorkflow;
