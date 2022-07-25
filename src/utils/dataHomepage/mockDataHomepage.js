import { FiChevronRight, FiCheck, FiPauseCircle } from 'react-icons/fi';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
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
		type: 'boolean',
		flex: 0.18,
		align: 'center',
		renderCell: (params) =>
			params.value ? (
				<Box display='flex' alignItems='center' justifyContent='center'>
					<FiCheck size={20} color='#17C3B2' />
				</Box>
			) : (
				<Box display='flex' alignItems='center' justifyContent='center'>
					<FiPauseCircle size={20} color='#F25C54' sx={{ align: 'center' }} />
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
			<Link
				to={`/process/${params.value.url}`}
				underline='none'
				state={{
					doc: params.value.doc,
					date: params.value.date,
					key: params.value.key,
					state: params.value.state,
				}}
			>
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
		minWidth: 170,
	},
	{
		field: 'processInstance',
		headerName: 'Process Instance',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 150,
	},
];

// Mock data for available usertasks
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

// Mock column incidents
export const columnsIncidents = [
	{
		field: 'name',
		headerName: 'Nom',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 150,
	},
	{
		field: 'id',
		headerName: 'ID',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 150,
	},
	{
		field: 'type',
		headerName: 'Type',
		headerClassName: 'columns--header',
		flex: 0.5,
		maxWidth: 80,
	},
	{
		field: 'processID',
		headerName: 'Process Definition ID',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 500,
	},
	{
		field: 'retries',
		headerName: 'Retries	',
		headerClassName: 'columns--header',
		flex: 0.5,
		maxWidth: 80,
	},
];
