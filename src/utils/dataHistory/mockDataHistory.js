import { FiChevronRight, FiCheck, FiPauseCircle } from 'react-icons/fi';
import { Box } from '@mui/material';

export const columnsProcessDataHistory = [
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
		headerName: 'Date de fin',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 150,
	},
	{
		field: 'action',
		headerName: ' ',
		headerClassName: 'columns--header',
		flex: 0.15,
		align: 'center',
		renderCell: (params) => <FiChevronRight />,
	},
];

export const columnsTaskDataHistory = [
	{
		field: 'name',
		headerName: 'Nom',
		headerClassName: 'columns--header',
		flex: 0.5,
		maxWidth: 250,
	},
	{
		field: 'processID',
		headerName: 'Process ID',
		headerClassName: 'columns--header',
		flex: 0.4,
		minWidth: 250,
	},
	{
		field: 'type',
		headerName: 'Type',
		headerClassName: 'columns--header',
		flex: 0.5,
		maxWidth: 200,
	},
	{
		field: 'duration',
		headerName: 'Duration',
		headerClassName: 'columns--header',
		flex: 0.5,
		maxWidth: 150,
	},
	{
		field: 'deleted',
		headerName: 'Success',
		headerClassName: 'columns--header',
		flex: 0.3,
		maxWidth: 100,
		align: 'center',
		renderCell: (params) =>
			!params.value ? (
				<Box display='flex' alignItems='center' justifyContent='center'>
					<FiCheck size={20} color='#17C3B2' />
				</Box>
			) : (
				<Box display='flex' alignItems='center' justifyContent='center'>
					<FiPauseCircle size={20} color='#F25C54' sx={{ align: 'center' }} />
				</Box>
			),
	},
];
