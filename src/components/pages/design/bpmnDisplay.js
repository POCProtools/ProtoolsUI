import React, { useState, useEffect } from 'react';
// import ReactBpmn from 'react-bpmn';
import axios from 'axios';
import Modeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import SelectBPMN from './selectBPMN';

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
		},
		menu: {
			position: 'absolute',
			left: '50%',
			top: '10%',
		},
	};
});

export const exportDiagram = () => {
	var modeler = new Modeler({ container: '#canvas' });
	modeler
		.saveXML({ format: true }, function (err, xml) {
			if (err) {
				return console.error('could not save BPMN 2.0 diagram', err);
			}
		})
		.then((xml) => console.log(xml));
};
//TODO : Remove export + integrate button in modeler

const Display = () => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	useEffect(() => {
		if (diagram.length === 0) {
			axios
				.get(
					'https://raw.githubusercontent.com/Stage2022/Protools-Flowable/main/src/main/resources/processes/casUsageTest.bpmn20.xml'
				)
				.then((r) => {
					setDiagram(r.data);
				})
				.catch((e) => {
					console.log(e);
				});
		}
	}, [diagram]);

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
			<SelectBPMN className={classes.menu} />
			<div id='containerBPMN' className={classes.modelerStyle} />
		</Box>
	);
};

export default Display;
