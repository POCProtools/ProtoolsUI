import { FiChevronRight, FiXCircle, FiCheck, FiEdit3 } from 'react-icons/fi';
import theme from 'theme';
import { Link, Box } from '@mui/material';

// Mock data incident pie
export const IncidentChartdata = {
	labels: ['Services', 'Interne', 'Warning'],
	datasets: [
		{
			label: 'incidents',
			data: [3, 3, 2],
			backgroundColor: ['#F25C54', '#F48A66', '#FEDC86', '#84A98C'],
			borderColor: [theme.palette.background.default],
			borderWidth: 2,
		},
	],
};
// Mock data column process list
export const columns = [
	{
		name: 'name',
		label: 'Nom',
		options: {
			filter: true,
			sort: true,
			draggable: true,
			setCellProps: () => ({
				style: { minWidth: '250px' },
			}),
		},
	},
	{
		name: 'id',
		label: 'ID',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '300px' } }),
		},
	},
	{
		name: 'date',
		label: 'Date début',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px', fontSize: '16' } }),
		},
	},
	{
		name: 'state',
		label: 'Statut',
		options: {
			sort: true,
			draggable: true,
			customBodyRender: (value) =>
				value ? (
					<Box display='flex' alignItems='center' justifyContent='center'>
						<FiCheck size={20} color='#17C3B2' />
					</Box>
				) : (
					<Box display='flex' alignItems='center' justifyContent='center'>
						<FiXCircle size={20} color='#F25C54' sx={{ align: 'center' }} />
					</Box>
				),
		},
	},
	{
		name: 'action',
		label: 'Action',
		options: {
			empty: true,
			draggable: true,
			customBodyRender: (value) => (
				<Link href={`/process/${value}`} underline='none'>
					<FiChevronRight />
				</Link>
			),
			setCellProps: () => ({ style: { minWidth: '90px' } }),
		},
	},
];

// Mock data for process list
export const data = [
	{
		id: 'cd97a04e-e314-11ec-ae0a-a2bafca39b64',
		state: true,
		name: 'protools-camunda-test-process',
		date: '04/02/2022-10:20:45',
		action: 'cd97a04e-e314-11ec-ae0a-a2bafca39b64',
	},
	{
		id: '01fe0fa7-db70-11ec-9bdf-aa7f141af4d1',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: '01fe0fa7-db70-11ec-9bdf-aa7f141af4d1',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: '[IDProcessus]',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: 'cd97a04e-e314-11ec-ae0a-a2bafca39b64',
		state: true,
		name: 'protools-camunda-test-process',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: '01fe0fa7-db70-11ec-9bdf-aa7f141af4d1',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: 'cd97a04e-e314-11ec-ae0a-a2bafca39b64',
		state: true,
		name: 'protools-camunda-test-process',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: '01fe0fa7-db70-11ec-9bdf-aa7f141af4d1',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
		action: 'linkProcessus',
	},
];

// Mock column name userTask
export const columnsManu = [
	{
		name: 'name',
		label: 'Nom',
		options: {
			filter: true,
			sort: true,
			draggable: true,
			setCellProps: () => ({
				style: { minWidth: '180px' },
			}),
		},
	},
	{
		name: 'id',
		label: 'ID',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '250px' } }),
		},
	},
	{
		name: 'createTime',
		label: 'Date début',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px' } }),
		},
	},
	{
		name: 'processInstance',
		label: 'Process Instance',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px' } }),
		},
	},

	{
		name: 'Action',
		options: {
			empty: true,
			draggable: true,
			customBodyRender: (value) => <FiChevronRight />,
			setCellProps: () => ({ style: { minWidth: '50px' } }),
		},
	},
];

// Modck data for available usertasks
export const dataManu = [
	{
		id: 'TaskID1',
		state: true,
		name: 'Select Sample',
		date: '04/02/2022-10:20:45',
	},
	{
		id: 'TaskID2',
		state: false,
		name: '[nomTacheManu]',
		date: '04/02/2022-10:20:45',
	},
];

// Empty BPMN xlm file
export const emptyBPMN =
	'<?xml version="1.0" encoding="UTF-8"?> <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_11nxm0o" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="9.1.0"><bpmn:process id="Process_021yyke" isExecutable="false"><bpmn:startEvent id="StartEvent_12bhofd" /></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_021yyke"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_12bhofd"><dc:Bounds x="156" y="81" width="36" height="36" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>';

export const processVariablesColumns = [
	{
		name: 'name',
		label: 'Nom',
		options: {
			filter: true,
			sort: true,
			draggable: true,
			setCellProps: () => ({
				style: { minWidth: '250px' },
			}),
		},
	},
	{
		name: 'type',
		label: 'Type',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px' } }),
		},
	},
	{
		name: 'value',
		label: 'Valeur',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '350px', fontSize: '16' } }),
		},
	},
	{
		name: 'action',
		label: 'Action',
		options: {
			empty: true,
			draggable: true,
			customBodyRender: (value) => <FiEdit3 />,
			setCellProps: () => ({ style: { minWidth: '90px' } }),
		},
	},
];

export const defaultDataVariables = [
	{
		name: '[NomVariable]',
		type: '[TypeVariable (string, bool, etc..)]',
		value: 'Pas de variables trouvée',
		action: '',
	},
];

export const processManualTasksColumns = [
	{
		name: 'name',
		label: 'Nom',
		options: {
			filter: true,
			sort: true,
			draggable: true,
			setCellProps: () => ({
				style: { minWidth: '250px' },
			}),
		},
	},
	{
		name: 'id',
		label: 'Task ID',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px' } }),
		},
	},
	{
		name: 'createTime',
		label: 'Date de création',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '350px', fontSize: '16' } }),
		},
	},
	{
		name: 'action',
		label: 'Action',
		options: {
			empty: true,
			draggable: true,
			customBodyRender: (value) => <FiEdit3 />,
			setCellProps: () => ({ style: { minWidth: '90px' } }),
		},
	},
];
export const defaultDataManualTask = [
	{
		name: '[NomTask]',
		createTime: '[Ddd Mmm Jj HH:MM:SS UTC YYYY]',
		taskId: 'Pas de taches manuelles trouvée',
		action: '',
	},
];

export const processBPMNElementColumn = [
	{
		name: 'name',
		label: 'Nom',
		options: {
			filter: true,
			sort: true,
			draggable: true,
			setCellProps: () => ({
				style: { minWidth: '200px' },
			}),
		},
	},
	{
		name: 'description',
		label: 'Description',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '350px', fontSize: '16' } }),
		},
	},
	{
		name: 'implementationType',
		label: 'Implémentation',
		options: {
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px' } }),
		},
	},
	{
		name: 'asynchronous',
		label: "Type d'exécution",
		options: {
			filter: false,
			sort: true,
			draggable: true,
			customBodyRender: (value) =>
				value ? (
					<Box display='flex' alignItems='center' justifyContent='center'>
						<FiCheck size={20} color='#17C3B2' />
					</Box>
				) : (
					<Box display='flex' alignItems='center' justifyContent='center'>
						<FiXCircle size={20} color='#F25C54' sx={{ align: 'center' }} />
					</Box>
				),
		},
	},

	{
		name: 'action',
		label: 'Action',
		options: {
			empty: true,
			draggable: true,
			customBodyRender: (value) => <FiEdit3 />,
			setCellProps: () => ({ style: { minWidth: '90px' } }),
		},
	},
];
export const defaultBpmnElement = [
	{
		name: '[NomElement]',
		description: 'Brief description of the task',
		implementationType: 'Whether the task is a delegate or not',
		asynchronous: true,
	},
];
