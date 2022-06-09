import React, { useState, useEffect, useCallback } from 'react';
import minimapModule from 'diagram-js-minimap';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';
import axios from 'axios';
import Modeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { GlobalStyles } from 'tss-react';
import Logo from 'components/shared/logo';

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
		title: {
			marginLeft: 10,
			fontSize: 30,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		TitleHeader: {
			position: 'absolute',
			top: '2%',
			left: '20%',
			display: 'flex',
			alignItems: 'center',
		},
		logo: {
			verticalAlign: 'middle',
		},
	};
});

const Display = (props) => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	const params = useLocation();
	const url = params.state.selected;

	const fetchDiagram = useCallback(() => {
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
	}, [params.state, url]);

	useEffect(() => {
		fetchDiagram();
	}, [fetchDiagram]);

	if (diagram.length > 0) {
		const modeler = new Modeler({
			container: '#containerBPMN',
			additionalModules: [minimapModule],
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
				modeler.get('minimap').open();
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
			<Box className={classes.TitleHeader}>
				<Logo className={classes.logo} />
				<span className={classes.title}>Designer</span>
			</Box>
			<div id='containerBPMN' className={classes.modelerStyle} />
		</Box>
	);
};

export default Display;
