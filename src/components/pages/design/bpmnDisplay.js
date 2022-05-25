import ReactBpmn from 'react-bpmn';
import casUsageTest from 'assets/casUsageTest.bpmn20.xml';

const Display = () => {
	function onShown() {
		console.log('diagram shown');
	}

	function onLoading() {
		console.log('diagram loading');
	}

	function onError(err) {
		console.log('failed to show diagram');
	}

	return (
		<ReactBpmn
			url={casUsageTest}
			onShown={onShown}
			onLoading={onLoading}
			onError={onError}
		/>
	);
};

export default Display;
