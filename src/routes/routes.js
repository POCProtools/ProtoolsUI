import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/pages/home/component';
import Login from 'components/pages/login/component';
import SideBar from 'components/shared/sidepanel';
import Header from 'components/shared/headers';
import Design from 'components/pages/design/component';
const RoutesWeb = () => {
	return (
		<Router>
			<Header />
			<SideBar />
			<Routes>
				<Route path={'/'} exact element={<Home />} />
				<Route path={'/login'} element={<Login />} />
				<Route path={'/design'} element={<Design />} />
			</Routes>
		</Router>
	);
};

export default RoutesWeb;
