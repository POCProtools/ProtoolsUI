import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';
//import theme from 'theme';
//import { makeStyles } from 'tss-react/mui';

const DoughnutChart = (props) => {
	const data = props.data;
	ChartJS.register(ArcElement, Tooltip);
	const dataNumber = props.data.datasets[0].data.reduce(
		(partialSum, a) => partialSum + a,
		0
	);
	console.log(dataNumber);
	//const classes = useStyles();
	return (
		<Box sx={{ width: '150px', marginTop: 2, marginLeft: 3, marginRight: 3 }}>
			<Doughnut
				data={data}
				options={{
					responsive: true,
					legend: {
						display: true,
						position: 'bottom',
					},
					label: {
						display: true,
					},
				}}
			/>
		</Box>
	);
};
export default DoughnutChart;
