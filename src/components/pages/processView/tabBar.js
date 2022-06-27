/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
	CardContent,
	IconButton,
	Link,
	Dialog,
	DialogActions,
	Button,
	DialogTitle,
	DialogContent,
	DialogContentText,
} from '@mui/material';
import {
	StyledTabs,
	StyledTab,
} from 'components/shared/styledComponents/tabs/tabs';
import CustomDataGrid from 'components/shared/dataGrid/component';
import { makeStyles } from 'tss-react/mui';
import theme from 'theme';
import CustomCard from 'components/shared/styledComponents/card/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import { FiUserPlus } from 'react-icons/fi';

import {
	processVariablesColumns,
	processBPMNElementColumn,
} from 'utils/dataProcess/mockDataProcess';
import { temporaryExecuteTask } from 'utils/dataProcess/processExecution';

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
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		window.location.replace('/', '_blank');
	};

	const processManualTasksColumns = [
		{
			field: 'name',
			headerName: 'Nom',
			flex: 0.3,
			minWidth: 100,
		},
		{
			field: 'id',
			headerName: 'Task ID',
			flex: 0.5,
			minWidth: 200,
		},
		{
			field: 'createTime',
			headerName: 'Date de création',
			flex: 0.3,
			minWidth: 150,
		},
		{
			field: 'action',
			headerName: ' ',
			align: 'center',
			flex: 0.1,
			minWidth: 90,
			renderCell: (params) => (
				<>
					<IconButton
						aria-label='Claim & Exectute task'
						component={Link}
						to='/home'
						onClick={() => {
							temporaryExecuteTask(params.row.id, params.row.name);
							handleClickOpen();
						}}
					>
						<FiUserPlus />
					</IconButton>
					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby='alert-dialog-title'
						aria-describedby='alert-dialog-description'
					>
						<DialogTitle id='alert-dialog-title'>{'Task Service'}</DialogTitle>
						<DialogContent>
							<DialogContentText id='alert-dialog-description'>
								Tâche exécutée avec succès, retour au menu principal.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} autoFocus>
								Ok
							</Button>
						</DialogActions>
					</Dialog>
				</>
			),
		},
	];

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
						variant='scrollable'
						allowScrollButtonsMobile
					>
						<StyledTab label='Informations' {...tabPropIndex(0)} />

						<StyledTab label='Variables' {...tabPropIndex(1)} />
						<StyledTab label='Taches manuelles' {...tabPropIndex(2)} />
						<StyledTab label='Éléments BPMN' {...tabPropIndex(3)} />
						<StyledTab label='Incidents' {...tabPropIndex(4)} />
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
