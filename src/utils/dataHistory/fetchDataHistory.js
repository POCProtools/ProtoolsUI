import { fetcherGet } from 'core/fetchData/fetchData';
import theme from 'theme';
import Moment from 'moment';

function msToHMS(ms) {
	// 1- Convert to seconds:
	let seconds = ms / 1000;
	// Extract hours & days:
	const days = parseInt(seconds / 86400);
	seconds = seconds % 86400;
	const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
	seconds = seconds % 3600; // seconds remaining after extracting hours
	//  Extract minutes:
	const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
	// Keep only seconds not extracted to minutes:
	seconds = Math.round(seconds % 60);
	return days + 'j ' + hours + 'h ' + minutes + 'min ' + seconds + 'sec ';
}

export const fetchTaskDataHistory = () => {
	const urlEndpoint = 'history/activity/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	fetcherGet(apiUrl)
		.then((r) => {
			const taskFilter = ['userTask', 'serviceTask', 'subProcess'];
			const datatmp = r.data.filter((item) => {
				return taskFilter.includes(item.activityType);
			});
			for (let i = 0; i < datatmp.length; i++) {
				const obj = {
					id: datatmp[i].id,
					name: datatmp[i].activityName,
					type: datatmp[i].activityType,
					processID: datatmp[i].processDefinitionId,
					deleted: datatmp[i].deleted,
					duration:
						datatmp[i].durationInMillis !== null
							? msToHMS(datatmp[i].durationInMillis)
							: msToHMS(0),
				};

				dataUrl.push(obj);
			}
			console.log('dataUrlPastActivities: ', dataUrl);
		})
		.catch((e) => {
			console.log(e);
		});

	return [dataUrl];
};

export const fetchProcessDataHistory = () => {
	const urlEndpoint = 'history/process/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	fetcherGet(apiUrl)
		.then((r) => {
			const datatmp = r.data;
			for (let i = 0; i < 30; i++) {
				const obj = {
					id: datatmp[i].processInstanceId,
					name: datatmp[i].processDefinitionKey,
					type: datatmp[i].activityType,
					businessKey: datatmp[i].businessKey,
					deleted: datatmp[i].deleted,
					revision: datatmp[i].revision,
					duration:
						datatmp[i].durationInMillis !== null
							? msToHMS(datatmp[i].durationInMillis)
							: msToHMS(0),
				};

				dataUrl.push(obj);
			}
			console.log('dataUrlPastProcess: ', dataUrl);
		})
		.catch((e) => {
			console.log(e);
		});

	return [dataUrl];
};
