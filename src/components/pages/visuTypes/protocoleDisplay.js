/* eslint-disable no-unused-vars */
// React dependencies
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
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
import {
	Box,
	Breadcrumbs,
	Link,
	Typography,
	Grid,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@mui/material';
// Custom Components
import Logo from 'components/shared/logo/logo';
import TabBarWorkflow from './tabBar';
import Loader from 'components/shared/loader/loader';
import SideBar from 'components/shared/sidepanel/sidepanel';
// Data retrieve functions
import {
	getUrlBPMNByProcessName,
	getCurrentActivityName,
	getVariables,
	getManualTasks,
	getAllTasksProcess,
	getProcessDefinitionID,
} from 'utils/dataProcess/fetchDataProcess';
import {
	defaultDataVariables,
	defaultDataManualTask,
	defaultBpmnElement,
} from 'utils/mockData';
import ProtocolInfo from './protocolInfo';

const useStyles = makeStyles()((theme) => {
	return {
		title: {
			marginLeft: 10,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		TitleHeader: {
			position: 'absolute',
			top: '3%',
			left: '17%',
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
			width: '80%',
			marginLeft: '16%',
			position: 'absolute',
			top: '13%',

			zIndex: 1,
			[theme.breakpoints.down('md')]: {
				width: '84%',
				marginLeft: '11.5%',
				//marginTop: '2.5%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
				//marginTop: '3%',
			},
		},
		bread: {
			position: 'absolute',
			top: '10%',
			left: '16%',
			color: theme.palette.primary.main,
			opacity: 0.8,
			[theme.breakpoints.down('md')]: {
				left: '12%',
			},
			[theme.breakpoints.down('sm')]: {
				left: '5%',
			},
		},
		highlight: {
			backgroundColor: theme.palette.secondary.main,
			opacity: 0.8,
			pointerevents: null,
		},
	};
});

const ProtocolTypeViwer = (props) => {
	const { classes } = useStyles();
	const [diagram, setDiagram] = useState('');
	const [rendered, setRendered] = useState(false);
	const url = props.url;

	useEffect(() => {
		setTimeout(() => {
			axios
				.get(url)
				.then((r) => {
					setDiagram(r.data);
				})
				.catch((e) => {
					console.log(e);
				});
		}, 200);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (diagram.length > 0 && !rendered) {
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
				setRendered(true);
			})
			.catch((err) => {
				console.log('error', err);
			});
	}

	return (
		<>
			<SideBar page='process' />
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
					<Typography variant='h3' className={classes.title}>
						Visualisation Protocoles
					</Typography>
				</Box>
				<div id='containerBPMN' className={classes.viewerStyle} />
				<ProtocolInfo />
			</Box>
		</>
	);
};

export default ProtocolTypeViwer;
