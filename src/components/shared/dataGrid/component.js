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
			<GridToolbarFilterButton />
			<GridToolbarExport printOptions={{ disableToolbarButton: true }} />
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
				localeText={{
					toolbarFilters: 'Filtres',
					toolbarExport: 'Export',
				}}
				rows={rows}
				columns={columns}
				autoPageSize
				pagination
				getRowHeight={() => 'auto'}
				getRowClassName={() => 'row--style'}
				disableSelectionOnClick
			/>
		</Box>
	);
};

export default CustomDataGrid;
