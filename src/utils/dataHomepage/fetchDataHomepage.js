/* eslint-disable no-unused-vars */
import { fetcherGet } from 'core/fetchData/fetchData';
import theme from 'theme';
import Moment from 'moment';
import { taskDictionary } from 'utils/mockData';
// Retrive all process currently running
export const fetchProcessData = () => {
	const urlEndpoint = 'processInstances/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	var pieProcessdata = {
		labels: ['TirageEnquête', 'TestPOC', 'UnPandaRouxDors', 'IDK'],
		datasets: [
			{
				label: 'processus',
				data: [0, 0, 0, 0],
				backgroundColor: ['#FEC89A', '#B56576', '#98C1D9', '#84A98C'],
				borderColor: [theme.palette.background.default],
				borderWidth: 2,
			},
		],
	};

	fetcherGet(apiUrl)
		.then((r) => {
			const datatmp = r.data.processes;

			for (let i = 0; i < datatmp.length; i++) {
				dataUrl.push({
					id: datatmp[i].id,
					state: !datatmp[i].isSuspended,
					processKey: datatmp[i].processKey,
					documentation: datatmp[i].documentation,
					date: Moment(datatmp[i].startTime).format('DD/MM/YYYY - HH:mm'),
					action: {
						url: datatmp[i].processKey + '/' + datatmp[i].id,
						doc: datatmp[i].documentation,
						date: Moment(datatmp[i].startTime).format('DD/MM/YYYY - HH:mm'),
						key: datatmp[i].businessKey,
					},
				});
				const indexColor = getPieProcessColorIndex(datatmp[i].businessKey);
				pieProcessdata.datasets[0].data[indexColor] =
					pieProcessdata.datasets[0].data[indexColor] + 1;
			}
			console.log(dataUrl);
		})
		.catch((e) => {
			console.log(e);
		});
	return [dataUrl, pieProcessdata];
};

// Retrieve all available tasks
export const fetchTaskData = () => {
	const urlEndpoint = 'tasks/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	var pieProcessdata = {
		labels: ['Demande Information', 'Vérification avant Validation', 'IDK'],
		datasets: [
			{
				label: 'processus',
				data: [0, 0, 0],
				backgroundColor: ['#555b6e', '#ffd6ba', '#89b0ae'],
				borderColor: [theme.palette.background.default],
				borderWidth: 2,
			},
		],
	};
	fetcherGet(apiUrl)
		.then((r) => {
			const datatmp = r.data;
			for (let i = 0; i < datatmp.length; i++) {
				dataUrl.push({
					id: datatmp[i].TaskId,
					name: datatmp[i].name,
					processInstance: datatmp[i].processInstance,
					createTime: Moment(datatmp[i].createTime).format(
						'DD/MM/YYYY - HH:mm'
					),
					action: '',
				});
			}
			const pieData = getTaskPieColorIndex(datatmp.map((task) => task.name));
			pieProcessdata.datasets[0].data = pieData;
		})
		.catch((e) => {
			console.log(e);
		});
	return [dataUrl, pieProcessdata];
};

const getPieProcessColorIndex = (BusinessKey) => {
	switch (BusinessKey) {
		case 'TirageEnquête':
			return 0;
		case 'TestPOC':
			return 1;
		case 'UnPandaRouxDors':
			return 2;
		case 'IDK':
			return 3;
		default:
			return 4;
	}
};

export const getTaskPieColorIndex = (liste) => {
	const keys = Object.keys(taskDictionary).reduce((accumulator, value) => {
		return { ...accumulator, [value]: 0 };
	}, {});

	const obj = Object.entries(taskDictionary).reduce(
		(accumulator, [key, value]) => [
			...accumulator,
			liste.filter((task) => value.includes(task)).length,
		],
		[]
	);

	return obj;
};
