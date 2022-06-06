import { FiMoreVertical, FiXCircle, FiCheck } from 'react-icons/fi';
export const processChartdata = [
	{ label: 'One', value: 10, color: '#FEC89A' },
	{ label: 'Two', value: 15, color: '#B56576' },
	{ label: 'Three', value: 20, color: '#98C1D9' },
	{ label: 'Four', value: 20, color: '#84A98C' },
];

export const TaskChartdata = [
	{ label: 'One', value: 10, color: '#FEC89A' },
	{ label: 'Two', value: 15, color: '#B56576' },
	{ label: 'Three', value: 9, color: '#98C1D9' },
	{ label: 'Four', value: 28, color: '#84A98C' },
	{
		label: 'Five',
		value: 5,
		color: '#758ECD',
	},
];

export const IncidentChartdata = [
	{ label: 'Services', value: 3, color: '#F25C54' },
	{ label: 'Interne', value: 3, color: '#F48A66' },
	{ label: 'Warning', value: 3, color: '#FEDC86' },
];

export const columns = [
	{
		name: 'Nom',
		selector: (row) => row.name,
		sortable: true,
		maxWidth: '200px',
	},
	{
		name: 'ID',
		selector: (row) => row.id,
		sortable: true,
		maxWidth: '300px',
	},
	{
		name: 'État',
		cell: (row) =>
			row.state ? (
				<FiCheck size={20} color='#17C3B2' />
			) : (
				<FiXCircle size={20} color='#F25C54' />
			),
		maxWidth: '200px',
	},
	{
		name: 'Date début',
		selector: (row) => row.date,
		sortable: true,
		maxWidth: '200px',
	},
	{
		name: 'Action',
		button: true,
		cell: (row) => <FiMoreVertical />,
		maxWidth: '100px',
	},
];

export const rows = [
	{
		id: '[IDProcessus1]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{ id: '[IDProcessus]', state: true, name: '[NomProcessus]', date: null },
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus1]',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus2]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{ id: '[IDProcessus5]', state: true, name: '[NomProcessus]', date: null },
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
];

export const emptyBPMN =
	'<?xml version="1.0" encoding="UTF-8"?> <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_11nxm0o" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="9.1.0"><bpmn:process id="Process_021yyke" isExecutable="false"><bpmn:startEvent id="StartEvent_12bhofd" /></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_021yyke"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_12bhofd"><dc:Bounds x="156" y="81" width="36" height="36" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>';
