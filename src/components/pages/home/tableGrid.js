import React from 'react';
import MUIDataTable from 'mui-datatables';
import { data, columns } from 'utils/mockData';
import { makeStyles } from 'tss-react/mui';
//import { FiSearch } from 'react-icons/fi';

const useStyles = makeStyles()((theme) => {
	return {
		table: {},
	};
});

const EnhancedTable = () => {
	const { classes } = useStyles();
	const options = {
		filterType: 'checkbox',
		resizableColumns: true,
		rowsPerPageOptions: [3, 5, 10, 15],
		rowsPerPage: 3,
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

export default EnhancedTable;
