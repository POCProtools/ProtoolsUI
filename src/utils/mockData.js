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
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'firstName',
		headerName: 'First name',
		width: 150,
		editable: true,
	},
	{
		field: 'lastName',
		headerName: 'Last name',
		width: 150,
		editable: true,
	},
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 110,
		editable: true,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
];

export const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
