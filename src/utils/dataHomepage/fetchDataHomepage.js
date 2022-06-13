import { fetcherGet } from 'core/fetchData/fetchData';

export const fetchProcessData = () => {
	const urlEndpoint = 'processInstances/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	fetcherGet(apiUrl).then((r) => {
		const datatmp = r.data.processes;
		console.log(r.data);
		for (let i = 0; i < datatmp.length; i++) {
			dataUrl.push({
				id: datatmp[i].id,
				state: true,
				name: datatmp[i].processKey,
				date: datatmp[i].startTime,
				action: datatmp[i].id,
			});
		}
		console.log('dataUrl : ', dataUrl);
	});
	return dataUrl;
};

export const fetchTaskData = () => {
	const urlEndpoint = 'tasks/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	fetcherGet(apiUrl).then((r) => {
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
		console.log('dataUrl : ', dataUrl);
	});
	return dataUrl;
};
