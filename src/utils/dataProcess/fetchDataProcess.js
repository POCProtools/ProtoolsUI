import { fetcherGet } from 'core/fetchData/fetchData';
export const getUrlBPMNByProcessName = (selected) => {
	switch (selected) {
		case 'CasUtilisationPOC':
			return 'https://raw.githubusercontent.com/Stage2022/Protools-Flowable/main/src/main/resources/processes/casUsageTest.bpmn20.xml';
		default:
			console.log('Error: BPMN file not found');
			return 'https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/master/modeler/resources/newDiagram.bpmn';
	}
};

export const getAvailableTasks = (id) => {
	const urlEndpoint = 'tasksProcessID/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + id;
	const dataUrl = [];
	const listName = [];
	fetcherGet(apiUrl)
		.then((r) => {
			const datatmp = r.data;
			for (let i = 0; i < datatmp.length; i++) {
				dataUrl.push({
					id: datatmp[i].id,
					name: datatmp[i].name,
					processInstance: datatmp[i].processInstance,
					createTime: datatmp[i].createTime,
					processDefinitionID: datatmp[i].processDefinitionID,
				});
				listName.push(datatmp[i].name);
			}
		})
		.catch((e) => {
			console.log('error', e);
		});
	return [dataUrl, listName];
};

export const getBPMNInfo = (id, listName) => {
	const urlEndpoint = 'bpmnInfo/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + id;
	//console.log('apiUrlBPMNinfo: ', apiUrl);
	fetcherGet(apiUrl)
		.then((r) => {
			return r.data;
		})
		.then((dataBpmnResponse) => {
			console.log('BpmnElement: ', dataBpmnResponse);
			const response = getCorrespondingBpmnElement(dataBpmnResponse, listName);
			console.log('BPMN Correspondance: ', response);
			return response;
		})
		.catch((e) => {
			console.log('error', e);
		});
};

export const getProcessDefinitionID = async (id) => {
	const urlEndpoint = 'processDefinition/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + id;
	fetcherGet(apiUrl)
		.then((r) => {
			console.log('getProcessDefinitionID r.data', r.data);
			return r.data;
		})
		.catch((e) => {
			console.log('error', e);
		});
	//console.log('ProcessDefinitionId', result);
};

export const getCorrespondingBpmnElement = (BpmnResponse, liste) => {
	//console.log('BpmnResponse: ', BpmnResponse);
	console.log('liste: ', liste);
	const obj = Object.entries(BpmnResponse).reduce(
		(acc, [key, val]) =>
			liste.filter((name) => name === val.name).length > 0
				? { ...acc, [val.name]: key }
				: { ...acc },

		{}
	);
	return obj;
};

export const getCurrentActivityName = (id) => {
	const [taskData, listName] = getAvailableTasks(id);

	console.log('taskData: ', taskData);
	console.log('listName: ', listName);
	const urlEndpoint = 'processDefinition/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + id;
	fetcherGet(apiUrl)
		.then((r) => {
			return r.data;
		})
		.then((result) => {
			console.log('processDefinitionId: ', result);

			return getBPMNInfo(result, listName);
		})
		.catch((e) => {
			console.log('error', e);
		});
};
