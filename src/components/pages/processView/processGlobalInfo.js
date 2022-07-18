import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	Card,
	Typography,
	Grid,
	Stack,
	CardContent,
} from '@mui/material';
import { FiPause, FiTrash } from 'react-icons/fi';
import { deleteProcess } from '../../../utils/dataProcess/processExecution';

const useStyles = makeStyles()((theme) => {
	return {
		infoName: {
			fontWeight: 'bold',
		},
		infoValue: {},
	};
});

const ProcessGlobalInfo = (props) => {
	const classes = useStyles();
	const navigate = useNavigate();
	const {
		date,
		processID,
		documentation,
		//tenant,
		activeTask,
		processKey,
		businessKey,
	} = props;

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleCloseCancel = () => {
		setOpen(false);
	};
	const handleCloseConfirm = () => {
		setOpen(false);
		deleteProcess(processID);
		navigate(-1);
	};
	return (
		<>
			<Stack direction='row' alignItems='flex-start'>
				<Card
					sx={{
						boxShadow: 0,
						textAlign: 'center',
						backgroundColor: 'secondary.pressed',
						borderRadius: 7,
						m: 1,
						width: '90%',
					}}
				>
					<CardContent className={classes.cardContent}>
						<Stack
							direction='row'
							alignItems='flex-start'
							spacing={{ xl: 10, md: 4, lg: 5, xs: 0.5, sm: 1.5 }}
						>
							<Stack spacing={1}>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Documentation:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										{documentation}
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Type de processus:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										{businessKey}
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										ProcessKey:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										{processKey}
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										ProcessID:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										{processID}
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Tenant:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										On met le tenant ici
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Nombre de tâches manuelles actives:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										{activeTask}
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Date de création:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										{date}
									</Typography>
								</Grid>
							</Stack>
							<Stack spacing={1}>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Autre info:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Autres informations potentiellement utiles potentiellement
										longues à afficher
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										....
									</Typography>
								</Grid>
							</Stack>
						</Stack>
					</CardContent>
				</Card>
				<Stack spacing={1.5} sx={{ padding: '0.2rem 0.7rem', minwidth: '10%' }}>
					<Typography
						color='primary'
						variant='h6'
						sx={{ marginTop: 1 }}
						className={classes.infoName}
					>
						Actions:
					</Typography>
					<Button
						variant='outlined'
						color='primary'
						startIcon={<FiPause />}
						sx={{ padding: '0.5rem 0.7rem' }}
					>
						Suspendre
					</Button>
					<Button
						variant='contained'
						color='warning'
						startIcon={<FiTrash />}
						onClick={handleClickOpen}
						sx={{
							padding: '0.5rem',
						}}
					>
						Supprimer
					</Button>
				</Stack>
			</Stack>

			<Dialog open={open} onClose={handleCloseCancel}>
				<DialogTitle>
					<Typography variant='h4'>Supprimer un processus</Typography>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Voulez vous vraiment supprimer ce processus ? Cette action est
						irréversible.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant='outlined' onClick={handleCloseCancel} autoFocus>
						Annuler
					</Button>
					<Button variant='contained' onClick={handleCloseConfirm} autoFocus>
						Confirmer
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ProcessGlobalInfo;
