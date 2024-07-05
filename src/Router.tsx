import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Calendar from './pages/Calendar';
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
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/setting" element={<Setting />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
