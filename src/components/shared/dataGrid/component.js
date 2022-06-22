import React from 'react';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => {
	return {
		table: {},
	};
});

const CustomDataGrid = (props) => {
	const data = props.data;
	const columns = props.columns;
	const { classes } = useStyles();
	const options = {
		filterType: 'checkbox',
		selectableRows: 'none',
		resizableColumns: true,
		rowsPerPageOptions: [4, 5, 10, 15],
		rowsPerPage: 4,
		download: false,
		print: false,
		viewColumns: false,
	};

	return (
		<MUIDataTable
			data={data}
			columns={columns}
			options={options}
			count
			className={classes.table}
		/>
	);
};

export default CustomDataGrid;
