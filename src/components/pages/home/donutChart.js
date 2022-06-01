import DonutChart from 'react-donut-chart';

const reactDonutChartInnerRadius = 0.38;
const reactDonutChartOuterRadius = 0.7;
const reactDonutChartSelectedOffset = 0.02;
const reactDonutChartHandleClick = (item, toggled) => {
	if (toggled) {
		console.log(item);
	}
};
let reactDonutChartStrokeColor = '#FFFFFF';
const reactDonutChartFormat = (values) => `${values}`;

const DonutChartCustom = (props) => {
	const reactDonutChartBackgroundColor = props.data.map(function (data) {
		return data.color;
	});
	const reactDonutChartOnMouseEnter = (item) => {
		let color = props.data.find((q) => q.label === item.label).color;
		reactDonutChartStrokeColor = color;
	};
	return (
		<DonutChart
			width={200}
			height={200}
			onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
			strokeColor={reactDonutChartStrokeColor}
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
