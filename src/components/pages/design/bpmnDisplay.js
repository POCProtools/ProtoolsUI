import React, { useState, useEffect } from 'react';
// import ReactBpmn from 'react-bpmn';
import axios from 'axios';
import Modeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { makeStyles } from 'tss-react/mui';

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
	};
});

const Display = () => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	const container = document.getElementById('container');
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
			container,
			keyboard: {
				bindTo: document,
			},
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

	return <div id='container' className={classes.modelerStyle} />;
};

export default Display;
