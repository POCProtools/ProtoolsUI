import React from 'react';
import MUIDataTable from 'mui-datatables';
import { data, columns } from 'utils/mockData';
import { makeStyles } from 'tss-react/mui';

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
