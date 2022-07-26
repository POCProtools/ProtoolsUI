import { FiChevronRight, FiCheck, FiPauseCircle } from 'react-icons/fi';
import { Box } from '@mui/material';

export const columnsProcessDataHistory = [
	{
		field: 'id',
		headerName: 'ID',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 200,
	},
	{
		field: 'name',
		headerName: 'Process Key',
		headerClassName: 'columns--header',
		flex: 0.4,
		minWidth: 100,
	},
	{
		field: 'businessKey',
		headerName: 'Type',
		headerClassName: 'columns--header',
		flex: 0.3,
		maxWidth: 220,
	},
	{
		field: 'duration',
		headerName: 'Duration',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 150,
	},
	{
		field: 'revision',
		headerName: 'Révision',
		headerClassName: 'columns--header',
		flex: 0.3,
		maxWidth: 100,
	},
	{
		field: 'action',
		headerName: ' ',
		headerClassName: 'columns--header',
		flex: 0.1,
		maxWidth: 80,
		align: 'center',
		renderCell: (params) => <FiChevronRight />,
	},
];

export const columnsTaskDataHistory = [
	{
		field: 'name',
		headerName: 'Nom',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 100,
	},
	{
		field: 'processID',
		headerName: 'Process ID',
		headerClassName: 'columns--header',
		flex: 0.6,
		minWidth: 450,
	},
	{
		field: 'type',
		headerName: 'Type',
		headerClassName: 'columns--header',
		flex: 0.2,
		minWidth: 100,
	},
	{
		field: 'duration',
		headerName: 'Duration',
		headerClassName: 'columns--header',
		flex: 0.2,
		minWidth: 150,
	},
	{
		field: 'endDate',
		headerName: 'Date fin',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 150,
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
