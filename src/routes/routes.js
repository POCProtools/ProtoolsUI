import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/pages/home/component';
import Header from 'components/shared/header/headers';
import Design from 'components/pages/design/component';
import Display from '../components/pages/design/bpmnDisplay';
import BPMNViewer from 'components/pages/process/processView/component';
import ProcessSelect from 'components/pages/process/component';
const RoutesWeb = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path={'/'} exact element={<Home />} />
				<Route path={'/process'} element={<ProcessSelect />} />
				<Route path={'/process/:processKey/:id'} element={<BPMNViewer />} />
				<Route path={'/design'} element={<Design />} />
				<Route path={'/display'} element={<Display />} />
			</Routes>
		</Router>
	);
};

export default RoutesWeb;
