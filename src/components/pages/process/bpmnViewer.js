import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Viewer from 'bpmn-js/lib/Viewer';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { makeStyles } from 'tss-react/mui';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { GlobalStyles } from 'tss-react';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles()((theme) => {
	return {
		viewerStyle: {
			backgroundColor: '#FFFF',
			border: `1px solid ${theme.palette.primary.main}`,
			height: '40%',
			width: '77%',
			position: 'absolute',
			top: '15%',
			left: '20%',
			zIndex: 1,
		},
		bread: {
			position: 'absolute',
			top: '10%',
			left: '20%',
			color: theme.palette.primary.main,
			opacity: 0.8,
		},
	};
});

const BPMNViewer = (props) => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	const params = useLocation();
	const url = params.state.selected;
	const name = params.state.name;

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
		const viewer = new Viewer({
			container: '#containerBPMN',
		});
		viewer
			.importXML(diagram)
			.then(() => {
				viewer.get('canvas').zoom('fit-viewport');
			})
			.then(({ warnings }) => {
				if (warnings.length) {
					console.log('Warnings', warnings);
				}
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
			<Breadcrumbs
				separator='›'
				aria-label='breadcrumb'
				className={classes.bread}
			>
				<Link underline='hover' color='inherit' href='/'>
					Home
				</Link>
				<Link underline='hover' color='inherit' href='/process'>
					Processes
				</Link>
				<Typography color='text.primary'>Workflow : {name}</Typography>
			</Breadcrumbs>
			<div id='containerBPMN' className={classes.viewerStyle} />
		</Box>
	);
};

export default BPMNViewer;
