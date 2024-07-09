import styled from '@emotion/styled';

function LogOutBtn() {
	return <LogOutBox>로그아웃</LogOutBox>;
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
