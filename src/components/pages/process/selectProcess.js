import React, { useState } from 'react';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SelectProcess = () => {
	const [selected, setSelected] = useState('empty');
	const navigate = useNavigate();
	const getUrl = (selected, callback) => {
		switch (selected) {
			case 'empty':
				return '';
			case 'camunda':
				return '';
			case 'flowable':
				return 'CasUtilisationPOC';
			default:
				console.log('Error: BPMN file not found');
		}
		callback();
	};

	//const [url, setUrl] = useState(getUrl(selected));
	const handleChange = (event) => {
		console.log('event: ' + event.target.value);
		setSelected(event.target.value);
	};

	const navigationHandler = () => {
		console.log('Navigate to bpmn file');
		console.log('Variables : ' + selected);
		navigate('/process/' + getUrl(selected) + '/noID');
	};

	return (
		<FormControl size='small' fullWidth sx={{ marginTop: 3 }}>
			<InputLabel id='demo-simple-select-label'>Select BPMN</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={selected}
				label='Select BPMN'
				onChange={handleChange}
			>
				<MenuItem value={'camunda'}>Camunda POC</MenuItem>
				<MenuItem value={'flowable'}>Flowable POC</MenuItem>
			</Select>
			<Button onClick={navigationHandler}>Let's go</Button>
		</FormControl>
	);
};

export default SelectProcess;
