import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import sampleImg from '@/assets/images/sample.png';

import { PAGE_ROUTE, PageRouteValues } from '@/constants/pages';

import NavBarIcon from './NavBarIcon';

function NavBar() {
	const navigate = useNavigate();
	const current = useLocation();
	const moveToPage = (type: string) => {
		navigate(`/${type}`);
	};
	return (
		<NavBarLayout>
			<ProfileImg src={sampleImg} alt="프로필" />
			<IconContainer>
				{Object.entries(PAGE_ROUTE).map(([type, path]) => (
					<NavBarIcon
						key={path as PageRouteValues}
						type={path as PageRouteValues}
						isCurrent={current.pathname === `/${type}`}
						onClick={() => moveToPage(type)}
					/>
				))}
			</IconContainer>
		</NavBarLayout>
	);
}
const NavBarLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12rem;
	align-items: center;
	width: 7.2rem;
	height: 100vh;

	border-right: 1px solid ${({ theme }) => theme.palette.GREY_02};
`;
const ProfileImg = styled.img`
	width: 4.4rem;
	height: 4.4rem;
	margin-top: 2.5rem;

	background-color: #dfe9fc;
	border-radius: 50%;
`;
const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;
export default NavBar;
