import { fetcherPost } from 'core/fetchData/fetchData';

export const claimTask = (user, taskID) => {
	const urlEndpoint = 'get-tasks/';
	const apiUrl =
		process.env.REACT_APP_API_URL + urlEndpoint + user + '/' + taskID;
	return fetcherPost(apiUrl)
		.then((r) => {
			console.log('Claim task Response :', r);
		})
		.catch((e) => {
			console.log('error', e);
		});
};

export const executeTask = (user, taskID, variables) => {
	const urlEndpoint = 'complete-task/';

	const apiUrl =
		process.env.REACT_APP_API_URL + urlEndpoint + user + '/' + taskID;

	fetcherPost(apiUrl, variables).then((r) => {
		console.log('Task executed! :', r);
	});
};

// Temporary solution to execute task, depend on forms type
export const temporaryExecuteTask = (taskID, taskName) => {
	let variables = {};
	console.log('taskName: ', taskName);
	switch (taskName) {
		case 'Check Final State':
			variables = {};
			break;
		case 'Fill survey info':
			variables = {
				idSurvey: '0',
				name: 'TestProcessExecutionViaFront',
				dateDeb: '01-01-2022',
				dateEnd: '01-12-2022',
				state_survey: 'notReady',
				sampleSize: '6',
			};
			break;
		default:
			console.log('Error : Task Not found, default variables to {}');
	}
	console.log('variables: ', variables);

	const urlEndpoint = 'get-tasks/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + 'user/' + taskID;
	return fetcherPost(apiUrl)
		.then((r) => {
			console.log('Claim task Response :', r);
			const urlEndpointExe = 'complete-task/';
			const apiUrlExe =
				process.env.REACT_APP_API_URL + urlEndpointExe + 'user/' + taskID;
			console.log('apiUrlExe: ', apiUrlExe);
			fetcherPost(apiUrlExe, variables).then((r) => {
				console.log('Task executed! :', r);
			});
		})
		.catch((e) => {
			console.log('error', e);
		});
};

export const startProcess = (processKey) => {
	const urlEndpoint = 'start-process/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + processKey;
	const dataUrl = [];
	fetcherPost(apiUrl)
		.then((r) => {
			console.log('Process started : ', r.data);
			dataUrl.push(r.data);
		})
		.catch((error) => {
			console.log('error', error);
		});
	return dataUrl;
};
