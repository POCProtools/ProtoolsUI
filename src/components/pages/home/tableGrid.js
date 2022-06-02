import React from 'react';
//import { useState, useEffect } from 'react';
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
	table: {
		style: {
			//maxHeight: 300,
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
	// const [totalRows, setTotalRows] = useState(0);
	// const [perPage, setPerPage] = useState(5);
	// const [item, setItem] = useState([]);
	// useEffect(() => {
	// 	fetchData(1, perPage);
	// }, [perPage]); // Overkill ici, transformer quand j'aurai les api
	// const fetchData = async (page, per_page) => {
	// 	setItem(rows.slice(0, per_page));
	// 	setTotalRows(item.length);
	// 	console.log(item.length);
	// };
	// const handlePageChange = (page) => {
	// 	fetchData(page, perPage);
	// };

	// const handlePerRowsChange = async (newPerPage, page) => {
	// 	setPerPage(newPerPage);
	// };
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

			//paginationServer
			//paginationTotalRows={totalRows}
			//onChangePage={handlePageChange}
			//onChangeRowsPerPage={handlePerRowsChange}
		/>
	);
};

export default EnhancedTable;
