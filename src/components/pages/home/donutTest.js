import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';
import theme from 'theme';
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
	const plugins = [
		{
			beforeDraw: function (chart) {
				var width = chart.width,
					height = chart.height,
					ctx = chart.ctx;
				ctx.restore();
				var fontSize = 1.7;
				ctx.font = fontSize + 'em sans-serif';

				ctx.textBaseline = 'top';
				var text = dataNumber,
					textX = Math.round((width - ctx.measureText(text).width) / 2),
					textY = height / 2.4;
				ctx.fillStyle = theme.palette.primary.main;
				ctx.fillText(text, textX, textY);
				ctx.save();
			},
		},
	];
	const options = {
		responsive: true,
		legend: {
			display: true,
			position: 'bottom',
		},
		label: {
			display: true,
		},
	};

	return (
		<Box sx={{ width: '150px', marginTop: 2, marginLeft: 3, marginRight: 3 }}>
			<Doughnut data={data} options={options} plugins={plugins} />
		</Box>
	);
};
export default DoughnutChart;
