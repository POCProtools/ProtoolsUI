import React from 'react';
//import { makeStyles } from 'tss-react/mui';
import DataTable, { createTheme } from 'react-data-table-component';
import { columns, rows } from 'utils/mockData';
import theme from 'theme';

createTheme('customTheme', {
	text: {
		primary: '#374957',
		secondary: theme.palette.primary.main,
	},
	background: {
		default: theme.palette.secondary.pressed,
	},
	context: {
		background: theme.palette.secondary.pressed,
		text: '#FFFFFF',
	},
	divider: {
		default: '#073642',
	},
	action: {
		button: 'rgba(0,0,0,.54)',
		hover: 'rgba(0,0,0,.08)',
		disabled: 'rgba(0,0,0,.12)',
	},
});
const customStyles = {
	headRow: {
		style: {
			//border: 'none',
		},
	},
	headCells: {
		style: {
			color: theme.palette.primary.main,
			fontSize: '16px',
			fontWeight: 'bold',
		},
	},
	rows: {
		style: {
			backgroundColor: theme.palette.secondary.pressed,
		},
		highlightOnHoverStyle: {
			backgroundColor: 'rgb(230, 244, 244)',
			borderBottomColor: '#FFFFFF',
			borderRadius: '10px',
			outline: '1px solid #FFFFFF',
		},
	},
	pagination: {
		style: {
			border: 'none',
		},
	},
};
const EnhancedTable = () => {
	//const { classes } = useStyles();
	return (
		<DataTable
			data={rows}
			columns={columns}
			responsive
			//theme='customTheme'
			customStyles={customStyles}
			highlightOnHover
			pointerOnHover
			pagination
		/>
	);
};

export default EnhancedTable;
