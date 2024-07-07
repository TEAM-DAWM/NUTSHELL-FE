import { Outlet } from 'react-router-dom';

import NavBar from '@/components/common/NavBar';

function MainLayout() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}

export default MainLayout;
