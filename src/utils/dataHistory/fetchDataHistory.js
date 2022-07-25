import { fetcherGet } from 'core/fetchData/fetchData';

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
	const dataUrlTask = [];
	const dataUrlActivities = [];
	fetcherGet(apiUrl)
		.then((r) => {
			const taskFilter = ['userTask', 'serviceTask', 'subProcess'];
			const activitiesFilter = [
				'startEvent',
				'exclusiveGateway',
				'endEvent',
				'intermediateCatchEvent',
				'parallelGateway',
			];
			const datatmpsActivites = r.data.filter((item) => {
				return activitiesFilter.includes(item.activityType);
			});
			const datatmp = r.data.filter((item) => {
				return taskFilter.includes(item.activityType);
			});
			console.log('datatmpsActivites', datatmpsActivites);
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

				dataUrlTask.push(obj);
			}
			for (let i = 0; i < datatmpsActivites.length; i++) {
				const obj = {
					id: datatmpsActivites[i].id,
					name: datatmpsActivites[i].activityName,
					type: datatmpsActivites[i].activityType,
					processID: datatmpsActivites[i].processDefinitionId,
					deleted: datatmpsActivites[i].deleted,
					duration:
						datatmpsActivites[i].durationInMillis !== null
							? msToHMS(datatmpsActivites[i].durationInMillis)
							: msToHMS(0),
				};

				dataUrlActivities.push(obj);
			}
			//console.log('dataUrlPastTask: ', dataUrlTask);
			console.log('dataUrlPastActivities: ', dataUrlActivities);
		})
		.catch((e) => {
			console.log(e);
		});

	return [dataUrlTask, dataUrlActivities];
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
