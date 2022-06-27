import { FiChevronRight, FiCheck, FiXCircle } from 'react-icons/fi';
import { Box, Link } from '@mui/material';
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
