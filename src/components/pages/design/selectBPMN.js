import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const useStyles = makeStyles()((theme) => {
	return {
		menu: {
			position: 'absolute',
			left: '20%',
			top: '10%',
		},
	};
});

export const getUrl = (selected) => {
	switch (selected) {
		case 'Empty':
			return 'https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/master/modeler/resources/newDiagram.bpmn';
		case 'Camunda':
			return 'https://raw.githubusercontent.com/Stage2022/ProtoolsCamundaTest/main/src/main/resources/process.bpmn';
		case 'Flowable':
			return 'https://raw.githubusercontent.com/Stage2022/Protools-Flowable/main/src/main/resources/processes/casUsageTest.bpmn20.xml';
		default:
			console.log('Error: BPMN file not found');
	}
};

const SelectBPMN = () => {
	const classes = useStyles();
	const [selected, setSelected] = useState('Empty');
	const [url, setUrl] = useState('');

	const handleChange = (event) => {
		setSelected(event.target.value);
		console.log('New selected : ' + selected);
		setUrl(getUrl(selected));
		console.log(url);
		console.log(classes);
	};
	return (
		<FormControl
			size='small'
			sx={{ position: 'absolute', left: '20%', top: '10%' }}
		>
			<InputLabel id='demo-simple-select-label'>Select BPMN</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={selected}
				label='Select BPMN'
				onChange={handleChange}
			>
				<MenuItem value={'Camunda'}>Camunda POC</MenuItem>
				<MenuItem value={'Flowable'}>Flowable POC</MenuItem>
				<MenuItem value={'Empty'}>Empty</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SelectBPMN;
