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
	position: relative;
	width: 136.6rem;
	height: 76.8rem;
	padding-left: 7.2rem;

	background-color: ${({ theme }) => theme.palette.Grey.White};
	border-radius: 8px;
`;

export default MainLayout;
