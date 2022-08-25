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
import { FiPause, FiTrash, FiPlay } from 'react-icons/fi';
import {
	deleteProcess,
	suspendProcess,
	relaunchProcess,
} from '../../../utils/dataProcess/processExecution';

const useStyles = makeStyles()((theme) => {
	return {
		infoName: {
			fontWeight: 'bold',
		},
		infoValue: {},
	};
});

const ProtocolInfo = (props) => {
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
		state,
	} = props;

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
							spacing={{ xl: 10, md: 6, lg: 5, xs: 0.5, sm: 1.5 }}
						>
							<Stack spacing={1}>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
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
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
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
				<Stack spacing={1.5} sx={{ padding: '0.2rem 2.8rem', minwidth: '15%' }}>
					<Typography
						color='primary'
						variant='h6'
						sx={{ marginTop: 1 }}
						className={classes.infoName}
					>
						Plus d'informations:
					</Typography>
					<Button
						variant='outlined'
						color='primary'
						startIcon={state ? <FiPause /> : <FiPlay />}
						sx={{ padding: '0.5rem 0.7rem' }}
					>
						Text
					</Button>
					<Button
						variant='contained'
						color='warning'
						startIcon={<FiTrash />}
						sx={{ padding: '0.5rem 0.7rem' }}
					>
						Text#2
					</Button>
				</Stack>
			</Stack>
		</>
	);
};

export default ProtocolInfo;
