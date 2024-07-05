import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Calender from './pages/Calender';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Today from './pages/Today';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/today" element={<Today />} />
				<Route path="/dashboard" element={<DashBoard />} />
				<Route path="/calender" element={<Calender />} />
				<Route path="/setting" element={<Setting />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
