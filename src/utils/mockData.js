import {
	FiChevronRight,
	FiXCircle,
	FiCheck,
	FiEdit3,
	FiUserPlus,
} from 'react-icons/fi';
import theme from 'theme';
import { Link, Box, IconButton } from '@mui/material';
import { temporaryExecuteTask } from './dataProcess/processExecution';

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
export const columnsProcessData = [
	{
		field: 'id',
		headerName: 'ID',
		headerClassName: 'columns--header',
		flex: 0.6,
		minWidth: 200,
	},
	{
		field: 'processKey',
		headerName: 'Process Key',
		headerClassName: 'columns--header',
		flex: 0.4,
		minWidth: 150,
	},
	{
		field: 'documentation',
		headerName: 'Description',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 250,
	},
	{
		field: 'date',
		headerName: 'Date début',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 150,
	},
	{
		field: 'state',
		headerName: 'Statut',
		headerClassName: 'columns--header',
		flex: 0.18,
		align: 'center',
		renderCell: (value) =>
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
	{
		field: 'action',
		headerName: ' ',
		headerClassName: 'columns--header',
		flex: 0.15,
		align: 'center',
		renderCell: (params) => (
			<Link href={`/process/${params.value}`} underline='none'>
				<FiChevronRight />
			</Link>
		),
	},
];

// Mock column name userTask
export const columnsManu = [
	{
		field: 'name',
		headerName: 'Nom',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 200,
	},
	{
		field: 'id',
		headerName: 'ID',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 250,
	},
	{
		field: 'createTime',
		headerName: 'Date début',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 200,
	},
	{
		field: 'processInstance',
		headerName: 'Process Instance',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 150,
	},

	{
		field: 'action',
		headerName: ' ',
		align: 'center',
		headerClassName: 'columns--header',
		flex: 0.1,
		renderCell: (value) => <FiChevronRight />,
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
		field: 'name',
		headerName: 'Nom',
		flex: 0.4,
		minWidth: 150,
	},
	{
		field: 'type',
		headerName: 'Type',
		flex: 0.2,
		minWidth: 100,
	},
	{
		field: 'value',
		headerName: 'Valeur',
		flex: 0.6,
		minWidth: 200,
	},
	{
		field: 'action',
		headerName: ' ',
		align: 'center',
		flex: 0.1,
		minWidth: 90,
		renderCell: (value) => <FiEdit3 />,
	},
];

export const defaultDataVariables = [
	{
		id: 'MockData',
		name: '[NomVariable]',
		type: '[TypeVariable (string, bool, etc..)]',
		value: 'Pas de variables trouvée',
		action: '',
	},
];

export const processManualTasksColumns = [
	{
		field: 'name',
		headerName: 'Nom',
		flex: 0.3,
		minWidth: 100,
	},
	{
		field: 'id',
		headerName: 'Task ID',
		flex: 0.5,
		minWidth: 200,
	},
	{
		field: 'createTime',
		headerName: 'Date de création',
		flex: 0.3,
		minWidth: 150,
	},
	{
		field: 'action',
		headerName: ' ',
		align: 'center',
		flex: 0.1,
		minWidth: 90,
		renderCell: (params) => (
			<IconButton
				aria-label='Claim & Exectute task'
				component={Link}
				to='/home'
				onClick={() => {
					temporaryExecuteTask(params.row.id, params.row.name);
					window.location.replace('/', '_blank');
				}}
			>
				<FiUserPlus />
			</IconButton>
		),
	},
];
export const defaultDataManualTask = [
	{
		name: '[NomTask]',
		createTime: '[Ddd Mmm Jj HH:MM:SS UTC YYYY]',
		id: 'Pas de taches manuelles trouvée',
		action: '',
	},
];

export const processBPMNElementColumn = [
	{
		field: 'id',
		headerName: "Nom de l'activité",
		flex: 0.2,
		minWidth: 100,
	},
	{
		field: 'name',
		headerName: 'Nom',
		flex: 0.4,
		minWidth: 150,
	},
	{
		field: 'description',
		headerName: 'Description',
		flex: 0.5,
		minWidth: 200,
	},
	{
		field: 'implementationType',
		headerName: 'Implémentation',
		flex: 0.3,
		minWidth: 150,
	},
	{
		field: 'asynchronous',
		headerName: 'Execution asynchrone',
		align: 'center',
		flex: 0.1,
		minWidth: 90,
		renderCell: (value) =>
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

	{
		field: 'action',
		headerName: ' ',
		flex: 0.1,
		minWidth: 90,
		align: 'center',
		renderCell: (value) => <FiEdit3 />,
	},
];
export const defaultBpmnElement = [
	{
		name: '[NomElement]',
		id: 'idBPMNElement',
		description: 'Brief description of the task',
		implementationType: 'Whether the task is a delegate or not',
		asynchronous: true,
		action: '',
	},
];
