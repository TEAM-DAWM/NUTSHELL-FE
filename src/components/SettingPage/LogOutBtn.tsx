import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import userLogout from '@/apis/logout/logoutAxios';

function LogOutBtn() {
	const navigator = useNavigate();

	const handleLogoutButton = async () => {
		try {
			await userLogout();
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
			navigator('/');
		} catch (error) {
			console.error(error);
		}
	};

	return <LogOutBox onClick={handleLogoutButton}>로그아웃</LogOutBox>;
}

export default LogOutBtn;

const LogOutBox = styled.button`
	display: flex;
	gap: 1rem;
	align-items: center;
	align-self: stretch;
	justify-content: center;
	box-sizing: border-box;
	width: 41.2rem;
	height: 3.6rem;
	margin: 2rem 0 2.8rem 1rem;
	padding: 1.2rem 1.6rem;

	color: ${({ theme }) => theme.palette.Grey.Grey6};

	background: ${({ theme }) => theme.palette.Grey.Grey3};
	border-radius: 8px;
	${({ theme }) => theme.fontTheme.BODY_02};
`;
