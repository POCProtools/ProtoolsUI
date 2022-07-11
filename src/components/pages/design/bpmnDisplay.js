import React, { useEffect, useRef } from 'react';

// BPMN Imports
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import minimapModule from 'diagram-js-minimap';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';

import { makeStyles } from 'tss-react/mui';
import { Box, Typography, Button } from '@mui/material';

import { GlobalStyles } from 'tss-react';
import Logo from 'components/shared/logo/logo';
import SideBar from 'components/shared/sidepanel/sidepanel';
import { emptyBPMN } from 'utils/mockData';

const useStyles = makeStyles()((theme) => {
	return {
		modelerStyle: {
			backgroundColor: '#FFFF',
			border: `1px solid ${theme.palette.primary.main}`,
			height: '78vh',
			width: '77vw',
			position: 'absolute',
			top: '20%',
			left: '18%',
			zIndex: 1,
			[theme.breakpoints.down('md')]: {
				width: '84%',
				left: '12%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				left: '5%',
			},
		},
		title: {
			marginLeft: 10,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		TitleHeader: {
			position: 'absolute',
			top: '5%',
			left: '15%',
			display: 'flex',
			alignItems: 'center',
		},
		logo: {
			verticalAlign: 'middle',
		},
	};
});
//TODO : add header (save, update, etc...) + Custom flowable options
const Display = (props) => {
	const { classes } = useStyles();
	//const params = useLocation();
	//const url = params.state.selected;

	const saveBPMNDiagram = async (modeler) => {
		const { xml } = await modeler.saveXML();
		console.log('Save BPMN', xml);
	};

	const modelerRef = useRef(null);

	const bpmContainerRef = useRef();
	console.log(bpmContainerRef);

	// import is fired only once
	useEffect(() => {
		const modeler = (modelerRef.current = new BpmnModeler({
			container: bpmContainerRef.current,

			additionalModules: [minimapModule],
			keyboard: {
				bindTo: window,
			},
			propertiesPanel: {
				parent: '#propview',
			},
		}));

		modeler
			.importXML(emptyBPMN)
			.then(() => {
				const canvas = modeler.get('canvas');
				canvas.zoom('fit-viewport');
			})
			.catch(console.error);
	}, []);

	return (
		<Box>
			<GlobalStyles
				styles={{
					body: {
						backgroundColor: '#F9FAFC',
					},
				}}
			/>
			<SideBar page='design' />
			<Box className={classes.TitleHeader}>
				<Logo className={classes.logo} />
				<Typography variant='h4' className={classes.title}>
					Designer
				</Typography>

				<Button onClick={() => saveBPMNDiagram(modelerRef.current)}>
					SaveXML
				</Button>
			</Box>
			<div
				className={classes.modelerStyle}
				id='bpmncontainer'
				ref={bpmContainerRef}
			></div>
		</Box>
	);
};

export default Display;
