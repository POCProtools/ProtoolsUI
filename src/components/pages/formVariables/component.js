/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
	TextField,
	CardContent,
	Button,
	Grid,
	Box,
	Typography,
} from '@mui/material';
import SideBar from 'components/shared/sidepanel/sidepanel';
import CustomCard from 'components/shared/styledComponents/card/card';
import { makeStyles } from 'tss-react/mui';
import { GlobalStyles } from 'tss-react';
import Logo from 'components/shared/logo/logo';
import FormComponent from './formContent';
import { getVariables } from 'utils/dataProcess/fetchDataProcess';
import FormView from './formView';

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
			width: '30%',
			marginLeft: '45%',
			marginTop: '10%',
			padding: 10,
			[theme.breakpoints.down('md')]: {
				width: '70%',
				marginLeft: '18%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '85%',
				marginLeft: '5%',
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

		titleCard: {
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
	};
});
const FormVariables = () => {
	const { classes } = useStyles();

	const state = useLocation().state;

	const id = state.id;
	const variables = state.variables;

	const taskName = state.taskName;
	const taskID = state.taskID;
	console.log('taskID', taskID);
	console.log('id', id);
	console.log('taskName', taskName);
	console.log('state', state);
	switch (taskName) {
		case 'Fill survey info':
			return (
				<>
					<GlobalStyles
						styles={{
							body: {
								backgroundColor: '#F9FAFC',
							},
						}}
					/>
					<SideBar page='form' />
					<Grid container justify='center'>
						<Box className={classes.TitleHeader}>
							<Logo className={classes.logo} />
							<Typography variant='h3' className={classes.title}>
								Variables de processus
							</Typography>
						</Box>
						<CustomCard className={classes.card}>
							<CardContent>
								<Typography value='h3' className={classes.titleCard}>
									Définition des variables de processus:
								</Typography>
								<FormComponent taskName={taskName} taskID={taskID} />
							</CardContent>
						</CustomCard>
					</Grid>
				</>
			);
		default:
			console.log('default render case');
			return (
				<>
					<GlobalStyles
						styles={{
							body: {
								backgroundColor: '#F9FAFC',
							},
						}}
					/>
					<SideBar page='form' />
					<Grid container justify='center'>
						<Box className={classes.TitleHeader}>
							<Logo className={classes.logo} />
							<Typography variant='h3' className={classes.title}>
								Tache finale du cas d'utilisation
							</Typography>
						</Box>
						<CustomCard className={classes.card}>
							<CardContent>
								<FormView
									taskName={taskName}
									taskID={taskID}
									variables={variables}
								/>
							</CardContent>
						</CustomCard>
					</Grid>
				</>
			);
	}
};
export default FormVariables;
