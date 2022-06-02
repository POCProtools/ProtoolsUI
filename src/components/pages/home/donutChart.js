import DonutChart from 'react-donut-chart';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles((theme) => ({
	donutChart: {
		'&:-innertext': {
			'&:-innertext-label': {
				fontSize: '0.8em',
			},
		},
	},
}));
const reactDonutChartInnerRadius = 0.38;
const reactDonutChartOuterRadius = 0.7;
const reactDonutChartSelectedOffset = 0.01;
const reactDonutChartHandleClick = (item, toggled) => {
	if (toggled) {
		console.log(item);
	}
};
const reactDonutChartFormat = (values) => `${values}`;

const DonutChartCustom = (props) => {
	const classes = useStyles();
	const reactDonutChartBackgroundColor = props.data.map(function (data) {
		return data.color;
	});
	return (
		<DonutChart
			width={180}
			height={180}
			//onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
			strokeColor='#FFFF'
			data={props.data}
			colors={reactDonutChartBackgroundColor}
			innerRadius={reactDonutChartInnerRadius}
			outerRadius={reactDonutChartOuterRadius}
			selectedOffset={reactDonutChartSelectedOffset}
			formatValues={reactDonutChartFormat}
			legend={false}
			onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
			className={classes.donutChart}
		/>
	);
};
export default DonutChartCustom;
