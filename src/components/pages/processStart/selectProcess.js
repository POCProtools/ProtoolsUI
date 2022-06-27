import React, { useState } from 'react';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	DialogContentText,
} from '@mui/material';
import { startProcess } from 'utils/dataProcess/processExecution';
import { useNavigate } from 'react-router-dom';

const SelectProcess = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState('empty');
	const [open, setOpen] = useState(false);
	const [processParams, setProcessParams] = useState([]);

	const getUrl = (selected, callback) => {
		switch (selected) {
			case 'flowable':
				return 'CasUtilisationPOC';
			default:
				console.log('Error: BPMN file not found');
		}
		callback();
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		navigate(
			'/process/' + processParams[0].processKey + '/' + processParams[0].id
		);
	};

	//const [url, setUrl] = useState(getUrl(selected));
	const handleChange = (event) => {
		console.log('event: ' + event.target.value);
		setSelected(event.target.value);
	};

	const navigationHandler = () => {
		console.log('Navigate to bpmn file');
		setProcessParams(startProcess(getUrl(selected)));
		console.log('processParams: ' + processParams);
		handleClickOpen();
	};

	return (
		<>
			<FormControl size='small' fullWidth sx={{ marginTop: 3 }}>
				<InputLabel id='demo-simple-select-label'>Processus :</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={selected}
					label='Select BPMN'
					onChange={handleChange}
				>
					<MenuItem value={'flowable'}>Flowable POC</MenuItem>
				</Select>
				<Button onClick={navigationHandler}>Valider</Button>
			</FormControl>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Process Service'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Processus lancé avec succès, redirection vers la page de suivi du
						processus.
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

export default SelectProcess;
