/* eslint-disable no-unused-vars */
import React, { useState, useParams } from 'react';
import {
	Typography,
	FormControl,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@mui/material';

import CustomDataGrid from 'components/shared/dataGrid/component';
import { processVariablesColumns } from 'utils/dataProcess/mockDataProcess';
import { temporaryExecuteTask } from 'utils/dataProcess/processExecution';

const FormView = (props) => {
	const taskName = props.taskName;
	const taskID = props.taskID;
	const variables = props.variables;

	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		window.location.replace('/ ', '_blank');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		temporaryExecuteTask(taskID, taskName, {});
		handleClickOpen();
	};

	return (
		<>
			<Button sx={{ m: 2 }} onClick={handleSubmit}>
				<Typography value='h4'>Envoyer</Typography>
			</Button>

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
	);
};

export default FormView;
