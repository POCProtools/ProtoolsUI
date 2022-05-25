import BpmnViewer from 'bpmn-js';
import casUsageTest from 'assets/casUsage.bpmn20/xml';

var viewer = new BpmnViewer({
	container: '#canvas',
});

viewer
	.importXML(casUsageTest)
	.then(function (result) {
		const { warnings } = result;
		console.log('success!', warnings);
		viewer.get('canvas').zoom('fit-viewport');
	})
	.catch(function (err) {
		const { warnings, message } = err;

		console.log('something went wrong:', warnings, message);
	});
