import axios from 'axios';
import Viewer from 'bpmn-js/lib/Viewer';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import { GlobalStyles } from 'tss-react';

const useStyles = makeStyles()((theme) => {
	return {
		viewerStyle: {
			backgroundColor: '#FFFF',
			border: `1px solid ${theme.palette.primary.main}`,
			height: '50vh',
			width: '77vw',
			//marginLeft: 295,
			position: 'absolute',
			top: '10%',
			left: '20%',
			zIndex: 1,
		},
	};
});
