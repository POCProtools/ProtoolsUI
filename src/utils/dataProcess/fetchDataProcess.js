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
	const urlEndpoint = 'tasksProcess/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + id;
	const dataUrl = [];

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
			console.log('Available tasks: ' + dataUrl);
		})
		.catch((e) => {
			console.log(e);
		});
	return dataUrl;
};

export const getBPMNInfo = (id) => {
	const urlEndpoint = 'bpmnInfo/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint + '/' + id;
	const dataBpmnResponse = {};
	fetcherGet(apiUrl)
		.then((r) => {
			const datatmp = r.data;
			console.log(r.data);
			for (let i = 0; i < datatmp.length; i++) {
				dataBpmnResponse.push({
					idElement: datatmp[i],
				});
			}
			console.log(dataBpmnResponse);
		})
		.catch((e) => {
			console.log(e);
		});
	return dataBpmnResponse;
};

export const getCorrespondingBpmnElement = (BpmnResponse, liste) => {
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
	const taskData = getAvailableTasks(id);
	const listName = [];
	for (let i = 0; i < taskData.length; i++) {
		listName.push(taskData[i].name);
	}
	const ProcessDefinitionId = taskData[0].ProcessDefinitionId;
	const BpmnElement = getBPMNInfo(ProcessDefinitionId);
	const response = getCorrespondingBpmnElement(BpmnElement, listName);
	console.log(listName);
	console.log(response);
	return response;
};
