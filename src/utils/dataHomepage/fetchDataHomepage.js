import { fetcherGet } from 'core/fetchData/fetchData';
import theme from 'theme';

// Retrive all process currently running
export const fetchProcessData = () => {
	const urlEndpoint = 'processInstances/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	var pieProcessdata = {
		labels: ['Conception (Connected)', 'Collecte', 'Traitement', 'IDK'],
		datasets: [
			{
				label: 'processus',
				data: [0, 19, 3, 5],
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
					state: true,
					name: datatmp[i].processKey,
					date: datatmp[i].startTime,
					action: datatmp[i].processKey + '/' + datatmp[i].id,
				});
			}

			pieProcessdata.datasets[0].data = [datatmp.length, 1, 2, 3];
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
		labels: ['Conception (Connected)', 'Collecte', 'Traitement', 'IDK'],
		datasets: [
			{
				label: 'processus',
				data: [0, 19, 3, 5],
				backgroundColor: ['#FEC89A', '#B56576', '#98C1D9', '#84A98C'],
				borderColor: [theme.palette.background.default],
				borderWidth: 2,
			},
		],
	};
	fetcherGet(apiUrl)
		.then((r) => {
			const datatmp = r.data;
			console.log(r.data);
			for (let i = 0; i < datatmp.length; i++) {
				dataUrl.push({
					id: datatmp[i].id,
					name: datatmp[i].name,
					processInstance: datatmp[i].processInstance,
					createTime: datatmp[i].createTime,
				});
			}
			pieProcessdata.datasets[0].data = [datatmp.length, 4, 2, 1];
		})
		.catch((e) => {
			console.log(e);
		});
	return [dataUrl, pieProcessdata];
};
