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
	box-sizing: border-box;
	width: 136.6rem;
	height: 76.8rem;
	padding-left: 7.2rem;

	border: 1px solid ${({ theme }) => theme.palette.Orange.Orange5};
`;

export default MainLayout;
