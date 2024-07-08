import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import NavBar from '@/components/common/NavBar';

function MainLayout() {
	return (
		<MainLayOutContainer>
			<NavBar />
			<Outlet />
		</MainLayOutContainer>
	);
}
const MainLayOutContainer = styled.div`
	padding-left: 7.2rem;
`;

export default MainLayout;
