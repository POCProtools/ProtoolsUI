import React, { useState } from 'react';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const getUrl = (selected) => {
	switch (selected) {
		case 'empty':
			return 'https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/master/modeler/resources/newDiagram.bpmn';
		case 'camunda':
			return 'https://raw.githubusercontent.com/Stage2022/ProtoolsCamundaTest/main/src/main/resources/process.bpmn';
		case 'flowable':
			return 'https://raw.githubusercontent.com/Stage2022/Protools-Flowable/main/src/main/resources/processes/casUsageTest.bpmn20.xml';
		default:
			console.log('Error: BPMN file not found');
	}
};

const SelectBPMN = () => {
	//const classes = useStyles();
	const [selected, setSelected] = useState('empty');
	const navigate = useNavigate();
	const [url, setUrl] = useState(getUrl(selected));
	const handleChange = (event) => {
		setSelected(event.target.value);
		const urlNew = getUrl(selected);
		setUrl(urlNew);
		console.log('New selected : ' + url);
	};
	const navigationHandler = () => {
		console.log('Navigate to bpmn file');
		console.log(url);
		navigate('/display', { state: { selected: url } });
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
				<MenuItem value={'empty'}>Empty File</MenuItem>
			</Select>
			<Button onClick={navigationHandler}>Let's go</Button>
		</FormControl>
	);
};

export default SelectBPMN;
