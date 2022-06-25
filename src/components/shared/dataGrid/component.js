import {
	GridToolbarContainer,
	GridToolbarExport,
	GridToolbarFilterButton,
} from '@mui/x-data-grid';
import StyledDataGrid from '../styledComponents/dataGrid/component';
import { Box } from '@mui/material';

const CustomToolbar = () => {
	return (
		<GridToolbarContainer>
			<GridToolbarExport printOptions={{ disableToolbarButton: true }} />
			<GridToolbarFilterButton />
		</GridToolbarContainer>
	);
};

const CustomDataGrid = (props) => {
	const rows = props.rows;
	const columns = props.columns;
	return (
		<Box
			sx={{
				height: 500,
				width: '100%',
				'& .columns--header': {
					fontWeight: '700',
				},
			}}
		>
			<StyledDataGrid
				components={{
					Toolbar: CustomToolbar,
				}}
				rows={rows}
				columns={columns}
				rowsPerPageOptions={[5, 10, 20]}
				getRowHeight={() => 'auto'}
				getRowClassName={() => 'row--style'}
				disableSelectionOnClick
			/>
		</Box>
	);
};

export default CustomDataGrid;
