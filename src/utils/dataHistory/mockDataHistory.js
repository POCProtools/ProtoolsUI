import { FiChevronRight } from 'react-icons/fi';

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
		field: 'id',
		headerName: 'ID',
		headerClassName: 'columns--header',
		flex: 0.6,
		minWidth: 200,
	},
	{
		field: 'processID',
		headerName: 'Process ID',
		headerClassName: 'columns--header',
		flex: 0.4,
		minWidth: 150,
	},
	{
		field: 'type',
		headerName: 'Type',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 250,
	},
	{
		field: 'duration',
		headerName: 'Duration',
		headerClassName: 'columns--header',
		flex: 0.5,
		minWidth: 250,
	},
	{
		field: 'endDate',
		headerName: 'Date de fin',
		headerClassName: 'columns--header',
		flex: 0.3,
		minWidth: 150,
	},
];
