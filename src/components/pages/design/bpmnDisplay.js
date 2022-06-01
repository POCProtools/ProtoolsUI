import React, { useState, useEffect } from 'react';
// import ReactBpmn from 'react-bpmn';
import casUsageTest from 'assets/casUsageTest.bpmn20.xml';
import Modeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
	return {
		modelerStyle: {
			border: '1px solid #000000',
			height: '75vh',
			width: '75vw',
			marginLeft: 295,
		},
	};
});

const Display = () => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	const container = document.getElementById('container');
	// function onShown() {
	// 	console.log('diagram shown');
	// }

	// function onLoading() {
	// 	console.log('diagram loading');
	// }

	// function onError(err) {
	// 	console.log('failed to show diagram');
	// }
	useEffect(() => {
		if (diagram.length === 0) {
			setDiagram(casUsageTest); // A changer
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
