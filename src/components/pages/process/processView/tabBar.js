import React, { useState } from 'react';
import { CardContent } from '@mui/material';
import {
	StyledTabs,
	StyledTab,
} from 'components/shared/styledComponents/tabs/tabs';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/styledComponents/card/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import EnhancedTable from 'components/pages/home/tableGrid';
import theme from 'theme';
import {
	data,
	columns,
	processVariablesColumns,
	processManualTasksColumns,
	processBPMNElementColumn,
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
			marginLeft: '20%',
			marginTop: '1%',
			position: 'absolute',
			top: '55%',
		},
		cardTab: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'left',
			width: '75%',
			marginLeft: '20%',
			marginTop: '0.5%',
			position: 'absolute',
			top: '63%',
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
						<EnhancedTable
							className={classes.table}
							data={data}
							columns={columns}
						/>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<EnhancedTable
							className={classes.table}
							data={dataVariables}
							columns={processVariablesColumns}
						/>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<EnhancedTable
							className={classes.table}
							data={dataManualTasks}
							columns={processManualTasksColumns}
						/>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<EnhancedTable
							className={classes.table}
							data={dataBpmnElements}
							columns={processBPMNElementColumn}
						/>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<EnhancedTable className={classes.table} />
					</TabPanel>
				</CardContent>
			</CustomCard>
		</>
	);
};

export default TabBarWorkflow;
