import DonutChart from 'react-donut-chart';

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
	const reactDonutChartBackgroundColor = props.data.map(function (data) {
		return data.color;
	});
	return (
		<DonutChart
			width={150}
			height={150}
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
		/>
	);
};
export default DonutChartCustom;
