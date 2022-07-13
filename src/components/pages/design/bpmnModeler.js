import React, { Fragment, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { emptyBPMN } from 'utils/mockData';
import 'bpmn-js/dist/assets/diagram-js.css';

const CustomModeler = () => {
	// we use reference because modeler is a mutable object for which we need to keep reference
	const modelerRef = useRef(null);

	const bpmContainerRef = useRef();
	console.log(bpmContainerRef);

	const saveBPMNDiagram = async (modeler) => {
		modeler.saveXML({ format: true }, function (error, bpmn) {
			if (error) {
				return;
			}

			var svgBlob = new Blob([bpmn], {
				type: 'text/xml',
			});

			var fileName = 'BpmnFile.bpmn';

			var downloadLink = document.createElement('a');
			downloadLink.download = fileName;
			downloadLink.innerHTML = 'Get BPMN File';
			downloadLink.href = window.URL.createObjectURL(svgBlob);
			downloadLink.onclick = function (event) {
				document.body.removeChild(event.target);
			};
			downloadLink.style.visibility = 'hidden';
			document.body.appendChild(downloadLink);
			downloadLink.click();
		});
	};
	const saveBPMNSvg = async (modeler) => {
		modeler.saveSVG({ format: true }, function (error, svg) {
			if (error) {
				return;
			}

			var svgBlob = new Blob([svg], {
				type: 'image/svg+xml',
			});

			var fileName = 'BpmnFile.svg';

			var downloadLink = document.createElement('a');
			downloadLink.download = fileName;
			downloadLink.innerHTML = 'Get BPMN SVG';
			downloadLink.href = window.URL.createObjectURL(svgBlob);
			downloadLink.onclick = function (event) {
				document.body.removeChild(event.target);
			};
			downloadLink.style.visibility = 'hidden';
			document.body.appendChild(downloadLink);
			downloadLink.click();
		});
	};

	// import is fired only once
	useEffect(() => {
		const modeler = (modelerRef.current = new BpmnModeler({
			container: bpmContainerRef.current,
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
		<Fragment>
			<Button
				sx={{ marginLeft: 3 }}
				variant='contained'
				onClick={() => {
					console.log('import XML');
				}}
			>
				Import BPMN File
			</Button>
			<Button
				sx={{ m: 2 }}
				variant='outlined'
				onClick={() => saveBPMNDiagram(modelerRef.current)}
			>
				Save BPMN File
			</Button>
			<Button
				onClick={() => {
					saveBPMNSvg(modelerRef.current);
				}}
			>
				Save SVG
			</Button>
			<div
				style={{ height: '100vh' }}
				id='bpmncontainer'
				ref={bpmContainerRef}
			></div>
		</Fragment>
	);
};
export default CustomModeler;
