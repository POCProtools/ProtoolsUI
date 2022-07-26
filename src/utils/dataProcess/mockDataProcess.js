import { Box } from '@mui/material';
import { FiEdit3, FiCheck, FiXCircle } from 'react-icons/fi';

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
		flex: 0.7,
		minWidth: 200,
	},
	{
		field: 'implementationType',
		headerName: 'Implémentation',
		flex: 0.2,
		minWidth: 150,
	},
	{
		field: 'asynchronous',
		headerName: 'Async ?',
		align: 'center',
		flex: 0.1,
		minWidth: 90,
		renderCell: (value) =>
			!value ? (
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
