import React from 'react';
//import { makeStyles } from 'tss-react/mui';
import { DataGrid } from '@mui/x-data-grid';
//import { Box } from '@mui/material';
import { columns, rows } from 'utils/mockData';

// const useStyles = makeStyles()((theme) => {
// 	return {
// 		table: {
// 			display: 'flex',
// 			height: 300,
// 			width: '575%',
// 		},
// 	};
// });
const EnhancedTable = () => {
	//const { classes } = useStyles();
	return (
		<DataGrid
			rows={rows}
			columns={columns}
			pageSize={3}
			rowsPerPageOptions={[3]}
			checkboxSelection
			disableSelectionOnClick
		/>
	);
};

export default EnhancedTable;
