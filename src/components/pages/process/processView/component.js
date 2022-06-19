/* eslint-disable no-unused-vars */
// React dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// BPMN dependencies
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import minimapModule from 'diagram-js-minimap';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';
// Visual dependencies
import { makeStyles } from 'tss-react/mui';
import { GlobalStyles } from 'tss-react';
import { Box, Breadcrumbs, Link, Typography, Grid } from '@mui/material';
// Custom Components
import Logo from 'components/shared/logo/logo';
import TabBarWorkflow from './tabBar';
import Loader from 'components/shared/loader/loader';
// Data retrieve functions
import {
	getUrlBPMNByProcessName,
	getCurrentActivityName,
	getVariables,
} from 'utils/dataProcess/fetchDataProcess';
import { defaultDataVariables } from 'utils/mockData';

const useStyles = makeStyles()((theme) => {
	return {
		title: {
			marginLeft: 10,
			fontSize: 30,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
			verticalAlign: 'middle',
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
		viewerStyle: {
			backgroundColor: '#FFFF',
			border: `1px solid ${theme.palette.primary.main}`,
			height: '40%',
			width: '75%',
			position: 'absolute',
			top: '15%',
			left: '20%',
			zIndex: 1,
		},
		bread: {
			position: 'absolute',
			top: '12%',
			left: '20%',
			color: theme.palette.primary.main,
			opacity: 0.8,
		},
		highlight: {
			backgroundColor: theme.palette.secondary.main,
			opacity: 0.8,
			pointerevents: null,
		},
	};
});

const BPMNViewer = () => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	const [loading, setLoading] = useState(true);
	const { processKey, id } = useParams();
	const [activities, setActivities] = useState([]);
	const [variables, setVariables] = useState([]);
	useEffect(() => {
		const url = getUrlBPMNByProcessName(processKey);
		const pls = getCurrentActivityName(id).then((res) => {
			setActivities(res);
			console.log('activities: ', activities);
			console.log('activities Values ', Object.values(activities));
		});
		setVariables(getVariables(id));
		console.log('variables lenght: ', variables.length);

		setTimeout(() => {
			axios
				.get(url)
				.then((r) => {
					setDiagram(r.data);
				})
				.catch((e) => {
					console.log(e);
				});
			setLoading(false);
		}, 1000);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (diagram.length > 0) {
		// Define BPMN Viewer
		const viewer = new NavigatedViewer({
			container: '#containerBPMN',
			additionalModules: [minimapModule],
		});
		// Import BPMN diagram into the viewer
		viewer
			.importXML(diagram)
			.then(() => {
				viewer.get('canvas').zoom('fit-viewport');
				// add visual token to the diagram
				const overlays = viewer.get('overlays');
				for (let i = 0; i < Object.values(activities).length; i++) {
					overlays.add(Object.values(activities)[i], 'note', {
						position: {
							bottom: 18,
							right: 10,
						},
						scale: {
							min: 0.9,
						},
						html: '<div class="diagram-note">🦊</div>',
					});
				}
			})
			.catch((err) => {
				console.log('error', err);
			});
	}
	if (loading) {
		return (
			<>
				<GlobalStyles
					styles={{
						body: {
							backgroundColor: '#F9FAFC',
						},
					}}
				/>

				<Grid justifyContent='center'>
					<Box className={classes.TitleHeader}>
						<Logo className={classes.logo} />
						<span className={classes.title}>Workflows</span>
					</Box>
					<Loader />
				</Grid>
			</>
		);
	} else {
		return (
			<Box justifyContent='center'>
				<GlobalStyles
					styles={{
						body: {
							backgroundColor: '#F9FAFC',
						},
					}}
				/>

				<Box className={classes.TitleHeader}>
					<Logo className={classes.logo} />
					<span className={classes.title}>Workflows</span>
				</Box>
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
					<Typography color='text.primary'>Workflow : {processKey}</Typography>
				</Breadcrumbs>
				<div id='containerBPMN' className={classes.viewerStyle} />
				<TabBarWorkflow
					variables={variables.length > 0 ? variables : defaultDataVariables}
				/>
			</Box>
		);
	}
};

export default BPMNViewer;
