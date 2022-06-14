export const getUrlBPMNByProcessName = (selected) => {
	switch (selected) {
		case 'CasUtilisationPOC':
			return 'https://raw.githubusercontent.com/Stage2022/Protools-Flowable/main/src/main/resources/processes/casUsageTest.bpmn20.xml';
		default:
			console.log('Error: BPMN file not found');
			return 'https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/master/modeler/resources/newDiagram.bpmn';
	}
};
