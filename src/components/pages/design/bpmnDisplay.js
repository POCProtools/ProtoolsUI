import React, { useState, useEffect } from 'react';
// import ReactBpmn from 'react-bpmn';
import axios from 'axios';
import Modeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { GlobalStyles } from 'tss-react';

const useStyles = makeStyles()((theme) => {
	return {
		modelerStyle: {
			backgroundColor: '#FFFF',
			border: `1px solid ${theme.palette.primary.main}`,
			height: '78vh',
			width: '77vw',
			//marginLeft: 295,
			position: 'absolute',
			top: '20%',
			left: '20%',
			zIndex: 1,
		},
	};
});

const Display = (props) => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	const params = useLocation();
	const url = params.state.selected;

	const fetchDiagram = () => {
		console.log(params.state);
		console.log(url);

		axios
			.get(url)
			.then((r) => {
				setDiagram(r.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		fetchDiagram();
	}, []);

	if (diagram.length > 0) {
		const modeler = new Modeler({
			container: '#containerBPMN',
		});
		modeler
			.importXML(diagram)
			.then(({ warnings }) => {
				if (warnings.length) {
					console.log('Warnings', warnings);
				}

				const canvas = modeler.get('modeling');
				canvas.setColor('CalmCustomerTask', {
					stroke: 'green',
					fill: 'yellow',
				});
			})
			.catch((err) => {
				console.log('error', err);
			});
	}
	return (
		<Box>
			<GlobalStyles
				styles={{
					body: {
						backgroundColor: '#F9FAFC',
					},
				}}
			/>
			<div id='containerBPMN' className={classes.modelerStyle} />
		</Box>
	);
};

export default Display;
